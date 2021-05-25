'use strict'

/* 
    Is Monotonic array
    a monotonic is from left to right ether entierly non-increasing or entierly non-decreasing
*/

// O(n) Time | O(1) Space
const isMonotonic = (array) => {
  let isNonDecreasing = true
  let isNonIncreasing = true

  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1]
    const current = array[i]

    if (current < prev) isNonDecreasing = false
    if (current > prev) isNonIncreasing = false
  }

  return isNonDecreasing || isNonIncreasing
}

const arr = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

console.log(isMonotonic(arr)) // should return true
console.log(isMonotonic([1, 1, 1, 2])) // should return true
console.log(isMonotonic([1, 1, 1, 2, 3, 2])) // should return false
