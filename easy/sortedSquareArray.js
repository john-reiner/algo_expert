// function sortedSquaredArray(array) {

//     let returnArray = []

//     for (let i = 0; i < array.length; i++) {
//         returnArray.push((array[i] * array[i]))
//     }
//     return returnArray.sort(function(a,b) {
//         return a-b
//     });

// }

function sortedSquaredArray(array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    let returnArray = new Array(array.length);
    let indexCheck = rightIndex; 

    if (leftIndex === rightIndex) returnArray[indexCheck] = array[leftIndex] * array[leftIndex];

    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[leftIndex]) > Math.abs(array[rightIndex])) {
            returnArray[indexCheck] = array[leftIndex] * array[leftIndex];
            leftIndex ++;

        } else {
            returnArray[indexCheck] = array[rightIndex] * array[rightIndex];
            rightIndex --;

        };


        indexCheck --;
    }

    return returnArray
}


const array = []

console.log(sortedSquaredArray(array))