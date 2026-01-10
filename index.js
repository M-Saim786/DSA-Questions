// var helperXOR = function (num1, num2) {
//     // console.log("num1", num1)
//     // console.log("num2", num2)
//     if (num1 == num2) return 0;
//     return 1
// }

// var singleNumber = function (nums) {
//     var result = 0
//     for (let i = 0; i < nums.length; i++) {
//         // const element = array[i];
//         console.log("nums[i]", nums[i])

//         console.log("result", result)
//         result = result ^ nums[i]
//         console.log("result after assignment", result)
//         // result = helperXOR(result, nums[i])
//     }
//     return result
// };

// // console.log(singleNumber([4,1,2,1,2]))
// console.log(singleNumber([2, 2, 4, 5, 4]))



// var isPalindrome = function (s) {
//     // let s = "A man, a plan, a canal: Panama";
//     let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     // console.log(cleaned);
//     let left = 0
//     let right = cleaned.length - 1;
//     // console.log(left, right)
//     while (left <= right) {
//         // console.log("left", left)
//         // console.log("right", right)
//         // console.log("s[left]", cleaned[left])
//         // console.log("s[left]", cleaned[left])
//         if (cleaned[left] !== cleaned[right]) {
//             return false
//         }
//         left++
//         right--
//     }
//     return true

// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"))


// var moveZeroes = function (nums) {
//     console.log("given num", nums)
//     let zeroARR = []
//     let NonZeroARR = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 0) { zeroARR.push(0) }
//         else { NonZeroARR.push(nums[i]) }
//     }
//     console.log(NonZeroARR)
//     console.log(zeroARR)

//     return [...NonZeroARR, ...zeroARR]
// };

// console.log(moveZeroes([0, 1, 0, 5, 3, 12]))



// var moveZeroes = function (nums) {
//     console.log("given num", nums)
//     let left = 0
//     for (let right = 0; right < nums.length; right++) {
//         if (nums[right] != 0) {
//             let temp = nums[left]
//             nums[left] = nums[right]
//             nums[right] = temp
//             left++
//         }
//     };
//     return nums
// }
//     console.log(moveZeroes([0, 1, 0, 5, 3, 12]))

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//     console.log(s,t)
//     let sortedS = s.toLowerCase().split("").sort().join();
//     let sortedT = t.toLowerCase().split("").sort().join();
//     console.log(sortedS)
//     console.log(sortedT)
//     return sortedS === sortedT
// };
// console.log(isAnagram("anagram","nagaram"))


// // ------------ Appraoch 2 with array ----------

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function (s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     const counts = new Array(26).fill(0)

//     const aCharCode = "a".charCodeAt(0)
//     for (let i = 0; i < s.length ; i++) {

//         const sIndex = s.charCodeAt(i) - aCharCode
//         const tIndex = t.charCodeAt(i) - aCharCode

//         counts[sIndex]++
//         counts[tIndex]--
//     }


//     for (let i = 0; i < counts.length; i++) {
//         if (counts[i] != 0) {
//             return false
//         }
//     }
//     return true

// };
// console.log(isAnagram("anagram", "nagaram"))





// ------------ Appraoch 3 with HashMap ----------

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function (s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     let counts = new Map();

//     for (const char of s) {
//         counts.set(char, (counts.get(char) || 0) + 1);
//     }

//     for (const char of t) {
//         let count = counts.get(char);
//         if (!count || count <= 0) {
//             return false;
//         }
//         counts.set(char, count - 1);
//     }

//     return true

// };
// console.log(isAnagram("anagram", "nagaram"))




// var containsDuplicate = function(nums) {
//     const seen = new Set();
//     for (let i = 0; i <nums.length; i++){
//         if(seen.has(nums)) return true
//         see
//     }
// };



// var missingNumber = function (nums) {
//     let sum = 0
//     let seqVal = 0
//     console.log(nums.length)
//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i])
//         sum += nums[i]
//         seqVal = seqVal + (i + 1)
//     }

//     return seqVal - sum
//     // console.log(sum)
//     // console.log(seqVal)
// };

// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))

// console.log(missingNumber([3, 0, 1]))
// console.log(missingNumber([3, 0, 1]))



