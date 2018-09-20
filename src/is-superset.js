/**
 *
 * @param {Set} a
 * @param {Set} b
 * @param {boolean} [proper=false]
 */
export function isSuperset (a, b, proper=false) {
  if (proper) {
    return isProperSuperset(a, b)
  }
  for (const elem of b) {
    if (!a.has(elem)) {
      return false
    }
  }
  return true
}

/**
 *
 * @param {Set} a
 * @param {Set} b
 */
export function isProperSuperset (a, b) {
  return a.size !== b.size && isSuperset(a, b)
}
