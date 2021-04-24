const reverseX = x => {

}

const reverseInterger = x => {
    let absNum = Math.abs(x)
    let numberString = absNum.toString();
    let numberArray = new Array(numberString.length)
    for (let i = 0; i < numberString.length; i++) {
        const number = numberString[i];
        const indexToFill = (numberString.length - 1) - i;
        numberArray[indexToFill] = number
    }
    if(+numberArray.join('') < Math.pow(-2, 31) || +numberArray.join('') > Math.pow(2, 31) - 1) return 0;
    x < 0 && numberArray.unshift('-')
    return +numberArray.join('')
}
let x = 1534236469
console.log(reverseInterger(x))