var isValid = function(s) {
    const parenthValues = {
        '{': {open: true, complement: "}"},
        '[': {open: true, complement: "]"},
        '(': {open: true, complement: ")"},
        ')': {open: false, complement: "("},
        ']': {open: false, complement: "["},
        '}': {open: false, complement: "{"},
    }
    let stringArray = s.split('')
    if (stringArray.length > 1) {
        for (let i = 0; i < stringArray.length; i++) {
            const indexOne = stringArray[i];
            const indexTwo = stringArray[i + 1] === "undefined" ? stringArray[stringArray.length - 1] : stringArray[i + 1];
            if (parenthValues[stringArray[stringArray.length - 1]].open) return false 
            if (parenthValues[indexOne].open && parenthValues[indexTwo].complement === indexOne) {
                stringArray.splice(i,2)
                if (stringArray.length === 0) return true
                i = -1
            }
        }
        return false
    } else {
        return false
    }
};

var s = "(("




console.log(isValid(s))

// create s into an array 
// loop over array 
//  have a two pointer system each pointing at the first two indexes 
//  if index 1 and 2 match 
//      stringArray.splice(i,2)
//      if (stringArray.length === 0) return true 
//      i = 0 
// return false