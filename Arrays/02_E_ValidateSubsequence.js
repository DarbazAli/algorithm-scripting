/* 
The Validate Subsequence Algorithm
The prompt or problem statement: Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren’t necessarily adjacent in the array but that are in the same order as they appear in the array. For example these numbers [2, 3, 5]
are a subsequence of the array: [1, 2, 3, 4, 5]

Note that a single number in an array and the array itself are both valid subsequences of the array.
A sample input (what goes into the argument): array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 2, -1, 10]

*/

// O(n) Time | O(1) Space
const validateSubsequence = (array, sequence) => {
  // we need to increas this pointer by 1, each time we found a match.
  let seqIdx = 0

  for (let value of array) {
    if (seqIdx === sequence.length) {
      return true
    }

    // compare value with current index of the subsequence
    // if there is a match, move to the next index
    if (sequence[seqIdx] === value) {
      seqIdx++
    }
  }

  //   return true if we looped through entire sequence array
  //   because, if it's not, then we didn't find any match.
  return seqIdx === sequence.length
}

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

console.log(validateSubsequence(array, sequence))
