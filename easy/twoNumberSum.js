// brute force!
// function twoNumberSum(array, targetSum) {
//     let returnArray = []
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (i !== j && array[i] + array[j] === targetSum) {
//                 returnArray.push(array[i])
//             }
            
//         }
        
//     }
//     return returnArray
// }


// optimal 

function twoNumberSum(array, targetSum) {
    var numbers = {}

    for (let i = 0; i < array.length; i++) {
        let match = targetSum - array[i]
        if (!numbers[match]) {
            numbers[array[i]] = true
        } else {
            return [match, array[i]]
        }
    }
    return []
}
const array = [6]
const targetSum = 6
console.log(twoNumberSum(array, targetSum))