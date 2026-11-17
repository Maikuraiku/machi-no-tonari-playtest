// Fair-weather clouds: heaps of cumulus drifting slowly over the town. They are painted on a
// dome round the viewer by a shader that looks up, along each line of sight, how thick the
// cloud is where that line meets a level sheet high above the ground; the side of a cloud
// that faces the sun is bright, its base and its far side grey.
import * as THREE from 'three'

export function createClouds(sunDirection) {
  const uniforms = {
    cloudTime: { value: 0 },
    cloudSun: { value: sunDirection.clone().normalize() },
    // How much of the sky the clouds take up, from 0 (none) to 1 (overcast).
    cloudCover: { value: 0.42 },
  }
  const material = new THREE.ShaderMaterial({
    uniforms, side: THREE.BackSide, transparent: true, depthWrite: false, fog: false,
    vertexShader: /* glsl */`
      varying vec3 vCloudRay;
      void main() {
        vec4 world = modelMatrix * vec4( position, 1.0 );
        vCloudRay = world.xyz - cameraPosition;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,
    fragmentShader: /* glsl */`
      uniform float cloudTime;
      uniform vec3 cloudSun;
      uniform float cloudCover;
      varying vec3 vCloudRay;

      float cloudHash( vec2 p ) {
        vec3 q = fract( vec3( p.xyx ) * 0.1031 );
        q += dot( q, q.yzx + 33.33 );
        return fract( ( q.x + q.y ) * q.z );
      }
      float cloudNoise( vec2 p ) {
        vec2 i = floor( p );
        vec2 f = fract( p );
        vec2 u = f * f * ( 3.0 - 2.0 * f );
        return mix( mix( cloudHash( i ), cloudHash( i + vec2( 1.0, 0.0 ) ), u.x ),
          mix( cloudHash( i + vec2( 0.0, 1.0 ) ), cloudHash( i + vec2( 1.0, 1.0 ) ), u.x ), u.y );
      }
      // How thick the cloud is over a spot: big heaps, with smaller and smaller billows on them.
      float cloudThick( vec2 p ) {
        float sum = 0.0;
        float weight = 0.5;
        for ( int octave = 0; octave < 5; octave ++ ) {
          sum += cloudNoise( p ) * weight;
          p = p * 2.07 + vec2( 13.7, 7.3 );
          weight *= 0.5;
        }
        return sum / 0.97;
      }

      void main() {
        vec3 ray = normalize( vCloudRay );
        if ( ray.y < 0.012 ) discard;
        // Where the line of sight meets the sheet of cloud. (The sheet bends down a little
        // towards the horizon, as the sky seems to, so that far clouds do not crowd together.)
        vec2 spot = ray.xz / ( ray.y + 0.11 ) * 1.25 + vec2( cloudTime * 0.004, cloudTime * 0.0016 );
        float thick = cloudThick( spot );
        float edge = 1.0 - cloudCover;
        float cloud = smoothstep( edge - 0.04, edge + 0.16, thick );
        if ( cloud < 0.003 ) discard;
        // The side towards the sun is thinner along the way the light comes: bright there.
        float towards = cloudThick( spot + normalize( cloudSun.xz + vec2( 1.0e-4 ) ) * 0.11 );
        float lit = smoothstep( - 0.16, 0.14, thick - towards );
        float body = smoothstep( edge, edge + 0.4, thick );
        vec3 shade = vec3( 0.80, 0.86, 0.98 ) * 1.1;
        vec3 bright = vec3( 3.1, 3.0, 2.86 );
        vec3 colour = mix( shade, bright, lit * ( 1.0 - 0.45 * body ) + 0.18 );
        // Clouds near the horizon fade into the haze.
        float haze = smoothstep( 0.012, 0.2, ray.y );
        colour = mix( vec3( 1.9, 1.95, 2.0 ), colour, 0.35 + 0.65 * haze );
        gl_FragColor = vec4( colour, cloud * haze * 0.94 );
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  })
  const dome = new THREE.Mesh(new THREE.SphereGeometry(3400, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), material)
  dome.frustumCulled = false
  // Before any glass: clouds are the farthest thing there is, bar the sky itself.
  dome.renderOrder = -2
  return {
    mesh: dome,
    // Follows the viewer, and lets the wind move the clouds on.
    update(delta, focus) {
      uniforms.cloudTime.value += delta
      dome.position.set(focus.x, 0, focus.z)
    },
    dispose() {
      dome.geometry.dispose()
      material.dispose()
    },
  }
}
