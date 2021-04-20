function nonConstructibleChange(coins) {
    coins.sort(function(a, b){return a-b})
    let count = 1
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        if (coin < count + 1) {
            count += coin
        }
    }
    return count 
}

var coins = []

console.log(nonConstructibleChange(coins))