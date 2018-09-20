/**
 *
 * @param {Set} a
 * @param {Set} b
 */
export function difference (a, b) {
  const difference = new Set(a)
  for (const elem of b) {
    difference.delete(elem)
  }
  return difference
}
