class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
    }

    includes(val) {
        let current = this.head;
        while(current !== null) {
            if(current.value === val) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    toString() {
        let str = '';
        let current = this.head;
        while(current !== null) {
            str += `${current.value} `;
            current = current.next;
        }
        return str;
    }
}

module.exports = LinkedList;
