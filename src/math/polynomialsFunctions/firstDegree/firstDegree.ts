/**
 * First Degree function
 * ```ts
 * y = ax + b
 * 20 = 3x + 5
 * 20 - 5 = 3x
 * 15 = 3x
 * x = 15/3
 * x = 5
 * ```
 * @param {number} y - The y
 * @param {number} a - The a
 * @param {number} b - The b
 * @returns {number} Return x
 */
function firstDegree(y: number, a: number, b: number): number {
  return (y - b) / a;
}

export default firstDegree;
