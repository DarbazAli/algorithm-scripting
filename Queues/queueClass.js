class Queue {
    constructor() {
        this.collection = []
    }

    // print current queue
    print() {
        console.log(this.collection)
    }

    // add items to the end(tail) of the queue
    enqueue(item) {
        this.collection.push(item)
    }

    // remove the first item (front) from the queue and return it
    dequeue() {
        return this.collection.shift()
    }

    // print current from item
    front() {
        return this.collection[0]
    }

    // print the size of the queue
    size() {
        return this.collection.length
    }

    // tell if its empty or not
    isEmpty() {
        return this.collection.length === 0
    }
}

const myQueue = new Queue()
myQueue.enqueue("A")
myQueue.enqueue("B")
myQueue.enqueue("C")
myQueue.print()

// console.log(myQueue.dequeue())
console.log(myQueue.front())
console.log(myQueue.size())
console.log(myQueue.isEmpty())

myQueue.print()
