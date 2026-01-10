const SecondLargestNum = (nums) => {
    let max = nums[0]
    let SecMax = nums[1]
    // console.log(SecMax, max)

    if (max < SecMax) {
        let temp = max
        max = SecMax;
        SecMax = temp;
    }
    // console.log("SecMax", SecMax)
    // console.log("max",max)


    for (let i = 2; i < nums.length; i++) {
        console.log(nums[i])
        if (nums[i] > max) {
            SecMax = max;
            max = nums[i];
        }
        else if (nums[i] > SecMax) {
            SecMax = nums[i]
        }

    }
    // console.log("SecMax, max", SecMax, max)
}

// console.log(SecondLargestNum([3, 2, 2, 3]))
console.log(SecondLargestNum([0, 1, 2, 2, 3, 0, 4, 2]))