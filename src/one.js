/**
 *
 * @param {Set} a
 * @param {Set} b
 */
export function isSuperset (a, b) {
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
export function isSubset (a, b) {
  return isSuperset(b, a)
}

/**
 *
 * @param  {...Set} sets
 */
export function isMutuallyExclusive (...sets) {
  const sumSizes = sets.reduce((acc, set) => acc += set.size, 0)
  const unionSize = union(...sets).size
  return sumSizes === unionSize
}

/**
 *
 * @param {Set} set
 */
export function isEmpty (set) {
  return set.size === 0
}

/**
 *
 * @param  {...Set} sets
 */
export function union (...sets) {
  // TODO: Test performance vs nested for;of loop
  const args = flatten(sets.map(set => [...set]))
  return new Set(args)
}

/**
 *
 * @param {Set} a
 * @param {Set} b
 */
export function intersect (a, b) {
  const intersection = new Set()
  for (const elem of b) {
    if (a.has(elem)) {
      intersection.add(elem)
    }
  }
  return intersection
}

/**
 *
 * @param {Set} a
 * @param {Set} b
 * @param  {...Set} sets
 */
export function intersection (a, b, ...sets) {
  let intersection = intersect(a, b)
  for (const set of sets) {
    intersection = intersect(intersection, set)
  }
  return intersection
}

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

/**
 * Flattens an array with depth of 1.
 * @param {Array} arr
 */
function flatten (arr) {
  return arr.reduce((acc, val) => acc.concat(val), [])
}
