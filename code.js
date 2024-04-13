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
    // I dont use factorial(i) here as this is slower then doing it inline like we do here.
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

function oldFactorial(n) {
  if (n === 0) return 1;
  else return n * oldFactorial(n - 1);
}

function oldE(n) {
  if (n === 0) return 1;
  else return 1.0 / oldFactorial(n) + oldE(n - 1);
}

module.exports = { e, factorial, oldE, oldFactorial };
