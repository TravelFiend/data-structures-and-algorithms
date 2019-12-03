const arrayReverse = require('../array-reverse');

describe('code challenges', () => {
    describe('array reverse', () => {
        it('should reverse any given array', () => {
            expect(arrayReverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
            expect(arrayReverse(['a', 's', 'd', 'f', 'g'])).toEqual(['g', 'f', 'd', 's', 'a']);
            expect(arrayReverse([])).toEqual([]);
            expect(arrayReverse([21, -43, 45, -34, 23])).toEqual([23, -34, 45, -43, 21]);
        });
    });
});
