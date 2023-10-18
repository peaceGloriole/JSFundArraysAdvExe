function manOWar(arr) {
  let pirate = arr.shift().split(`>`).map(Number);
  let warship = arr.shift().split(`>`).map(Number);
  let maxHp = Number(arr.shift());

  let critical = maxHp * 0.2;

  for (let els of arr) {
    let commands = els.split(` `);
    let tokens = commands.shift();
    
    if (tokens == `Retire`) {
      break;
    } else if (tokens == `Fire`) {
      let index = Number(commands[0]);
      let damage = Number(commands[1]);
      
      if (index < 0 || index >= warship.length) {
        continue;
      } 
      
      warship[index] -= damage;
      
      if (warship[index] < 0) {
        console.log(`"You won! The enemy ship has sunken.`);
        return;
    }
   } else if (tokens == `Defend`) {
      let start = Number(commands[0]);
      let end = Number(commands[1]);
      let damage = Number(commands[2]);

      if (start < 0 || start >= pirate.length || end < 0 || end >= pirate.length) {
        continue;
      } 

        for (let i = start; i <= end; i++) {
          pirate[i] -= damage;

          if (pirate[i] < 0) {
            console.log(`You lost! The pirate ship has sunken.`);
            return;
          }
        } 
    } else if (tokens == `Repair`) {
        let index = Number(commands[0]);
        let health = Number(commands[1]);

        if (index < 0 || index >= pirate.length) {
          continue;
        }

        pirate[index] += health;
        if (pirate[index] > maxHp) {
          pirate[index] = maxHp;
        }
    } else if (tokens == `Status`) {
        let damaged = pirate.filter(section => section < critical);
          console.log(`${damaged.length} sections need repair.`);
    } 
  }

  let pirateStatus = pirate.reduce((acc, value) => acc + value);
  let warshipStatus = warship.reduce((acc, value) => acc + value);

  console.log(`Pirate ship status: ${pirateStatus}`);
  console.log(`Warship status: ${warshipStatus}`);
}
manOWar(([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18", 
  "70", 
  "Fire 2 11", 
  "Fire 8 100", 
  "Defend 3 6 11", 
  "Defend 0 3 5", 
  "Repair 1 33", 
  "Status", 
  "Retire"]));