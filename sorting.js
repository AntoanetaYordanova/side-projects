function sorting(inputArr) {
  let numArr = inputArr.sort((a, b) => a - b);
  let resultArr = [];

  for (let i = 0; i < numArr.length; i++) {
    while (numArr.length > 0) {
      resultArr.push(numArr.pop());
      resultArr.push(numArr.shift());
    }
  }

  console.log(resultArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
