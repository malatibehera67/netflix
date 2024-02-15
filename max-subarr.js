let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArr(arr) {
  let sum = 0;
  let startIndex = 0;
  let endIndex = 0;
  let prevSum = 0;
  let currentStartIndex = 0;
  let currentEndIndex = 0;
  let currentSum = 0;
  for (let index = 0; index < arr.length; index++) {
    if (currentSum + arr[index] > 0) {
      currentSum = currentSum + arr[index];
      currentEndIndex = index;
    } else {
      if (currentSum > prevSum) {
        startIndex = currentStartIndex;
        prevSum = currentSum;
        endIndex = currentEndIndex;
      }
    }
  }
}
