// Window glass. Close to a building it is clear, so that the rooms behind it show; from far
// away it mirrors the sky and hides that the rooms have not been built yet.
import * as THREE from 'three'

let clear = null
let mirror = null

export function windowGlass(near) {
  if (near) {
    clear ??= new THREE.MeshStandardMaterial({
      color: '#b9cbd2', roughness: 0.03, metalness: 0.9, transparent: true, opacity: 0.2, depthWrite: false,
      envMapIntensity: 1.6, side: THREE.DoubleSide,
    })
    return clear
  }
  mirror ??= new THREE.MeshStandardMaterial({ color: '#2a3a44', roughness: 0.05, metalness: 1, envMapIntensity: 1.35, side: THREE.DoubleSide })
  return mirror
}

// Called once a frame with what the glass needs to know about the world around it.
export function updateGlass() {}
