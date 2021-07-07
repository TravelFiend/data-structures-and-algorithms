class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(val) {
        const node = new Node(val, this.head);
        this.head = node;
    }

    includes(val) {
        let current = this.head;
        while(current) {
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
        while(current) {
            str += `${current.value}, `;
            current = current.next;
        }
        return str;
    }
}

module.exports = LinkedList;
