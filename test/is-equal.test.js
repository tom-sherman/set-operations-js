const t = require('tap')
const { isEqual } = require('../index.js')

t.test('is equal', t => {
  const equalSets = [
    [ [1], [1] ],
    [ [1, 2, null], [null, 2, 1] ],
    [ [undefined], [undefined] ]
  ]
  equalSets.forEach(([a, b]) => {
    t.equal(isEqual(new Set(a), new Set(b)), true)
  })
  t.end()
})

t.test('is not equal', t => {
  const notEqualSets = [
    [ [1], [2] ],
    [ [1, 2], [1, 3] ],
    [ [null], [undefined] ],
    [ [1, null], [0, null] ]
  ]
  notEqualSets.forEach(([a, b]) => {
    t.equal(isEqual(new Set(a), new Set(b)), false)
  })
  t.end()
})
