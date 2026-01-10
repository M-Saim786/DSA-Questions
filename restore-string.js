var restoreString = function (s, indices) {
    console.log(s, s.length, indices);

    const newString = [];

    // const sortedIndices = indices.sort()
    // console.log(sortedIndices)

    // let newstring;
    for (let i = 0; i < s.length; i++) {
        // const element = array[i];
        console.log("s[i]", s[i])
        console.log("indices[i]", indices[i])
        newString[indices[i]] = s[i]
    }
    console.log("newString", newString)
    return newString.join("")
};
console.log(
    restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]))