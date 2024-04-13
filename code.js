// IMPL:
// 1. Factorial can be cached when saved. This will avoid alot of extra computation.
// 2. E can also cache it's result.

/**
 * @param {number} n
 * @returns {number}
 */
function e() {
  const eCache = new Map();
  const factorialCache = new Map();

  eCache.set(0, 1); // set base e case.
  factorialCache.set(0, 1); // base factorial case

  /**
   * @param {number} n
   * @returns {number}
   */
  function eHelper(n) {
    if (eCache.has(n)) {
      return eCache.get(n);
    }

    const result = 1.0 / factorialHelper(n) + eHelper(n - 1);
    eCache.set(n, result);

    return result;
  }

  /**
   * @param {number} n
   * @returns {number}
   */
  function factorialHelper(n) {
    if (factorialCache.has(n)) {
      return factorialCache.get(n);
    }

    const result = n * factorialHelper(n - 1);
    factorialCache.set(n, result);

    return result;
  }

  return eHelper(n);
}
