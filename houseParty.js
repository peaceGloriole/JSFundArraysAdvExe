function houseParty(arr) {
  let guests = [];
// separate names from the arr
  for (let command of arr) {
    let tokens = command.split(` `);
    let name = tokens[0];
//check if tokens include not
    if (tokens.includes(`not`)) {
      //if includes get the index of the guests and delete/splice/ it by the index going to 1 index
      if (guests.includes(name)) {
        let index = guests.indexOf(name);
        guests.splice(index, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      //if already in the list
        if (guests.includes(name)) {
          console.log(`${name} is already in the list!`);
        } else {
          guests.push(name);
        }
    }
  }
  console.log(guests.join(`\n`));
}

houseParty([
'Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);