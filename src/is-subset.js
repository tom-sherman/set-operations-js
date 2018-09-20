import { isSuperset } from './is-superset'

/**
 *
 * @param {Set} a
 * @param {Set} b
 */
export function isSubset (a, b) {
  return isSuperset(b, a)
}
