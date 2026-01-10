// //  This solution using O(N) TIME AND SPACE COMPLEXITY
// var majorityElement = function (nums) {
//     if (nums.length == 1) return nums[0]
//     let mapVal = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         mapVal.set(nums[i], (mapVal.get(nums[i]) || 0) + 1)
//         // if(mapVal.get(nums[i] > (nums.length/2))){
//         //     return i
//         // }
//     }


//     let count = 0
//     let countKey
//     for (let [key, value] of mapVal.entries()) {
//         console.log(key, "=>", value);
//         if (value > count) {
//             count = value;
//             countKey = key;
//         }
//     }
//     return countKey

// };

// console.log(majorityElement([1]))
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))


//  This solution using O(N) TIME AND O(1) SPACE COMPLEXITY
var majorityElement = function (nums) {
    let count = 0
    let countKey
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums[i])
        if (count == 0) {
            countKey = nums[i]
        }
        console.log("countKey", countKey)

        // if (nums[i] == countKey) count++
        // else count--
        count = nums[i] == countKey ? count + 1 :count  -1;

    }
    // console.log("count", count)
    return countKey
};

// console.log(majorityElement([1]))
console.log(majorityElement([6, 5, 5]))
console.log(majorityElement([6, 6, 6, 7, 7]))
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))