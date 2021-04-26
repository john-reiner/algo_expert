var isPalindrome = function(x) {
    let numStr = x.toString();
    let pointerOne = 0;
    let pointerTwo = numStr.length - 1;
    for (let i = 0; i < numStr.length; i++) {
        let leftValue = numStr[pointerOne];
        let rightValue = numStr[pointerTwo];
        if (leftValue !== rightValue) {
            return false 
        } else {
            pointerOne ++
            pointerTwo --
        }
    }
    return true 
};

var x = 123456543216

console.log(isPalindrome(x))

// convert num to str 
// loop over the string 
// set up 2 pointers 
// if the 2 pointers ever dont match, return false