const { log, clear } = console

clear()

const checkSubstring = (str, substring) => {
    // counter to mesure occurence
    let counter = 0
    let idx = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === substring[idx]) {
            idx++
            counter++
        }

        if (counter === substring.length) return true
    }

    return false
}

log(checkSubstring("I'm a bit nervous now", "s now"))
