function bombNumbers(arr, bombInfo) {
  let [bombNum, power] = bombInfo;

  while (arr.includes(bombNum)) {
    let index = arr.indexOf(bombNum);
    // Starting from the left side, removing all the unneccessary nums + original;
    arr.splice(Math.max(0, index - power), power * 2 + 1);
  }

  let sum = 0;
  
  for (let num of arr) {
    sum += num;
  }

  console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);