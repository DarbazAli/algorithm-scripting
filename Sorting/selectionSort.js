'use strict'

const swap = (i, j, array) => ([array[i], array[j]] = [array[j], array[i]])

// Selection Sort Algorithm
// O(n^2) time | O(1) space
const selectionSort = (array = []) => {
  const len = array.length

  let startIdx = 0

  while (startIdx < len - 1) {
    let smallestIdx = startIdx

    for (let i = startIdx + 1; i < len; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i
    }

    swap(startIdx, smallestIdx, array)
    startIdx++
  }

  return array
}
