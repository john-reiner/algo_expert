function isValidSubsequence(array, sequence) {
    let indexCheck = 0
    for (let i = 0; i < array.length; i++) {

        if (array[i] === sequence[indexCheck]){
            indexCheck ++
        }
        if (sequence.length === indexCheck) {
            return true 

        }
    }
    return false 
}

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [5, 1, 22, 6, -1, 8, 10, 25]

console.log(isValidSubsequence(array, sequence))

// loop over sequence 
// if sequence[i]