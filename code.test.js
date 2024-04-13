const assert = require("assert");
const { e, factorial, oldE, oldFactorial } = require("./code");

assert(factorial(0) === 1);
assert(factorial(1) === 1);
assert(factorial(5) === 120);
assert(factorial(10) === 3628800);
assert(factorial(20) === 2432902008176640000);

assert(Math.abs(e(0) - 1) < 1e-10);
assert(Math.abs(e(1) - 2) < 1e-10);

// Test Speed & Correctness for both functions
for (let i = 1000; i < 10_000; i += 500) {
  // Test Speed & Correctness for e()
  let startTimeOld = Date.now();
  let v = oldE(i);
  let endTimeOld = Date.now();

  let startTimeNew = Date.now();
  let v2 = e(i);
  let endTimeNew = Date.now();

  let executionTimeNew = endTimeNew - startTimeNew;
  let executionTimeOld = endTimeOld - startTimeOld;

  console.info(`\nExecution time for e(${i}): ${executionTimeNew}ms`);
  console.info(`Execution time for oldE(${i}): ${executionTimeOld}ms`);

  assert(v === v2);
  assert(executionTimeOld > executionTimeNew);

  // Test Speed & Correctness for factorial()
  startTimeOld = Date.now();
  v = oldE(i);
  endTimeOld = Date.now();

  startTimeNew = Date.now();
  v2 = e(i);
  endTimeNew = Date.now();

  executionTimeNew = endTimeNew - startTimeNew;
  executionTimeOld = endTimeOld - startTimeOld;

  console.info(`\nExecution time for factorial(${i}): ${executionTimeNew}ms`);
  console.info(`Execution time for oldFactorial(${i}): ${executionTimeOld}ms`);

  assert(v === v2);
  assert(executionTimeOld > executionTimeNew);
}

console.log("All tests passed!");
