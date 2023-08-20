function findRotationCount(arr, low = 0, high = arr.length -1) {
    if (high === low) return low;
    if (high < low) return 0;
    let mid = Math.floor((low + high) / 2);

   // [3, 4, 5, 1, 2]
   if (mid < high && arr[mid] > arr[mid + 1]) return mid + 1;
   // if mid > 0  this checks if 1 is that the mid index
   if (arr[mid] < arr[start] && arr[mid] < arr[high]) return mid;
    // checks if the array is in order from lowest to highest
   if (arr[high] > arr[mid]) return findRotationCount(arr,low,mid -1);
   return findRotationCount(arr,mid + 1, high);
} 

module.exports = findRotationCount