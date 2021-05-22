'use strict'

/* 

  Three Number Sum Algorithm

  given an array of integers, find all possible triplets that sum up to a given target sum
  
  e.g

  array: [12, 3, 1, 2, -6, 5, -8, 6],
  targetSum: 0

  threeNumberSum(array, targetSum) 

  output

  [
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5]
  ]

*/

const threeNumberSum = (array = [], targetSum) => {
  if (targetSum === undefined)
    throw new Error('Please provide a valid targetSum integer')

  // sort the array in Ascending order
  array.sort((a, b) => a - b)

  // triplets container
  const triplets = []

  // travers the array untill befor last 2 elements,
  // because we cant compare a number to itself
  for (let i = 0; i < array.length - 2; i++) {
    // define left and right pointers
    let left = i + 1
    let right = array.length - 1

    while (left < right) {
      const currentSum = array[i] + array[left] + array[right]

      // if currentSum === targetSum, we found a valid triplet
      // push current triplet to triplets
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]])
        // move both pointers
        left++
        right--
      }

      // if currentSum is less that targetSum, we need a bigger number
      else if (currentSum < targetSum) left++
      // if currentSum is grater than targetSum, we need a smaller number
      else if (currentSum > targetSum) right--
    }
  }

  return triplets
}

const array = [12, 3, 1, 2, -6, 5, -8, 6]
const targetSum = 0

console.log(threeNumberSum(array, targetSum)) // [ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]
