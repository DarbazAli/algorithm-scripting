// O(log(n)) time | O(1) space
const binarySearch = (array, target) => {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    // diffine mid point
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle]

    if (potentialMatch === target) return middle
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
