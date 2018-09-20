const t = require('tap')
const { union, isEqual } = require('../index.js')

t.test('union', t => {
  t.equal(isEqual(
    // The union of...
    union(new Set([ 1, 2, 3 ]), new Set([ 2, 3, 4 ])),
    // Should equal...
    new Set([ 1, 2, 3, 4 ])
  ), true)

  t.equal(isEqual(
    // The union of...
    union(new Set([ 1, 2, 3 ]), new Set([ 2, 3, 4 ]), new Set([ 3, 4, 5 ])),
    // Should equal...
    new Set([ 1, 2, 3, 4, 5 ])
  ), true)

  t.equal(isEqual(
    // The union of...
    union(new Set(), new Set()),
    // Should equal...
    new Set()
  ), true)

  t.equal(isEqual(
    // The union of...
    union(new Set([ 1, 2 ]), new Set()),
    // Should equal...
    new Set([ 1, 2 ])
  ), true)

  t.end()
})
