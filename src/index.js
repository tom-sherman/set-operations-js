import { isSuperset, isProperSuperset } from './is-superset'
import { isEqual } from './is-equal'
import { isMutuallyExclusive } from './is-mutually-exclusive'

import { difference } from './difference'
import { union } from './union'
import { intersect, intersection } from './intersection'
import { product } from './product'

import { stringify } from './utils'

export default {
  isSuperset,
  isProperSuperset,
  isEqual,
  isMutuallyExclusive,
  difference,
  union,
  intersect,
  intersection,
  product,
  stringify
}
