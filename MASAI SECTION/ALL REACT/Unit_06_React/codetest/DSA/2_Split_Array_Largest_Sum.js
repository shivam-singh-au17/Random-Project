var splitArray = function (arr, k) {
 
    let max = 0;
    let sum = 0;
    for (let num of arr) {
        max = Math.max(max, num);
        sum += num;
    }
    let low = max;
    let high = sum;
    while (low < high) {
        let mid = Math.floor((high + low) / 2);
        let pieces = split(arr, mid);
        if (pieces > k) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
    function split(arr, mid) {
        let pieces = 1;
        let tempSum = 0;
        for (let num of arr) {
            if (tempSum + num > mid) {
                tempSum = num;
                pieces++;
            } else {
                tempSum += num;
            }
        }
        return pieces;
    }

};



