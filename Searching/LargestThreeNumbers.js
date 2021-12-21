// find largeset three numbers in an array
// O(nlogn) time | O(1) space
const largestThreeNumbers = (array) => {
    array.sort((a, b) => a - b)
    return [
        array[array.length - 3],
        array[array.length - 2],
        array[array.length - 1],
    ]
}

console.log(largestThreeNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])) // [18, 141, 541]
