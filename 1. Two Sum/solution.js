/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (seen[diff] !== undefined) {
      return [seen[diff], i];
    }
    seen[num] = i;
  }
  return [];
};

// Time complexity: O(n)
// Space complexity: O(n)
