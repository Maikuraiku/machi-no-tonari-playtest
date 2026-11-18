// The complete terrain stays a small mesh even though detailed streets stream at walking scale.
export const REGION_OVERVIEW_STEP = 100

export function regionOverview(size, aspect = 1, fov = 55) {
  const vertical = fov * Math.PI / 360
  const horizontal = Math.atan(Math.tan(vertical) * Math.max(0.1, aspect))
  // Enclose the square at any camera yaw, with room for the tallest generated ground.
  const distance = size / Math.SQRT2 / Math.tan(Math.min(vertical, horizontal)) * 1.08 + 400
  return { x: size / 2, z: size / 2, distance, pitch: Math.PI / 2 - 0.001 }
}
