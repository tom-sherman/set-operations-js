const t = require('tap')
const { difference, isEqual } = require('../index.js')

t.test('difference', t => {
  const differences = [
    [ [1,2], [2,3], [1] ],
    [ [null,1], [null,1,56], [] ],
    [ [1,2,3], [4,5,6], [1,2,3] ]
  ]
  differences.forEach(([a, b, diff]) => {
    const diffed = difference(new Set(a), new Set(b))
    t.equal(isEqual(diffed, new Set(diff)), true)
  })
  t.end()
})
