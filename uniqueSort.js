/**
 * Sorts array by ascending and excludes duplications
 * Returns first countMax greatest elements
 * @param {Array} arr - array, that must be sorted and cleaned from duplications
 * @param {Number} countMax - count of greatest elements that must be returned
 */
const uniqueSort = (arr, countMax) => {
    let count = 0;
    const result = arr.sort((a, b) => b - a).filter(function(elem, index, array) {        
        if(count === countMax) return false;
        const pass = index == array.length - 1 || array[index + 1] != elem;
        if(pass) count++;
        return pass;
    });

    if (count < countMax) {
        throw new Error('Incorrect value for argument countMax');
    }
    return result.reverse();
}

export default uniqueSort;