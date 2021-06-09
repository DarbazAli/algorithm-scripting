'use strict'

const swap = (i, j, array) => ([array[i], array[j]] = [array[j], array[i]])

// Insertion Sort Algorithm
// O(n^2) time | O(1) space
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array)
      j -= 1
    }
  }

  return array
}
