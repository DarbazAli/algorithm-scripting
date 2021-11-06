const { log, clear } = console
clear()

// O(2n) time | O(n) space
const countElements = (arr) => {
    let result = 0

    let hashMap = {}
    for (let i = 0; i < arr.length; i++) {
        const x = arr[i]
        if (!hashMap[x]) hashMap[x] = true
    }

    for (let i = 0; i < arr.length; i++) {
        const x = arr[i]
        if (x + 1 in hashMap) {
            result++
        }
    }

    return result
}

log(countElements([1, 2, 3])) // return 2
log(countElements([1, 1, 3, , 3, 5, 5, 7, 7, 7])) // return 0
log(countElements([1, 3, 2, 3, 5, 0])) // return 3
log(countElements([1, 1, 2, 2])) // return 2
log(countElements([1, 1, 2])) // return 2

// [1, 2, 3, 4, 3] => [3, 5]
// O(n) time | O(1) space
const findErrorNums = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] <= arr[i]) {
            result.push(arr[i - 1], arr[i] + 1)
        }
    }

    return result
}

log(findErrorNums([1, 2, 3, 4, 3])) // [3, 5]
log(findErrorNums([1, 2, 3, 2])) // [2, 4]
