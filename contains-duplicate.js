
var containsDuplicate = function (nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        // const element = array[i];
        console.log(nums[i])
        if (set.has(nums[i])) {
            return true;
        }

        set.add(nums[i])
    }
    // console.log("set", set)
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]))