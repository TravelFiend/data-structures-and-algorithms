class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        const node = new Node(value, this.top);
        this.top = node;
    }

    pop() {
        if(!this.top) return null;

        const top = this.top;
        this.top = top.next;
        return top;
    }

    peek() {
        if(!this.top) return null;
        return this.top.value;
    }
}

class PseudoQueue {
    constructor(){
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }
}

module.exports = PseudoQueue;
