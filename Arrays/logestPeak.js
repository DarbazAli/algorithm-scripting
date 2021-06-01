'use strict'

// O(n) time | O(1) space
const longestPeak = (array) => {
  let longestPeakLength = 0

  let i = 1
  while (i < array.length - 1) {
    // check if we have a peak to deal with
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1]
    // if there is no peak, just continue
    if (!isPeak) {
      i += 1
      continue
    }
    // if there is a peack..
    else {
      // expand to left
      let leftIdx = i - 2
      while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) leftIdx -= 1

      // exapand to right
      let rightIdx = i + 2
      while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1])
        rightIdx += 1

      const currentPeakLength = rightIdx - leftIdx - 1

      longestPeakLength = Math.max(longestPeakLength, currentPeakLength)

      i = rightIdx
    }
  }

  return longestPeakLength
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))
