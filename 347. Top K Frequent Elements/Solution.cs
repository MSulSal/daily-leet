public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        IDictionary<int, int> count = new Dictionary<int, int>();
        IList<int>[] frequencyBuckets = new List<int>[nums.Length + 1];
        for (int i = 0; i < frequencyBuckets.Length; i++) {
             frequencyBuckets[i] = new List<int>();
        }

        foreach (int num in nums) {
            if (!count.ContainsKey(num)) {
                count[num] = 0;
            }
            count[num]++;
        }

        foreach (KeyValuePair<int, int> entry in count) {
            frequencyBuckets[entry.Value].Add(entry.Key);
        }

        int[] topK = new int[k];
        int index = 0;
        for (int i = frequencyBuckets.Length - 1; i > 0; i--) {
            foreach (int num in frequencyBuckets[i]) {
                topK[index] = num;
                index++;
                if (index == k) {
                    return topK;
                }
            }
        }
        return topK;
    }
}

// Time complexity: O(n)
// Space complexity: O(n)