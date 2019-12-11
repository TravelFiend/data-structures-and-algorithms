const LinkedList = require('../linked-list');

describe('Linked List', () => {
    describe('insert', () => {
        it('should insert a node at the start of the linked list', () => {
            const list = new LinkedList();
            expect(list).toEqual({ 'head': null });
        });
    });
});
