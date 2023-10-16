function sort(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let array = [];

  while (sortedArr.length > 0) {
    let maxEl = sortedArr.pop();
    let minEl = sortedArr.shift();

    if (minEl !== `undefined`) {
      array.push(maxEl, minEl);
    }
  }

  console.log(array.join(` `));
}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);