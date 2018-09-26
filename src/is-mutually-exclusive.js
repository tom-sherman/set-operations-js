import { union } from './union'

/**
 * Tests whether two or more sets are mutually exclusive.
 * @param  {...Set} sets Two or more Sets
 */
export function isMutuallyExclusive (...sets) {
  // TODO: Test performance against intersection ie. A n B = {}
  const sumSizes = sets.reduce((acc, set) => acc + set.size, 0)
  const unionSize = union(...sets).size
  return sumSizes === unionSize
}
