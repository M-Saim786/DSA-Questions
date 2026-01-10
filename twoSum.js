var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            console.log(nums[i])
            console.log(nums[j])
            console.log(nums[i], nums[j])
            if ((nums[i] + nums[j]) === target) return [i, j]
        }
    }

    // console.log(right)
    // while (left <= nums.length - 1) {
    //     let sum = nums[left] + nums[right]
    //     // console.log(nums[left])
    //     // console.log(nums[right])
    //     // console.log(sum)
    //     if (sum == target) { return [left, right] }
    //     left++
    //     right++

    // }
};

// console.log(twoSum([3, 2, 3], 6))


console.log(twoSum([2, 5, 5, 11], 10))