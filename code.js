/**
 * @param {number} n
 * @returns {number}
 */
function e(n) {
  if (n <= 0) {
    return 1;
  }

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
  if (n <= 0) {
    return 1;
  }

  let fact = 1;

  for (let i = 1; i < n; i++) {
    fact *= i;
  }

  return fact;
}
