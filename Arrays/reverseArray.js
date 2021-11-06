// revers an array in javascript
// input -> [1, 2, 3, 4]
// output -> [4, 3, 2, 1]

const { log, clear, time, timeEnd, group, groupEnd } = console
clear()

// big array generator for testing fucntions
const generateArr = (n = 1) => {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(i)
    }

    return arr
}

const swap = (i, j, arr) => ([arr[i], arr[j]] = [arr[j], arr[i]])

/*============================================
FIRST APPROACH => O(?) time | O(?) space
============================================*/
const reversArray1 = (arr) => arr.reverse()

/*============================================
SECOND APPROACH => O(n) time | O(n) space
============================================*/
const reversArray2 = (arr) => {
    let result = []

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }

    return result
}

/*============================================
THIRD APPROACH => O(n / 2) time | O(1) space
============================================*/
const reversArray3 = (arr) => {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        swap(left, right, arr)
        left++
        right--
    }
    return arr
}

const bigArr = generateArr(1000000)

time("rev-1")
log(reversArray1(bigArr))
timeEnd("rev-1")

time("rev-2")
log(reversArray2(bigArr))
timeEnd("rev-2")

time("rev-3")
log(reversArray3(bigArr))
timeEnd("rev-3")
