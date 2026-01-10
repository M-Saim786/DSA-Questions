var moveZeroes = function (nums) {
    let left = 0
    let right = 0;
    while (right < 2 ) {
        console.log(nums[right])
        if (nums[right] != 0) {

            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            // we increment because we have to place new index for next non-zero number
            left++
        }
        right++

    }
    console.log(nums)
};

console.log(moveZeroes([0, 1, 0, 3, 12]))