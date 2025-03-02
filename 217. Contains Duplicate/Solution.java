class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> numset = new HashSet<>();

        for (int i = 0; i < nums.length; i++) {
            if (numset.contains(nums[i])) {
                return true;
            }
            numset.add(nums[i]);
        }
        return false;
    }
}

// Time complexity: O(n)
// Space complexity: O(n)