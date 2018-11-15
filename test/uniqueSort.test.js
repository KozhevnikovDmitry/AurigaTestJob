import uniqueSort from '../uniqueSort';

test('uniqueSort sorts by ascending', () => {
    expect(uniqueSort([5, 4, 3, 2, 1], 5)).toEqual([1, 2, 3, 4, 5]);
    expect(uniqueSort([5, 4, 3, 2, 1], 5)).not.toEqual([5, 4, 3, 2, 1]);
});

test('uniqueSort excludes duplication', () => {
    expect(uniqueSort([3, 2, 3, 2, 1], 3)).toEqual([1, 2, 3]);
});

test('uniqueSort throws when countMax is bigger than count of unique element', () => {
    expect(() => uniqueSort([5, 4, 3, 2, 1], 6)).toThrow('Incorrect value for argument countMax');
});

test('uniqueSort returns only first countMax greatest numbers in array', () => {
    expect(uniqueSort([5, 4, 3, 2, 1], 3)).toEqual([3, 4, 5]);
});