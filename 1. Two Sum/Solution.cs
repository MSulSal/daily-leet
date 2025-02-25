 public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        IDictionary<int, int> seen = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++) {
            int num = nums[i];
            int diff = target - num;
            if (seen.TryGetValue(diff, out int index)) {
                return new int[]{seen[diff], i};
            }
            seen[num] = i;
        }
        return new int[]{};
    }
}