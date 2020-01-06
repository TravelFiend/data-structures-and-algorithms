class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(val) {
        let current = this.head;
        this.head = new Node(val);
        this.head.next = current;
    }

    pop() {
        const toReturn = this.head.value;
        this.head = this.head.next;
        return toReturn;
    }

    peek() {
        if(this.head) {
            return this.head.value;
        }
    }
}

class PseudoQueue {
    constructor(){
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }
}

module.exports = PseudoQueue;
