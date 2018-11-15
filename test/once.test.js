import once from '../once';

test('once memoizes first result of function with single argument', () => {
    // Arrange
    const inc = a => a + 1;
    const onceInc = once(inc);

    // Assert
    expect(onceInc(1)).toBe(2);
    expect(onceInc(10)).toBe(2);
    expect(onceInc(100)).toBe(2);
});

test('once memoizes first result of function with multiple argument', () => {
    // Arrange
    const sum = (a, b, c) => a + b + c;
    const onceSum = once(sum);

    // Assert
    expect(onceSum(2, 2, 2)).toBe(6);
    expect(onceSum(10, 10, 10)).toBe(6);
    expect(onceSum(100, 100, 100)).toBe(6);
});

test('once memoizes even undefined result', () => {
    // Arrange
    const inc = a => a === undefined? undefined : a + 1;
    const onceInc = once(inc);

    // Assert
    expect(onceInc(undefined)).toBe(undefined);
    expect(onceInc(1)).toBe(undefined);
    expect(onceInc(10)).toBe(undefined);
    expect(onceInc(100)).toBe(undefined);
});

test('once memoizes results of method', () => {
    // Arrange
    class Some {
        inc(a) { 
            return a + 1;
        }
    }
    const someObj = new Some();
    const onceInc = once(someObj.inc);

    // Assert
    expect(onceInc(1)).toBe(2);
    expect(onceInc(10)).toBe(2);
    expect(onceInc(100)).toBe(2);
});

test('once memoizes throwed error', () => {   
    // Arrange 
    const throwError = msg => { throw new Error(msg); }
    const onceThrowError = once(throwError);

    // Assert
    expect(() => onceThrowError('Hello')).toThrow('Hello');
    expect(() => onceThrowError('How are you?')).toThrow('Hello');
    expect(() => onceThrowError('Good bye')).toThrow('Hello');
});
