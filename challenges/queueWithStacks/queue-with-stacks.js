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
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }

    enqueue(value) {
        this.stackOne.push(value);
    }

    dequeue() {
        if(!this.stackOne.top) return 'empty queue!';
        while(this.stackOne.top) {
            this.stackTwo.push(this.stackOne.pop().value);
        }
        const temp = this.stackTwo.peek();
        this.stackTwo.pop();
        while(this.stackTwo.top) {
            this.stackOne.push(this.stackTwo.pop().value);
        }
        return temp;
    }
}

module.exports = PseudoQueue;