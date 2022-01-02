// A simple Linked List with JavaScript
const { log, clear } = console
clear() // clear output after each run

// Node class
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

// instantiate
const Kitten = new Node("Kitten")
const Puppy = new Node("Puppy")
const Cat = new Node("Cat")
const Dog = new Node("Dog")

// Kitten -> Puppy
Kitten.next = Puppy

// Puppy -> Cat
Puppy.next = Cat

// Cat -> Dog
Cat.next = Dog

log(Kitten)
