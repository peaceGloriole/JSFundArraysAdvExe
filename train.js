function train(arr) {
  // get and separate first index of the original arr
  let wagons = arr
    .shift()
    .split(` `)
    .map(Number);
  let capacity = Number(arr[0]);
// separate command from numbers
 for (let i = 1; i < arr.length; i++) {
  let [command, people] = arr[i].split(` `);

  people = Number(people);
// check if the command is Add
    if (command == `Add`) {
      wagons.push(people);
    } else {
      let people = Number(command);
// check if the capacity of the wagons is enough to push the people
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + people <= capacity) {
          wagons[i] += people;
          break;
        } 
      }
    }
  }

  console.log(wagons.join(` `));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);