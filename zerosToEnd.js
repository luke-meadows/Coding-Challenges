// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

function moveZeros(arr) {
  const zeroCount = [];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    } else {
      zeroCount.push(0);
    }
  }
  newArr.push(...zeroCount);
  return newArr;
}

const answer = moveZeros([
  9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0,
]);
// returns[false,1,1,2,1,3,"a",0,0]
console.log(answer);

// BEST SOLUTION:

// var moveZeros = function (arr) {
//     return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
//   }
