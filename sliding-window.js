const maximumSubArray = (nums, size) => {

    let sum = 0;
    for (let j = 0; j < size; j++) {
        // const element = arr/ay[i];
        console.log("nums[j]", nums[j])
        sum += nums[j]
    }
    console.log(sum)
    let max = sum


    for (let i = 1; i <= nums.length - size; i++) {
        console.log("whole traverse", i)
        console.log("whole traverse", nums[i])
        sum = sum + nums[size - 1 + i] - nums[i - 1]
        console.log("sum", sum)

        // let sum = 0;
        // for (let j = i; j < (size + i); j++) {
        //     // const element = arr/ay[i];
        //     console.log("nums[j]", nums[j])
        //     sum += nums[j]
        // }

        max = sum > max ? sum : max;
        console.log("\n")
    }
    console.log(sum)
    console.log(max)
    return max;
}

console.log("max:", maximumSubArray([35, 3, 8, 2, 5, 7, 6, 12], 4))