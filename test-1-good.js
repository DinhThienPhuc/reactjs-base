function solution(N) {
  // If N is less than 10, it's already the smallest number whose digits sum to N
  if (N < 10) return N;

  // Start building the result from an empty string
  let result = "";

  // While N is greater than 9, we keep adding '9' to the result and decrease N by 9
  while (N > 9) {
    result = "9" + result;
    N -= 9;
  }

  // Add the remainder of N (if any) at the beginning of the result
  // This is the smallest digit that can be added to make the sum of digits equal to original N
  if (N > 0) {
    result = N + "" + result;
  }

  console.log("result", result);

  // Convert the result string back to a number
  return +result;
}

// Test cases for the solution function
console.log(solution(16)); // Expected output: 79
console.log(solution(19)); // Expected output: 199
console.log(solution(7)); // Expected output: 7
console.log(solution(10)); // Expected output: 19
console.log(solution(21)); // Expected output: 399
console.log(solution(0)); // Expected output: 0
console.log(solution(1)); // Expected output: 1
console.log(solution(25)); // Expected output: 799
console.log(solution(30)); // Expected output: 3999
console.log(solution(35)); // Expected output: 7999
console.log(solution(40)); // Expected output: 13999
console.log(solution(45)); // Expected output: 17999
console.log(solution(50)); // Expected output: 18999
console.log(solution(55)); // Expected output: 189999
console.log(solution(60)); // Expected output: 1399999
console.log(solution(65)); // Expected output: 1799999
console.log(solution(70)); // Expected output: 1899999
console.log(solution(75)); // Expected output: 18999999
console.log(solution(80)); // Expected output: 139999999
console.log(solution(85)); // Expected output: 179999999
