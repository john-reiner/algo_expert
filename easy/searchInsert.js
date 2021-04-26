var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        if (number === target || target < number) return i;
        if (target > number && target < nums[i + 1]) return i + 1; 
    }
    return nums.length
};

var nums = [1,3,5,6]
var target = 1

console.log(searchInsert(nums, target))


// loop through nums 
//  if (nums[i] === target)
//      return i
//  if (target > nums[i] && target < nums[i + 1])
//      return i + 1
//  return nums.length
