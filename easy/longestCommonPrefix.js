var longestCommonPrefix = function(strs) {
    const caseString = strs[0]
    let returnString = ""
    if (strs.length >= 2 && caseString.length > 0) {
        for (let i = 0; i < caseString.length; i++) {
            const letter = caseString[i];
            for (let j = 0; j < strs.length; j++) {
                if (letter !== strs[j][i]) {
                    return returnString;
                }
            }
            returnString += letter
        }
    } else {
        return caseString
    }
    return returnString;
};

var strs = ["",""]

console.log(longestCommonPrefix(strs))

// create a caseString = str[0]
// create a returnString = ""
// if (strs.length >= 2)
//  loop over strs
//  loop over strs again starting at 1 
//  if (strs[j][i] !== caseString[i])
//      break 
//  else, returnString += caseString[i]
// else, return caseString