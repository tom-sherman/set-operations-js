import { isSuperset } from './is-superset'

/**
 *
 * @param {Set} a
 * @param {Set} b
 */
export function isSubset (a, b, proper=false) {
  return isSuperset(b, a, proper)
}

export function isProperSubset (a, b) {
  return isSuperset(b, a, false)
}
