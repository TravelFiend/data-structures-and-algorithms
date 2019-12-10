class Node {
    constructor(value, next = null) {
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

    append(val) {
        let current = this.head;
        const node = new Node(val);
        while(current){
            if(current.next)
            current = current.next;
        }

    }

    insertBefore(val, newVal){

    }

    insertAfter(val, newVal){

    }
}

module.exports = LinkedList;
