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
export function intersection (...sets) {
  return sets.reduce(intersect, sets[0])
}
