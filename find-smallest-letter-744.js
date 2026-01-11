
var nextGreatestLetter = function (letters, target) {
    let si = 0;
    let ei = letters.length - 1
    // let mid = Math.floor((ei + si) / 2)
    let ans = letters[0];
    // console.log(mid, letters[mid])
    while (si <= ei) {

        mid = Math.floor((ei + si) / 2)

        if (letters[mid] > target) {
            ans = letters[mid];   // store candidate

            // console.log("ei", ei)
            ei = mid - 1
        }
        else if (letters[mid] < target) {
            // console.log("si", si)
            si = mid + 1
        }
    }

    // console.log("letters[mid]", letters[mid])
    return ans
};



// var nextGreatestLetter = function (letters, target) {
//     let si = 0;
//     let ei = letters.length - 1
//     let mid = Math.floor((ei + si) / 2)
//     let ans = letters[0];
//     console.log(mid, letters[mid])
//     while (si <= ei) {

//         mid = Math.floor((ei + si) / 2)

//         if (letters[mid] > target) {
//             ans = letters[mid];   // store candidate

//             console.log("ei", ei)
//             ei = mid - 1
//         }
//         else if (letters[mid] < target) {
//             console.log("si", si)
//             si = mid + 1
//         }
//     }

//     console.log("letters[mid]", letters[mid])
//     return ans
// };

// console.log("binary search:", nextGreatestLetter(["c", "f", "j"], "a"))
// // console.log("binary search:", nextGreatestLetter([2, 3, 5, 6, 7, 8, 9, 12, 35], 9))
