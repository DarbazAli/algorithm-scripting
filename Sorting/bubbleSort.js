'use strict'

// helper function, swaps values of 2 elements of an array
const swap = (i, j, array) => ([array[i], array[j]] = [array[j], array[i]])

/* 
    Bubble Sort algorithm

    Time Complexity =>
    Best O(n) time | O(1) space
    Avg O(n^2) time | O(1) space
    Worst O(n^2) time | O(1) space
*/

const bubbleSort = (array) => {
  // assume that the array is not sorted
  let isSorted = false

  while (!isSorted) {
    isSorted = true

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        //   the loop must be continue if swapping is occured
        swap(i, i + 1, array)
        isSorted = false
      }
    }
  }

  return array
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))
