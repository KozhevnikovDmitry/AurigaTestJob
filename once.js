/**
 * Return function with memoization of first call results
 * @param {Function} functionToMemo - function for memoize
 */
const once = (functionToMemo) => {
    let memoType = 'none';
    let memo = undefined; 
    return (...args) => {
        if (memoType === 'result') {
            return memo;
        }      

        if (memoType === 'error') {            
            throw memo;            
        }         

        try {
            memo = functionToMemo(...args);
            memoType = 'result';
            return memo;            
        }   
        catch(err){
            memo = err;
            memoType = 'error';
            throw memo;
        }   
    }
}

export default once;