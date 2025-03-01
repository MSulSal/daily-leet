public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int product = 1;
        int[] products = new int[nums.Length];
        Array.Fill(products, 1);

        for (int i = 0; i < nums.Length; i++) {
            products[i] = product;
            product *= nums[i];
        }

        product = 1;

        for (int i = nums.Length - 1; i >= 0; i--) {
            products[i] *= product;
            product *= nums[i];
        }

        return products;
    }
}

// Time complexity: O(n)
// Space complexity: O(1)