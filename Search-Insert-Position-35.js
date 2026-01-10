
var searchInsert = function (nums, target) {
    let si = 0
    let ei = nums.length - 1
    // console.log(ei, nums[ei])
    let mid = Math.floor((ei + si) / 2)
    console.log(mid)
    while (si <= ei) {
        if (nums[mid] === target) { return mid }
        else if (nums[mid] < target) {
            si = mid + 1
        }
        else if (nums[mid] > target) {
            ei = mid - 1
        }
        console.log("si:", si, "ei:", ei)
        mid = Math.floor((ei + si) / 2)
        console.log("new mid:", mid)

    }
    // console.log("mid", mid)

    return si

};

console.log("binary search:", searchInsert([2, 3, 5, 6], 4))
console.log("binary search:", searchInsert([2, 3, 5, 6, 7, 8, 12, 35], 9))
