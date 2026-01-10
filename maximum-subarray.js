const maximumSubArray = (nums, size) => {

    let max = 0


    for (let i = 0; i <= nums.length - size; i++) {
        // console.log("whole traverse", i)
        // console.log("whole traverse", nums[i])

        let sum = 0;
        for (let j = i; j < (size + i); j++) {
            // const element = arr/ay[i];
            console.log("nums[j]", nums[j])
            sum += nums[j]
        }
        max = sum > max ? sum : max;
        console.log("\n")
    }
    console.log(max)
}

console.log(maximumSubArray([3, 8, 2, 5, 7, 6, 12], 4))