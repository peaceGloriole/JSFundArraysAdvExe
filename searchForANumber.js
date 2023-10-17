function search(arr, info) {
  let [elsToTake, elsToDel, searchNum] = info;

  // Take the specified number of elements from the beginning of the array.
  let takenElements = arr.slice(0, elsToTake);

  // Remove the specified number of elements from the taken elements.
  takenElements.splice(0, elsToDel);

  let count = 0;

  for (let i = 0; i < takenElements.length; i++) {
    if (takenElements[i] == searchNum) {
      count++;
    }
  }

  console.log(`Number ${searchNum} occurs ${count} times.`);
}

// search([5, 2, 3, 4, 1, 6], [5, 2, 3]);
search([7, 1, 5, 8, 2, 7],[3, 1, 5]);