function solution(A, F, M) {
  const totalRolls = A.length + F;
  const totalSumNeeded = M * totalRolls;
  const currentSum = A.reduce((acc, val) => acc + val, 0);
  const sumNeededForF = totalSumNeeded - currentSum;

  // If the sum needed for F rolls is less than F or greater than 6*F, it's impossible
  if (sumNeededForF < F || sumNeededForF > 6 * F) {
    return [0];
  }

  // Calculate the average for the missing rolls, rounding down
  let averageMissing = Math.floor(sumNeededForF / F);
  let remainder = sumNeededForF % F;

  // Initialize the result array with the calculated average
  const result = new Array(F).fill(averageMissing);

  // Distribute the remainder across the result array to get as close to the target mean as possible
  for (let i = 0; i < F && remainder > 0; i++, remainder--) {
    // Ensure we do not exceed the dice roll limit of 6
    if (result[i] < 6) {
      result[i]++;
    } else {
      // If we hit a case where we can't distribute the remainder without exceeding 6, return [0]
      return [0];
    }
  }

  return result;
}

// Examples
console.log(solution([3, 2, 4, 3], 2, 4)); // Expected output: [6, 6]
console.log(solution([1, 5, 6], 4, 3)); // Expected output: Various possibilities like [2, 1, 2, 4] or [6, 1, 1, 1]
console.log(solution([1, 2, 3, 4], 4, 6)); // Expected output: [0]
console.log(solution([6, 1], 1, 1)); // Expected output: [0]
console.log(solution([4, 4, 4], 3, 5)); // Expected output: [6, 6, 6]
console.log(solution([2, 3], 2, 3)); // Expected output: Various possibilities like [3, 3]
console.log(solution([5, 5, 5, 5], 5, 5)); // Expected output: [5, 5, 5, 5, 5]
console.log(solution([1, 1, 1, 1], 4, 2)); // Expected output: [3, 3, 3, 3]
console.log(solution([6, 6, 6], 2, 5)); // Expected output: [1, 1]
console.log(solution([3, 4, 5], 3, 4)); // Expected output: Various possibilities like [4, 4, 4]
