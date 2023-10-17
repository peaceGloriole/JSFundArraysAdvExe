// function arrayManipulator(arr, arr2) {

//   for (let i = 0; i < arr2.length; i++) {
//     let container = arr2[i].split(` `);
//     let [command, index, el] = container;

//     el = Number(el);
//     for (let i = 0; i < container.length; i++) {

//       if (container.indexOf(i) == index) {
//         if (command == `add`) {
//           arr.unshift(el);
//         }
//       }

//     }
//   }
//   console.log(arr);
  
// }
// arrayManipulator([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print']);

// 0 -1 [ 1, 8, 2, 4, 5, 6, 7 ]