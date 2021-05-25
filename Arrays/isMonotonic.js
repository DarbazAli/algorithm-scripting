'use strict'

/* 
    Is Monotonic array

    a monotonic is from left to right ether entierly non-increasing or entierly non-decreasing


*/

const isMonotonic = (array) => {
  let isNonDecreasing = true
  let isNonIncreasing = true

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonIncreasing = false
    if (array[i] > array[i - 1]) isNonDecreasing = false
  }

  return isNonIncreasing || isNonDecreasing
}

const arr = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

console.log(isMonotonic(arr)) // should return true
