var strStr = function(haystack, needle) {
    // if (needle.length > haystack.length) return -1
    // if (needle === "") {
    //     return 0
    // } else {
    //     for (let i = 0; i < haystack.length; i++) {
    //         const haystackLetter = haystack[i];
    //         if (haystackLetter === needle[0]) {
    //             let checkIndex = i 
    //             for (let j = 0; j < needle.length; j++) {
    //                 const needleLetter = needle[j];
    //                 if (needleLetter === haystack[checkIndex]) {
    //                     checkIndex ++
    //                     if (needle.length === (checkIndex - i) && checkIndex <= haystack.length) {
    //                         return i 
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // return -1
    return haystack.indexOf(needle)
};

var haystack = ""
var needle = ""

console.log(strStr(haystack, needle))

// if needle === ""
//  return 0
// else 
//  loop over haystack 
//  if haystack[i] === needle[0]
//      set haystackIndex = i 
//      loop over needle 
//      if (needle[j] !== haystack[haystackIndex])
//          break
//      else 
//          return true 


