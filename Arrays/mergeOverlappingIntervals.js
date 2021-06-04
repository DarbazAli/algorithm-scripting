'use strict'

const mergeOverlappingIntervals = (array = []) => {
  // edge cases
  if (!Array.isArray(array)) {
    throw new Error('The input must be an array')
  }

  if (array.length < 2) {
    throw new Error('The input array must has at least 2 intevals')
  }

  // sort the array
  const sortedIntervals = array.sort((a, b) => a[0] - b[0])

  const mergedIntervals = []

  let currentInterval = sortedIntervals[0]
  mergedIntervals.push(currentInterval)

  for (const nextInterval of sortedIntervals) {
    const [_, currentIntervalEnd] = currentInterval
    const [nextIntervalStart, nextIntervalEnd] = nextInterval
    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
    } else {
      currentInterval = nextInterval
      mergedIntervals.push(currentInterval)
    }
  }

  return mergedIntervals
}

console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ])
)
