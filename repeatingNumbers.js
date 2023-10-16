function repeating(input) {
  let array = [];

  for (let num of input) {
    // if the new array doesnt include the num - push it
    if (!array.includes(num)) {
      array.push(num);
    }
  }
  console.log(array.join(` `));
}
repeating([7, 8, 9, 7, 2, 3,

  4, 1, 2]);