/**
 *
 * @param {Set} a
 * @param {Set} b
 * @param {boolean} [proper=false]
 */
export function isSuperset (a, b, proper = false) {
  if (a.size < b.size) {
    return false
  }
  if (proper && a.size === b.size) {
    return false
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
  return isSuperset(a, b, true)
}
