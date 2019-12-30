const { LinkedList } = require('../linkedList/linked-list');

const mergeLists = (ll1, ll2) => {
    let ll3 = new LinkedList();
    let current1 = ll1.head;
    let current2 = ll2.head;

    ll3.head = current1;
    let current3 = ll3.head;

    while(current2){
        current3.next = current2;
        current3 = current2;
        current2 = current2.next;
        if(current1){
            current3.next = current1;
            current3 = current1;
            current1 = current1.next;
        }
    }
    
    while(current1){
        current3.next = current1;
        current3 = current1;
        current1 = current1.next;
    }
};

module.exports = { mergeLists };
