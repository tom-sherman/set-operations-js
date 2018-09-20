const t = require('tap')
const { intersect, intersection, isEqual } = require('../dist/set-operations.js')

t.test('intersect (2 sets)', t => {
  t.ok(isEqual(
    // The intersection of
    intersect(new Set([ 1, 2, 3 ]), new Set([ 3, 4, 5 ])),
    // Should equal
    new Set([ 3 ])
  ))
  t.ok(isEqual(
    // The intersection of
    intersect(new Set([ 1, 2, 3 ]), new Set([ 5, 6, 7 ])),
    // Should equal
    new Set()
  ))
  t.end()
})

t.test('intersection (2 or more sets)', t => {
  t.ok(isEqual(
    // The intersection of
    intersection(new Set([ 1, 2, 3 ]), new Set([ 3, 4, 5 ])),
    // Should equal
    new Set([ 3 ])
  ))
  t.ok(isEqual(
    // The intersection of
    intersection(new Set([ 1, 2, 3 ]), new Set([ 5, 6, 7 ])),
    // Should equal
    new Set()
  ))

  t.ok(isEqual(
    // The intersection of
    intersection(new Set([ 1, 2, 3 ]), new Set([ 3, 4, 5 ]), new Set([ 4, 5, 6 ])),
    // Should equal
    new Set([ 3, 4, 5 ])
  ))
  t.end()
})
