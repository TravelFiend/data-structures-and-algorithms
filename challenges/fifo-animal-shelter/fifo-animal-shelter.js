class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class AnimalShelter {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(animal) {
        const node = new Node(animal);
        if(!this.front) {
            this.front = node;
            this.back = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
    }

    dequeue(pref) {
        if(pref.toLowercase() !== 'cat' && pref.toLowercase() !== 'dog') {
            const popped = this.front.value;
            this.front = this.front.next;
            return popped;
        } else {
            let previousNode;
            let current = this.front;
            let nextNode = current.next;
            if(current.value === pref) {
                if(current === this.front) {
                    const found = current.value;
                    this.front = current.next;
                    return found;
                } else if(current === this.back) {
                    const found = current.value;
                    this.back = previousNode;
                    return found;
                }
                if(previousNode) {
                    previousNode.next = nextNode;
                }
                return current.value;
            }
            previousNode = current;
            current = current.next;
            nextNode = current.next.next;
        }
    }
}

module.exports = AnimalShelter;
