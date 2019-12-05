const binarySearch = require('../array-binary-search');

describe('Array binary search', () => {
    it('should return the index of the value matching the given search key', () => {
        expect(binarySearch([1, 2, 3, 4], 2)).toEqual(1);
        expect(binarySearch([1, 2, 3, 4], 4)).toEqual(3);
        expect(binarySearch([1, 2, 3, 4], 5)).toEqual(-1);
    });
});
