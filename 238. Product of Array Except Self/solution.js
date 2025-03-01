/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let product = 1;
  const products = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    products[i] = product;
    product *= nums[i];
  }

  product = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    products[i] *= product;
    product *= nums[i];
  }

  return products;
};

// Time complexity: O(n)
// Space complexity: O(1)
