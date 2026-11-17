// Window glass, with its light worked out by tracing rays.
//
// Glass shows two things at once: what is behind it, dimmed a little, and a reflection of what
// is in front of it, weak when looked at squarely and strong at a glancing angle (Fresnel).
// The reflection is found by following the mirrored line of sight through a small model of
// the town: the ground with its roads, the buildings as boxes with rows of windows, the trees
// as balls of leaves, and the sky beyond them. So a window shows the house across the street
// and the sky above it, not a picture of the sky that is the same everywhere.
//
// A window is looked at from two sides. From the street the room behind it is far darker than
// the day outside, so the pane dims what shows through and its reflection is what one sees
// first. From inside the room the day outside shines through clearly, and what little the
// pane mirrors is the room itself.
//
// Near a building the real rooms show through its windows. From far away, where the rooms
// have not been built, the rays that go in through the glass are followed too, into a plain
// room behind every window (floor, ceiling, walls, sometimes a curtain), so that a tower has
// depth behind its windows instead of flat mirrors.
import * as THREE from 'three'

const BOXES = 40
const TREES = 32
const WIDTH = 64

// The model of the town the rays are traced through, packed into a texture the shader reads:
// row 0 the low corner of each building, row 1 its high corner, row 2 its colour, row 3 the
// trees (centre and radius).
const cells = new Float32Array(WIDTH * 4 * 4)
const sceneMap = new THREE.DataTexture(cells, WIDTH, 4, THREE.RGBAFormat, THREE.FloatType)
sceneMap.magFilter = THREE.NearestFilter
sceneMap.minFilter = THREE.NearestFilter
sceneMap.needsUpdate = true
const plain = new THREE.DataTexture(new Uint8Array([104, 132, 84, 255]), 1, 1)
plain.colorSpace = THREE.SRGBColorSpace
plain.needsUpdate = true

const uniforms = {
  glassScene: { value: sceneMap },
  glassCount: { value: new THREE.Vector2(0, 0) },
  glassSun: { value: new THREE.Vector3(0.45, 0.64, 0.62) },
  glassGround: { value: plain },
  // West and north edge of the ground map, and one over its width and depth.
  glassGroundBox: { value: new THREE.Vector4(0, 0, 1, 1) },
}

const PARS = /* glsl */`
varying vec3 vGlassWorld;
uniform sampler2D glassScene;
uniform vec2 glassCount;
uniform vec3 glassSun;
uniform sampler2D glassGround;
uniform vec4 glassGroundBox;

// What a pane mirrors of a room: its walls, in the light that fills a room.
const vec3 glassIndoors = vec3( 0.34, 0.32, 0.29 );

float glassHash( vec2 p ) {
  p = fract( p * vec2( 123.34, 456.21 ) );
  p += dot( p, p + 45.32 );
  return fract( p.x * p.y );
}

// A surface of a given colour, lit by the sun and the sky.
vec3 glassLit( vec3 tint, vec3 n ) {
  return tint * ( 0.22 + 1.4 * max( dot( n, glassSun ), 0.0 ) );
}

// What a ray from 'ro' along 'rd' meets first: the ground, a building, a tree, or the sky.
vec3 glassTrace( vec3 ro, vec3 rd, vec3 sky ) {
  float best = 1.0e9;
  vec3 colour = sky;
  if ( rd.y < - 0.0005 ) {
    best = - ro.y / rd.y;
    vec3 p = ro + rd * best;
    vec2 uv = ( p.xz - glassGroundBox.xy ) * glassGroundBox.zw;
    bool land = uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0;
    colour = glassLit( land ? texture2D( glassGround, uv ).rgb : vec3( 0.06, 0.16, 0.22 ), vec3( 0.0, 1.0, 0.0 ) );
  }
  vec3 inv = 1.0 / rd;
  int boxes = int( glassCount.x );
  for ( int i = 0; i < ${BOXES}; i ++ ) {
    if ( i >= boxes ) break;
    vec3 lo = texelFetch( glassScene, ivec2( i, 0 ), 0 ).xyz;
    vec3 hi = texelFetch( glassScene, ivec2( i, 1 ), 0 ).xyz;
    vec3 t0 = ( lo - ro ) * inv;
    vec3 t1 = ( hi - ro ) * inv;
    vec3 tmin = min( t0, t1 );
    vec3 tmax = max( t0, t1 );
    float tn = max( max( tmin.x, tmin.y ), tmin.z );
    float tf = min( min( tmax.x, tmax.y ), tmax.z );
    // (A box the ray starts inside is the building the window itself is part of.)
    if ( tn > 0.05 && tn < tf && tn < best ) {
      best = tn;
      vec3 p = ro + rd * tn;
      vec3 n = vec3( 0.0, 1.0, 0.0 );
      if ( tmin.x >= tmin.y && tmin.x >= tmin.z ) n = vec3( - sign( rd.x ), 0.0, 0.0 );
      else if ( tmin.z >= tmin.y ) n = vec3( 0.0, 0.0, - sign( rd.z ) );
      colour = glassLit( texelFetch( glassScene, ivec2( i, 2 ), 0 ).rgb, n );
      if ( n.y < 0.5 ) {
        // Rows of windows across the wall, darker than the wall and catching a little sky.
        float along = abs( n.x ) > 0.5 ? p.z : p.x;
        vec2 cell = vec2( fract( along / 2.7 ), fract( ( p.y - 0.4 ) / 2.85 ) );
        float pane = step( 0.2, cell.x ) * step( cell.x, 0.8 ) * step( 0.32, cell.y ) * step( cell.y, 0.76 );
        colour = mix( colour, sky * 0.35 + vec3( 0.02 ), pane * 0.8 );
      } else colour *= 0.7;
    }
  }
  int trees = int( glassCount.y );
  for ( int i = 0; i < ${TREES}; i ++ ) {
    if ( i >= trees ) break;
    vec4 ball = texelFetch( glassScene, ivec2( i, 3 ), 0 );
    vec3 from = ro - ball.xyz;
    float b = dot( from, rd );
    float h = b * b - dot( from, from ) + ball.w * ball.w;
    if ( h > 0.0 ) {
      float t = - b - sqrt( h );
      if ( t > 0.05 && t < best ) {
        vec3 at = ro + rd * t - ball.xyz;
        // A crown is ragged: towards its outline the sky shows between the sprays of leaves.
        float rim = h / ( ball.w * ball.w );
        float leafy = glassHash( floor( at.xy * 3.1 + at.zz * 2.3 ) ) * 0.6 + glassHash( floor( at.zy * 7.3 + at.xx * 5.1 ) ) * 0.4;
        if ( rim > leafy * 0.55 ) {
          best = t;
          colour = glassLit( vec3( 0.10, 0.22, 0.07 ) * ( 0.55 + 0.7 * leafy ) * ( 0.75 + 0.5 * glassHash( ball.xz ) ), normalize( at ) );
        }
      }
    }
  }
  // Far things fade into the haze of the sky.
  return best > 1.0e8 ? sky : mix( colour, sky, smoothstep( 80.0, 700.0, best ) );
}

#ifdef USE_ENVMAP
// The light a pane reflects towards the eye. (Two sheets of glass reflect about twice what the
// bare surface of one does.)
vec3 glassRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
  #ifdef GLASS_INDOORS
    return glassIndoors * 2.2;
  #else
    #ifdef GLASS_WINDOW
      if ( ! gl_FrontFacing ) return glassIndoors * 2.2;
    #endif
    vec3 sky = getIBLRadiance( viewDir, normal, roughness );
    vec3 n = inverseTransformDirection( normal, viewMatrix );
    vec3 rd = reflect( normalize( vGlassWorld - cameraPosition ), n );
    return glassTrace( vGlassWorld + n * 0.06, rd, sky ) * 2.2;
  #endif
}
#endif

// What is seen through a window whose room has not been built: the ray is followed into a
// plain room behind the pane, as wide as a room and as high as a storey.
vec3 glassRoom( vec3 p, vec3 v, vec3 n ) {
  vec3 t = normalize( cross( vec3( 0.0, 1.0, 0.0 ), n ) );
  const float wide = 3.3;
  const float high = 2.85;
  const float deep = 3.4;
  float u = dot( p, t );
  vec2 cell = vec2( floor( u / wide ), floor( ( p.y - 0.45 ) / high ) );
  vec3 at = vec3( u - cell.x * wide, p.y - 0.45 - cell.y * high, 0.0 );
  vec3 d = vec3( dot( v, t ), v.y, max( dot( v, - n ), 0.001 ) );
  float back = deep / d.z;
  float side = abs( d.x ) > 1.0e-4 ? ( d.x > 0.0 ? wide - at.x : - at.x ) / d.x : 1.0e9;
  float level = abs( d.y ) > 1.0e-4 ? ( d.y > 0.0 ? high - at.y : - at.y ) / d.y : 1.0e9;
  float reach = min( back, min( side, level ) );
  vec3 hit = at + d * reach;
  float seed = glassHash( cell + floor( dot( n.xz, vec2( 7.0, 13.0 ) ) ) );
  vec3 wall = mix( vec3( 0.78, 0.74, 0.66 ), vec3( 0.70, 0.76, 0.80 ), seed );
  vec3 colour = wall;
  if ( reach == level ) colour = d.y > 0.0 ? vec3( 0.86 ) : vec3( 0.42, 0.31, 0.22 );
  else if ( reach == side ) colour = wall * 0.82;
  // Daylight falls off towards the back of the room.
  colour *= 0.16 + 0.5 * ( 1.0 - hit.z / deep );
  // In some rooms a curtain is drawn, across half the window or all of it.
  float curtain = glassHash( cell + 3.7 );
  if ( curtain > 0.55 && ( curtain > 0.8 || fract( at.x / wide + curtain ) < 0.45 ) ) {
    colour = mix( vec3( 0.80, 0.78, 0.72 ), vec3( 0.62, 0.68, 0.74 ), seed ) * ( 0.45 + 0.1 * sin( at.x * 38.0 ) );
  }
  return colour * 0.55;
}
`

// How much of the light from in front a pane mirrors, by the angle it is seen at.
const MIRROR = /* glsl */`
float glassCos = saturate( dot( normalize( normal ), normalize( vViewPosition ) ) );
float glassMirror = 0.08 + 0.92 * pow( 1.0 - glassCos, 5.0 );
`

// What each kind of pane puts on the screen. The reflection is added on top of what shows
// through the pane: it does not fade with the pane's own tint, the way ordinary see-through
// surfaces fade.
const OUTPUT = {
  // A window of a building whose rooms are built: dim seen from the street, clear from inside.
  near: /* glsl */`
    float glassSide = gl_FrontFacing ? 1.0 : 0.0;
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * mix( 0.5, 1.0, glassSide ) + totalEmissiveRadiance,
      clamp( mix( 0.03, 0.3, glassSide ) + glassMirror * mix( 0.5, 1.0, glassSide ), 0.0, 1.0 ) );`,
  // A window of a building seen from afar: a room of its own behind it.
  far: /* glsl */`
    vec3 glassSeen = glassRoom( vGlassWorld, normalize( vGlassWorld - cameraPosition ), inverseTransformDirection( normalize( normal ), viewMatrix ) );
    gl_FragColor = vec4( glassSeen * ( 1.0 - glassMirror ) + totalSpecular, 1.0 );`,
  // Glass between two rooms: clear, with a faint mirror of the room.
  inner: /* glsl */`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular * 0.5 + totalEmissiveRadiance, clamp( 0.04 + glassMirror * 0.5, 0.0, 1.0 ) );`,
  // Glass in the open air, such as the panels of a balcony rail: the town on both its faces.
  rail: /* glsl */`
    gl_FragColor = vec4( totalDiffuse * 0.12 + totalSpecular + totalEmissiveRadiance, clamp( 0.1 + glassMirror, 0.0, 1.0 ) );`,
}

function make(kind) {
  const far = kind === 'far'
  const material = new THREE.MeshStandardMaterial({
    color: far ? '#0b0e10' : '#141b1f', roughness: 0.04, metalness: 0, side: THREE.DoubleSide,
    transparent: !far, depthWrite: far, premultipliedAlpha: !far,
    // Both faces in one pass: drawn in two, each pass would take the face it draws for the front.
    forceSinglePass: true,
  })
  if (kind === 'inner') material.defines.GLASS_INDOORS = ''
  if (kind === 'near' || kind === 'far') material.defines.GLASS_WINDOW = ''
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms)
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vGlassWorld;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvGlassWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;')
    const maps = THREE.ShaderChunk.lights_fragment_maps.replace(
      'radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );',
      'radiance += glassRadiance( geometryViewDir, geometryNormal, material.roughness );',
    )
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <lights_physical_pars_fragment>', `#include <lights_physical_pars_fragment>\n${PARS}`)
      .replace('#include <lights_fragment_maps>', maps)
      .replace('#include <opaque_fragment>', `${MIRROR}\n${OUTPUT[kind]}`)
      .replace('#include <premultiplied_alpha_fragment>', '')
  }
  material.customProgramCacheKey = () => `machi-glass-${kind}`
  return material
}

const made = new Map()

// The glass of windows and doors. `kind` is:
//  'near'  a window between a room and the open air, where the room has been built;
//  'far'   the same window seen from too far to have its room built;
//  'inner' glass between two rooms;
//  'rail'  glass that stands in the open air.
// The face of a 'near' or 'far' pane that looks outdoors is its front.
export function windowGlass(kind = 'near') {
  if (!made.has(kind)) made.set(kind, make(kind))
  return made.get(kind)
}

let lastEye = null
let lastBoxes = null
let lastTrees = null

// Tells the glass what stands around: called every frame, though the model of the town is
// only made again when the viewer has moved or the town has changed.
// boxes: [{ min, max, tint }] (THREE.Vector3 and THREE.Color). trees: [{ x, y, z, r }].
// ground: { map, x0, z0, width, depth }. sun: direction to the sun. eye: where the viewer is.
export function updateGlass({ boxes = [], trees = [], sun, ground, eye }) {
  if (sun) uniforms.glassSun.value.copy(sun).normalize()
  if (ground?.map) {
    uniforms.glassGround.value = ground.map
    uniforms.glassGroundBox.value.set(ground.x0, ground.z0, 1 / ground.width, 1 / ground.depth)
  }
  if (!eye) return
  if (lastEye && lastBoxes === boxes && lastTrees === trees && lastEye.distanceToSquared(eye) < 4) return
  lastEye = (lastEye ?? new THREE.Vector3()).copy(eye)
  lastBoxes = boxes
  lastTrees = trees
  // The buildings and trees nearest to the viewer are the ones that show in the windows.
  const nearest = (list, spot, count) => list.map((entry) => [spot(entry).distanceToSquared(eye), entry])
    .sort((a, b) => a[0] - b[0]).slice(0, count).map(([, entry]) => entry)
  const centre = new THREE.Vector3()
  const chosen = nearest(boxes, (box) => centre.copy(box.min).add(box.max).multiplyScalar(0.5), BOXES)
  chosen.forEach((box, index) => {
    cells.set([box.min.x, box.min.y, box.min.z, 0], index * 4)
    cells.set([box.max.x, box.max.y, box.max.z, 0], (WIDTH + index) * 4)
    cells.set([box.tint.r, box.tint.g, box.tint.b, 1], (WIDTH * 2 + index) * 4)
  })
  const leafy = nearest(trees, (tree) => centre.set(tree.x, tree.y, tree.z), TREES)
  leafy.forEach((tree, index) => cells.set([tree.x, tree.y, tree.z, tree.r], (WIDTH * 3 + index) * 4))
  uniforms.glassCount.value.set(chosen.length, leafy.length)
  sceneMap.needsUpdate = true
}
