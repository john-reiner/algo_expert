var romanToInt = function(s) {
    let letterValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let returnValue = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
            returnValue += letterValues[s[i + 1]] - letterValues[s[i]]
            i ++
        } else if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
            returnValue += letterValues[s[i + 1]] - letterValues[s[i]]
            i ++
        } else if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
            returnValue += letterValues[s[i + 1]] - letterValues[s[i]]
            i ++
        } else {
            returnValue += letterValues[s[i]]
        }
    }
    return returnValue
};

var s = "MMMMMMMMMMMMMMMMMM"
// 1994

console.log(romanToInt(s))

// create an object to hold letter values 
// create a return value 
// loop over string 
// if s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X"), returnValue += letterValues[s[i + 1]] - letterValues[s[i]]
// follow the above patter for the two other examples
// else, returnValue += letterValues[s[i]]
// return retunValue