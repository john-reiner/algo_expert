const primeNumberCheck = number => {
    if (number === 0 || number === 1 ) return false
    for (let i = 0; i < number; i++) {
        const numToCheck = i + 1;
        if (numToCheck !== number && numToCheck !== 1) {
            if (number % numToCheck === 0) return false
        }
    }
    return true
}

console.log(primeNumberCheck(5)) 