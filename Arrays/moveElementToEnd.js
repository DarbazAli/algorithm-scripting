'use strict'

// O(n) Time | O(1) Space
const moveElementToEnd = (array, toMove) => {
  let i = 0
  let j = array.length - 1

  while (i < j) {
    while (i < j && array[j] === toMove) j--

    if (array[i] === toMove) swap(i, j, array)
    i++
  }

  return array
}

const swap = (i, j, arr) => ([arr[i], arr[j]] = [arr[j], arr[i]])

const arr = [2, 1, 2, 2, 2, 3, 4, 2]

console.log(moveElementToEnd(arr, 2)) // [ 4, 1, 3, 2, 2, 2, 2, 2 ]
