class Stack {
    constructor() {
        this.collection = []
    }

    print() {
        console.log(this.collection)
    }

    // add new item
    push(item) {
        this.collection.push(item)
    }

    // remove item
    pop() {
        return this.collection.pop()
    }

    // tet top element
    peek() {
        return this.collection[this.collection.length - 1]
    }

    // check if its empty
    isEmpty() {
        return this.collection.length === 0
    }

    // clear the stack
    clear() {
        this.collection = []
    }
}

const stack = new Stack()

stack.push("A")
stack.push("B")

// stack.clear()
console.log(stack.pop())
