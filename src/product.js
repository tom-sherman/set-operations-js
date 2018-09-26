/**
 *
 * @param {Set} a
 * @param {Set} b
 */
export function product (a, b) {
  const product = new Set()
  for (const elemA of a) {
    for (const elemB of b) {
      product.add([elemA, elemB])
    }
  }
  return product
}
