'use strict'

// O(n^2) time | O(1) space
const firstDuplicateValue = (array = []) => {
  let minSecondIndex = array.length

  for (let i = 0; i < array.length; i++) {
    const value = array[i]

    for (let j = i + 1; j < array.length; j++) {
      const valueToCompare = array[j]

      if (value === valueToCompare) {
        minSecondIndex = Math.min(minSecondIndex, j)
      }
    }
  }

  if (minSecondIndex === array.length) return -1

  return array[minSecondIndex]
}

// console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]))

// O(n) time | O(n) space
const firstDuplicateValue2 = (array = []) => {
  const seen = new Set()

  for (const value of array) {
    if (seen.has(value)) return value
    seen.add(value)
  }

  return -1
}

// console.log(firstDuplicateValue2([2, 1, 5, 2, 3, 3, 4]))

// O(n) time | O(1) space => optimal solution
const firstDuplicateValue3 = (array = []) => {
  for (const value of array) {
    const absValue = Math.abs(value)

    // check if current value has a negative sign
    if (array[absValue] - 1 < 0) return absValue

    // make current index negative sign
    array[absValue] *= -1
  }

  return -1
}

// console.log(firstDuplicateValue3([2, 1, 5, 2, 3, 3, 4]))
