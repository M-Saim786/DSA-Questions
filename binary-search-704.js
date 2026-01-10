
var binarySearch = function (nums, target) {

    let si = 0
    let ei = nums.length - 1
    console.log(ei, nums[ei])
    let mid = Math.floor((ei) / 2)
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
        // else return mid
    }


    console.log("mid", mid)

    // for (let i = 0; i < nums.length; i++) {
    //     // for (let j = i; j < nums.length; j++) {

    //     // }

    //     if (nums[i] === target) return i

    // }
    return -1
};

console.log("binary search:", binarySearch([2, 3, 5, 6, 7, 8, 12, 35], 12))


// var search = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         // for (let j = i; j < nums.length; j++) {

//         // }

//         if (nums[i] === target) return i

//     }
//     return -1
// };

// console.log("linear search:", search([35, 3, 8, 2, 5, 7, 6, 12], 7))
