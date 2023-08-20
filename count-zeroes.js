function countZeroes(arr) {
    // this will return the zeros pulled from the array or return 0 if there are no zeros.
    let first = firstZero(arr);
    if (first === -1) return 0;
    return arr.length - first;
}
    function firstZero (arr, low = 0, high = arr.length -1) {
        if (high >= low) {
            let mid = low + high / 2;
            // this checks if the the mid ind is 0 or if the ind to the left of mid is 1 and if mid is 0
            if (mid === 0 || arr[mid - 1] === 1 && arr[mid] === 0) {
                return mid;
            // if the mid is 1 that means the zeros are higher so we return the portion of the array above mid 
            } else if (arr[mid] === 1) {
                return firstZero(arr, mid +1, high);
            } 
            // obviously this does the opposite of the last else if 
            return firstZero(arr,low, mid -1);
        }
        // if there is no zeros it'll return -1
        return -1
    }

module.exports = countZeroes