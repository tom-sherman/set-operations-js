const t = require('tap')
const { isMutuallyExclusive } = require('../dist/set-operations.js')

t.test('is mutually exclusive', t => {
  // A list of lists of set values which are mutually exclusive
  const exclusive = [
    [ [ 1, 2 ], [ 3, 4 ] ],
    [ [ 1 ], [ 2 ] ],
    [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
    [ [], [] ],
    [ [ 1, 2, 3 ], [] ],
    [ [], [ null ] ]
  ]
  for (const sets of exclusive) {
    t.equal(isMutuallyExclusive(...sets.map(set => new Set(set))), true)
  }
  t.end()
})

t.test('is not mutually exclusive', t => {
  const notExclusive = [
    [ [1], [1] ]
  ]
  for (const sets of notExclusive) {
    t.equal(isMutuallyExclusive(...sets.map(set => new Set(set))), false)
  }
  t.end()
})
