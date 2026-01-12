var removeDuplicates = function (nums) {
    let p1 = 0;
    let p2 = nums[0];
    let counter = 0;
    while (p1 < nums.length) {
        // console.log("nums[p1]", nums[p1])
        if (nums[p1] != p2) {
            // console.log("not equal", p1)
            counter++
            nums[counter] = nums[p1];
        }
        console.log("nums", nums)
        // counter++
        p1++
    }
    console.log(nums)
    return nums.length;
};

// console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1]))
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
