// O(log(n)) time | O(1) space
const binarySearch = (array, target) => {
  // define left and right pointers
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    // the middle point of the array
    // example: if lenght of the array was 9,
    // let = 0, right = 9 -1
    // middle point of this array is 0 + 8 / 2
    // middle = 8 / 2 => 4
    // the middle index is 4

    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle]

    if (target === potentialMatch) return middle
    else if (target < potentialMatch) right = middle - 1
    else left = middle + 1
  }

  // not found
  return -1
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)) // should return 3
console.log(binarySearch([1, 5, 23, 111], 111)) // should return 3
console.log(binarySearch([1, 5, 23, 111], 20)) // should return -1
console.log(binarySearch([1, 5, 23, 24, 111], 23)) // should return 2
