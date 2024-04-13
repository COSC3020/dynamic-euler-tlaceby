/**
 * @param {number} n
 * @returns {number}
 */
function e(n) {
  let eNum = 1;
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
    eNum += 1 / factorial;
  }

  return eNum;
}

/**
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}
