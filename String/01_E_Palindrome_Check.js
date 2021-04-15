console.clear()
// Palindrome check problem

// first solution ======================================================================
// O(n^2) time | O(n) space
// const isPalindrome = (string) => {
//   let newStr = ''
//   for (let i = string.length - 1; i >= 0; i--) {
//     newStr += string[i]
//   }

//   return newStr === string
// }

// second solution =======================================================================
// O(n) time | O(n) space
// const isPalindrome = (string) => {
//   let reversedCahrs = []

//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedCahrs.push(string[i])
//   }

//   return string === reversedCahrs.join('')
// }

// third solution - the most optimal ======================================================
// O(n) time | O(1) space
// const isPalindrome = (string) => {
//   let leftIdx = 0
//   let rightIdx = string.length - 1

//   while (leftIdx < rightIdx) {
//     if (string[leftIdx] !== string[rightIdx]) {
//       return false
//     }

//     leftIdx++
//     rightIdx--
//   }

//   return true
// }

// fourth solution - Recursion ================================================================
// O(n) time | O(n) space
const isPalindrome = (string, i = 0) => {
  let j = string.length - 1 - i

  if (i >= j) {
    return true
  } else {
    return string[i] === string[j] && isPalindrome(string, i + 1)
  }
}

console.log(isPalindrome('abcdcba'))
console.log(isPalindrome('a'))
console.log(isPalindrome('ab'))
console.log(isPalindrome('aba'))
console.log(isPalindrome('abb'))
console.log(isPalindrome('abba'))
console.log(isPalindrome('abcdefghhgfedcba'))
console.log(isPalindrome('abcdefghihgfedcba'))
console.log(isPalindrome('abcdefghihgfeddcba'))
