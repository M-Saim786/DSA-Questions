// var sortSentence = function (s) {
//     // let lowerCase = s.toLowerCase();
//     // console.log(lowerCase)
//     let words = s.split(" ")
//     const newArr = [];
//     console.log("newArr", newArr.length)
//     for (let i = 0; i < words.length; i++) {
//         // const element = array[i];
//         console.log(i)
//         console.log(words[i])

//         let pos = Number(words[i].charAt(words[i].length - 1)) - 1
//         newArr[pos] = words[i].slice(0, -1)
//     }

//     console.log(newArr)

//     return newArr.join(" ")
// };

// // (sortSentence('sentence4 a3 is2 This1'))
// console.log(sortSentence('sentence4 a3 is2 This1'))




function maxOnes(nums) {

    let right = nums.length - 1
    let counter = 0
    for (let i = 0; i <= right; i++) {
        // // const element = array[i];
        // console.log(nums[i])

        if (nums[i] == 1 && (nums[i + 1] == 1 || i !== nums.length - 1)) {
            ++counter
        }
    }
    // console.log(counter)
    return counter
}
console.log(maxOnes([1, 1, 0, 1, 1, 1]))