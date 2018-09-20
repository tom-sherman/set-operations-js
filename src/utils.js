export function flatten () {}

/**
 * Stringifies a set into the format:
 * Set(size) { val1, val2, ... }
 * @param {Set} set
 */
export function stringify (set) {
  // TODO: Separate package
  return `Set(${set.size}) {${[...set].map(stringifyElement).join(', ')}}`
}

function stringifyElement (element) {
  if (typeof element === 'number') {
    return element
  } else if (element === null) {
    return 'null'
  } else if (typeof element === 'undefined') {
    return 'undefined'
  } else if (typeof element === 'string') {
    return `"${element}"`
  } else if (Array.isArray(element)) {
    return `Array(${element.length})`
  } else if (typeof element === 'function') {
    return 'Fn'
  } else {
    return '{…}'
  }
}
