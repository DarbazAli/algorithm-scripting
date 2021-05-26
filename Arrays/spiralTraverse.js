'use strict'

const spiralTraverse = (array = [[]]) => {
  let result = []

  let startRow = 0
  let endRow = array.length - 1

  // columns
  let startCol = 0
  let endCol = array[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    // top border
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col])
    }

    // right border
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol])
    }

    // bottom border
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break
      result.push(array[endRow][col])
    }

    // left border
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break
      result.push(array[row][startCol])
    }

    startRow++
    endRow--
    startCol++
    endCol--
  }

  return result
}

const arr = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
]

console.log(spiralTraverse(arr)) // should return [1, 2, ..., 16]
