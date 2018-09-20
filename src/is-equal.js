import { isSuperset } from './is-superset'

/**
 * Checks equality between two sets.
 * @param  {Set} a
 * @param  {Set} b
 */
export function isEqual (a, b) {
  return a.size === b.size && isSuperset(a, b)
}
