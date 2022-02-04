// Given an numbersay of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(numbers, target) {
  const previousNumbers = {};
  let output;
  for (i = 0; i < numbers.length; i++) {
    currentNumber = numbers[i];
    neededNumber = target - currentNumber;

    if (previousNumbers[neededNumber] === undefined) {
      previousNumbers[currentNumber] = i;
    } else {
      output = [previousNumbers[neededNumber], i];
    }
  }
  return output;
}

const answer = twoSum([1, 2, 3, 4], 5);
console.log(answer);
