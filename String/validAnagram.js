/* 
    Valid Anagram Strings

    @author: Darbaz Ali
    @date: Jan 12, 2022

    @description:
    Two strings are anagrams if they are made of tha same characters
    with the same frequencies

    @example:
    input:
    s1 = danger
    s2 = garden

    output: true
*/

const validAnagram = (s1, s2) => {
    // return false if the two strings are not the same length
    if (s1.length !== s2.length) {
        return false
    }

    // character hash tables
    const freq1 = {}
    const freq2 = {}

    for (const char of s1) {
        if (freq1[char]) {
            freq1[char] += 1
        } else {
            freq1[char] = 1
        }
    }

    for (let char of s2) {
        if (freq2[char]) {
            freq2[char] += 1
        } else {
            freq2[char] = 1
        }
    }

    for (let key in freq1) {
        if (!freq2[key] || freq1[key] !== freq2[key]) {
            return false
        }
    }

    return true
}

log(validAnagram("danger", "garden")) // true
log(validAnagram("danger", "ranger")) // false
