'use strict'

const swap = (i, j, array) => ([array[i], array[j]] = [array[j], array[i]])

// first solution
// O(n) time | O(1) space
const threeNumberSort = (array = [], order = []) => {
  const len = array.length

  const firstValue = order[0]
  const thirdValue = order[2]

  //   first, move elements that are equal to firstValue to the begining of the array
  let firstIdx = 0
  for (let i = 0; i < len; i++) {
    if (array[i] === firstValue) {
      swap(i, firstIdx, array)
      firstIdx += 1
    }
  }

  //   second, move elements that are equal to thirdValue to the end of the array
  let lastIdx = len - 1
  for (let i = len - 1; i >= firstIdx; i -= 1) {
    if (array[i] == thirdValue) {
      swap(i, lastIdx, array)
      lastIdx -= 1
    }
  }

  return array
}

/* ==========================
    SECOND SOLUTION
    O(n) time | O(1) space
=========================== */
const threeNumberSort2 = (array, order) => {
  const len = array.length

  const firstValue = order[0]
  const secondValue = order[1]

  let firstIdx = 0
  let secondIdx = 0
  let thirdIdx = len - 1

  while (secondIdx < thirdIdx) {
    const value = array[secondIdx]

    if (value === firstValue) {
      swap(secondIdx, firstIdx, array)
      secondIdx += 1
      firstIdx += 1
    } else if (value === secondValue) {
      secondIdx += 1
    } else {
      swap(secondIdx, thirdIdx, array)
      thirdIdx -= 1
    }
  }

  return array
}
