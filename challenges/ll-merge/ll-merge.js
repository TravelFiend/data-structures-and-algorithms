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
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }

    insertBefore(val, newVal) {
        let current = this.head;
        const node = new Node(newVal);
        while(current) {
            if(current.next.value === val) {
                node.next = current.next;
                current.next = node;
            }
            current = current.next;
        }
    }

    insertAfter(val, newVal) {
        let current = this.head;
        const node = new Node(newVal);
        while(current) {
            if(current.value === val) {
                node.next = current.next;
                current.next = node;
            }
            current = current.next;
        }
    }

    kthFromEnd(k) {
        let current = this.head;
        let totalNodes = 0;
        while(current) {
            totalNodes++;
            current = current.next;
        }
        const place = totalNodes - k;
        let num = 1;
        current = this.head;
        while(current) {
            if(num !== place) {
                num++;
                current = current.next;
            } else {
                return current.value;
            }
        }
    }
}

const mergeLists = (linkedList1, linkedList2) => {
    let ll1current = linkedList1.head;
    let ll2current = linkedList2.head;
    let ll2next = linkedList2.head.next;
    while(ll1current && ll2current){
        ll2current.next = ll1current.next;
        ll1current.next = ll2current;
        ll1current = ll2current.next;
        ll2current = ll2next;
    }
};

module.exports = { LinkedList, mergeLists };
