const t = require('tap')
const { isSuperset, isProperSuperset, stringify } = require('../dist/set-operations.js')

const properSupersets = [
  [ [1, 2, 3], [1] ],
  [ [1, 2, 3], [] ]
]

const symmetrical = [
  [ [1], [1] ],
  [ [1, 2, 3], [1, 2, 3] ]
]

t.test('is superset', t => {
  properSupersets.concat(symmetrical).forEach(([a, b]) => {
    t.equal(isSuperset(new Set(a), new Set(b)), true)
  })
  t.end()
})

t.test('is proper superset', t => {
  properSupersets.forEach(([a, b]) => {
    t.equal(isSuperset(new Set(a), new Set(b), true), true)
    t.equal(isProperSuperset(new Set(a), new Set(b), true), true)
  })
  t.end()
})

t.test('not supersets', t => {
  const notSupersets = properSupersets.map(x => x.reverse())
  notSupersets.forEach(([a, b]) => {
    const setA = new Set(a)
    const setB = new Set(b)
    t.equal(isSuperset(setA, setB), false, `${stringify(setA)} ${stringify(setB)}`)
  })
  t.end()
})

t.test('not proper supersets', t => {
  symmetrical.forEach(([a, b]) => {
    const setA = new Set(a)
    const setB = new Set(b)
    t.equal(isProperSuperset(setA, setB), false)
    t.equal(isSuperset(setA, setB, true), false)
  })
  t.end()
})
