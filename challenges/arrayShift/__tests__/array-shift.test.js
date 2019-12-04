const insertShiftArray = require('../array-shift');

describe('arrayShift', () => {
    it('should place a value in the middle of array without losing anything from original array', () => {
        expect(insertShiftArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 6, 4, 5]);
        expect(insertShiftArray([1, 2, 3, 4, 5, 6], 7)).toEqual([1, 2, 3, 7, 4, 5, 6]);
        expect(insertShiftArray(['i', 'like', 'cheese'], 'gouda')).toEqual(['i', 'like', 'gouda', 'cheese']);
    });
});
