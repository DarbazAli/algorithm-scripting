'use strict'

// O(n^2) time | O(n) space
const arrayOfProducts = (array = []) => {
  let result = []

  for (let i = 0; i < array.length; i++) {
    let product = 1

    for (let j = 0; j < array.length; j++) {
      if (j !== i) product *= array[j]
    }

    result.push(product)
  }

  return result
}

// console.log(arrayOfProducts([5, 1, 4, 2]))

// approach 2
const arrayOfProducts2 = (array = []) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let product = 1

    if (i === 0) {
      // expand to right, calculate the product of each element
      let rightIdx = i + 1
      while (rightIdx <= array.length - 1) {
        product *= array[rightIdx]
        rightIdx++
      }
    } else if (i === array.length - 1) {
      // expand to left
      let leftIdx = i - 1
      while (leftIdx >= 0) {
        product *= array[leftIdx]
        leftIdx--
      }
    } else {
      // expand to left and right
      let rightProduct = 1
      let leftProduct = 1

      let rightIdx = i + 1
      let leftIdx = i - 1

      while (rightIdx <= array.length - 1) {
        rightProduct *= array[rightIdx]
        rightIdx++
      }

      while (leftIdx >= 0) {
        leftProduct *= array[leftIdx]
        leftIdx--
      }

      product *= rightProduct
      product *= leftProduct
    }

    result.push(product)
  }

  return result
}

// console.log(arrayOfProducts2([5, 1, 4, 2]))
