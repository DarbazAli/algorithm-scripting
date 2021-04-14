// Sorted Squared Array
// sample input => [1, 2, 4, 3]
// sample output => [1, 4, 9, 16]

// First Solution - Functional Approach
// O(nlogn) Time | O(n) Space
const sortedSquaredArray = (array) =>
  array.map((item) => item * item).sort((a, b) => a - b)

// Second Solutoin - Procedural Approach
// O(nlogn) Time | O(n) Space

const sortedSquaredArray2 = (array) => {
  const sortedSquared = new Array(array.length).fill(0)

  for (let index in array) {
    const value = array[index]
    sortedSquared[index] = value * value
  }

  sortedSquared.sort((a, b) => a - b)
  return sortedSquared
}

// Third Solution - In-place squaring
// O(n) Time | O(n) Space - where n is the lenght of the input array

const sortedSquaredArray3 = (array) => {
  // [-4, 2, 0, 1, 3]
  // [0, 0, 0, 0, 0]
  // [0, 1, 2, 3, 4]

  //  create a new array with the size of input array
  const sortedSquares = new Array(array.length).fill(0)

  let smallerValueIdx = 0
  let largerValueIdx = array.length - 1

  // travers the array in revers order
  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx]
    const largerValue = array[largerValueIdx]

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue
      smallerValueIdx++
    } else {
      sortedSquares[idx] = largerValue * largerValue
      largerValueIdx--
    }
  }

  return sortedSquares
}

const arr = [-4, 2, 0, 1, 3]
console.log(sortedSquaredArray3(arr))
