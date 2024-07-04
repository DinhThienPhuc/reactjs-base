function solution(moves) {
  let count = 0;
  const isMoved = {};

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "^" || moves[i] === "v") {
      count += 1;
      isMoved[i] = true;
    } else if (
      (moves[i] === "<" && i === 0) ||
      (moves[i] === "<" && i > 0 && isMoved[i - 1])
    ) {
      count += 1;
      isMoved[i] = true;
    } else if (
      (moves[i] === ">" && i < moves.length - 1 && isMoved[i + 1]) ||
      (moves[i] === ">" && i === moves.length - 1)
    ) {
      count += 1;
      isMoved[i] = true;
    } else {
      isMoved[i] = false;
    }
  }

  return count;
}

// Test cases
console.log(solution("<<^<v>>")); // Expected Output: 6
console.log(solution("><^v")); // Expected Output: 2
console.log(solution("><><")); // Expected Output: 0
console.log(solution("^^^^")); // Expected Output: 4
console.log(solution("vvvv")); // Expected Output: 4
console.log(solution("<<>>")); // Expected Output: 3
console.log(solution("^v^v")); // Expected Output: 4
