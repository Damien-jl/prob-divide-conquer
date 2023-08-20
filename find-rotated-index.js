function findRotatedIndex(arr,num) {
    let piv = pivot(arr);
    // this checks if the inputted number is more than 0 and that the number is within the array and also checks if the number is less than the pivot point
    if (piv > 0 && num >= arr[0] && num <= arr[piv -1]) {
        // this will binary seach the first half of the array
        return binaryS(arr,num, 0, piv -1);
    } else {
        // this will check for the number betwwen the pivot and the end of the array
        return binaryS(arr,num, piv, arr.length -1)
    }
    function binaryS(arr,num,start,end) {
        // we're checking if we have a valid array as well as if the inputted num is withing the array
        if (arr.length === 0) return -1;
        if (num < arr[0] || num > arr[arr.length -1]) return -1;

        while (start <= end) {
            let mid = Math.floor((arr[start] + arr[end]) / 2);

            if (num === arr[mid]) {
                return mid;
            } else if (num > arr[mid]) {
                start = mid + 1
            } else {
                end = mid -1
            }
        }
        return -1;
    }

    function pivot(arr) {
        // this checks if there is a pivot point in the array
        if (arr.length ===1 || arr[0] < arr[arr.length -1]) return 0;
        let start = 0;
        let end = arr.length -1;
        let mid = Math.floor((start + end) / 2);
        while (start <= end) {
            if (arr[mid] >= arr[mid + 1]) return mid + 1;
            else if (arr[start] <= arr[mid]) {
                start = mid + 1;
            } else {
                end = mid -1;
            }
        }
    }
}
module.exports = findRotatedIndex