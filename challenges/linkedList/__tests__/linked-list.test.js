const LinkedList = require('../linked-list');

describe('Linked List', () => {
    describe('insert', () => {
        it('should insert a node at the start of the linked list', () => {
            const list = new LinkedList();
            expect(list).toEqual({ 'head': null });
        });
    });

    // describe('includes', () => {
    //     it('should return true if search value is found and false if not', () => {

    //     });
    // });

    // describe('toString', () => {
    //     it('should return a string with all node values', () => {

    //     });
    // });
});
