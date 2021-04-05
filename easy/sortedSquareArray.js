function sortedSquaredArray(array) {
    
    let returnArray = []

    for (let i = 0; i < array.length; i++) {
        returnArray.push((array[i] * array[i]))
    }
    return returnArray.sort(function(a,b) {
        return a-b
    });
}

const array = [-1, -1, 2, 3, 3, 3, 4]

console.log(sortedSquaredArray(array))