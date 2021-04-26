var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        if (number === val) {
            nums.splice(i, 1)
            i --
        }
    }
    return nums.length
};

var nums = [4,5,6,7,8,8,8,9]
var val = 8 

console.log(removeElement(nums, val))

// loop over nums 
// if number === val
//  nums.splice(i, 1)
// return nums.length