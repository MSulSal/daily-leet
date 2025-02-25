public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        ISet<int> numset = new HashSet<int>();

        foreach (int num in nums) {
            if (numset.Contains(num)) {
                return true;
            }
            numset.Add(num);
        }
        return false;
    }
}

// Time complexity: O(n)
// Space complexity: O(n)