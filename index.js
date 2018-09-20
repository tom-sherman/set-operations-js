(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.setOps = factory());
}(this, (function () { 'use strict';

  /**
   *
   * @param {Set} a
   * @param {Set} b
   * @param {boolean} [proper=false]
   */
  function isSuperset (a, b, proper = false) {
    if (a.size < b.size) {
      return false
    }
    if (proper && a.size === b.size) {
      return false
    }
    for (const elem of b) {
      if (!a.has(elem)) {
        return false
      }
    }
    return true
  }

  /**
   *
   * @param {Set} a
   * @param {Set} b
   */
  function isProperSuperset (a, b) {
    return isSuperset(a, b, true)
  }

  /**
   * Checks equality between two sets.
   * @param  {Set} a
   * @param  {Set} b
   */
  function isEqual (a, b) {
    return a.size === b.size && isSuperset(a, b)
  }

  /**
   *
   * @param {Set} a
   * @param {Set} b
   * @param {boolean} symmetric
   */
  function difference (a, b, symmetric = false) {
    // if (symmetric) {
    //   return symmetricDifference(a, b)
    // }
    const difference = new Set(a);
    for (const elem of b) {
      difference.delete(elem);
    }
    return difference
  }

  // /**
  //  *
  //  * @param  {...Set} sets
  //  */
  // export function symmetricDifference (...sets) {
  //   const diffs = []
  // }

  /**
   * Flattens an array with depth of 1.
   * @param {Array} arr
   */
  function flatten (arr) {
    return arr.reduce((acc, val) => acc.concat(val), [])
  }

  /**
   * Stringifies a set into the format:
   * Set(size) { val1, val2, ... }
   * @param {Set} set
   */
  function stringify (set) {
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

  /**
   *
   * @param  {...Set} sets
   */
  function union (...sets) {
    // TODO: Test performance vs nested for;of loop
    return new Set(flatten(sets.map(set => [...set])))
  }

  var index = {
    isSuperset,
    isProperSuperset,
    isEqual,
    difference,
    union,
    stringify
  };

  return index;

})));
