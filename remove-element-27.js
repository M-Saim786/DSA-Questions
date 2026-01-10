
var removeElement = function (nums, val) {
    let left = 0;
    let right = 0
    while (left < nums.length) {
        console.log(nums[left])
        // console.log(nums[right])
        if (nums[left] != val) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            right++
        }
        left++

    }

    console.log(nums)

    return nums, right
};

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))