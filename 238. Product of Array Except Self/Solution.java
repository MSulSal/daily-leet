class Solution {
    public int[] productExceptSelf(int[] nums) {
        int product = 1;
        int[] products = new int[nums.length];
        Arrays.fill(products, 1);

        for (int i = 0; i < nums.length; i++) {
            products[i] = product;
            product *= nums[i];
        }

        product = 1;

        for (int i = nums.length - 1; i >= 0; i--) {
            products[i] *= product;
            product *= nums[i];
        }

        return products;
    }
}

// Time complexity: O(n)
// Space complexity: O(1)