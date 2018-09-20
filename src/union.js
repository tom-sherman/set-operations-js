import { flatten } from './utils'

/**
 *
 * @param  {...Set} sets
 */
export function union (...sets) {
  // TODO: Test performance vs nested for;of loop
  return new Set(flatten(sets.map(set => [...set])))
}
