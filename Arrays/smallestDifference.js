'use strict'

const smallestDifference = (arrayOne, arrayTwo) => {
  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    throw new Error('Invalid input')
  }

  //   sort both arrays, each one has a time complexity of O(nlog(n))
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  //   pointer for arrayOne and Two
  let idxOne = 0
  let idxTwo = 0

  //   smallest possible number
  let smallest = Infinity

  // current difference between x and y
  let currentDiff = Infinity

  //   possible pairs
  let smallestPairs = []

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    // extract elements
    const first = arrayOne[idxOne]
    const second = arrayTwo[idxTwo]

    //   check if first < second, move first pointer to right
    // because, all numbers in the second array are gonna be grater than current difference
    if (first < second) {
      currentDiff = second - first
      idxOne++
    } else if (first > second) {
      currentDiff = first - second
      idxTwo++
    } else {
      return [first, second]
    }

    // update smallest accordingly
    if (smallest > currentDiff) {
      smallest = currentDiff
      smallestPairs = [first, second]
    }
  }

  return smallestPairs
}

const arr1 = [-1, 5, 10, 20, 28, 3]
const arr2 = [26, 134, 135, 15, 17]

console.log(smallestDifference(arr1, arr2)) // [28, 26]
