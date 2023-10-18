function arrayManipulator(arr, commands) {
  for (let els of commands) {
    let tokens = els.split(` `);
    let command = tokens.shift();
    
    if (command == `add`) {
      let index = Number(tokens[0]);
      let num = Number(tokens[1]);

      arr.splice(index, 0, num)
    } else if (command == `addMany`) {
      let index = Number(tokens[0]);
      let numToAdd = tokens.slice(2,);

      for (let num of numToAdd) {
        arr.splice(index, 0, num);
        index++;
      }
    } else if (command == `contains`) {
      let num = Number(tokens[0]);
      let index = arr.indexOf(num);

      console.log(index);
    } else if (command == `remove`) {
      let index = Number(tokens[0]);
      arr.splice(index, 1);

    } else if (command == `shift`) {
      let index = Number(tokens[0]);

      for (let i = 0; i <= index; i++) {
        let els = arr.shift();
        arr.push(els);
      }
      
    } else if (command == `sumPairs`) {
      let pairedArr = [];

      for (let i = 0; i < arr.length; i+= 2) {

        if (i + 1 < arr.length) {
          pairedArr.push(arr[i] + arr[i + 1]);
        } else {
          pairedArr.push(arr[i]);
        }
      }

      arr = pairedArr;
    } else if (command == `print`) {
      console.log(`[ ${arr.join(`, `)} ]`);;
      } 
    }
  }
arrayManipulator([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print']);

// 0 -1 [ 1, 8, 2, 4, 5, 6, 7 ]