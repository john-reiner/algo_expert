const lengthOfLongestSubstring = s => {
    let letterStorage = {}
    let currentWinner = 0
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (letterStorage[letter]) {
            if (Object.keys(letterStorage).length > currentWinner) {
                currentWinner = Object.keys(letterStorage).length
            }
            letterStorage = {}
            letterStorage[letter] = true
        } else {
            letterStorage[letter] = true
            if (Object.keys(letterStorage).length > currentWinner) {
                currentWinner = Object.keys(letterStorage).length
            }
        }
    }
    return currentWinner
}

var s = "dvdf"

console.log(lengthOfLongestSubstring(s))