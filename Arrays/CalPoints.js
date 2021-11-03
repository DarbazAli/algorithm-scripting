const { log, clear } = console
clear()

const calPoints = (ops) => {
    let res = []

    for (let i = 0; i < ops.length; i++) {
        const op = ops[i]

        // if number, add to record
        if (!isNaN(op)) {
            res.push(parseInt(op))
        }

        // if C => remove (i-1)
        else if (op == "C") {
            res.splice(-1)
        }

        // if D => double (i-1)
        else if (op == "D") {
            res.push(res[res.length - 1] * 2)
        }

        // if + => sum (i, i-1)
        else if (op == "+") {
            res.push(res[res.length - 1] + res[res.length - 2])
        }
    }

    return res.reduce((curr, prev) => curr + prev)
}

log(calPoints(["5", "2", "C", "D", "+"])) // should return 30
log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])) // should return 27
