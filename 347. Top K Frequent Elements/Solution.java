class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        List<Integer>[] frequencyBuckets = new List[nums.length + 1];
        for (int i = 0; i < nums.length + 1; i++) {
            frequencyBuckets[i] = new ArrayList<>();
        }

        for (int num: nums) {
            count.put(num, count.getOrDefault(num, 0) + 1);
        }

        for (Map.Entry<Integer, Integer> entry: count.entrySet()) {
            int num = entry.getKey();
            int cnt = entry.getValue();
            frequencyBuckets[cnt].add(num);
        }

        int[] topK = new int[k];
        int index = 0;
        for (int i = frequencyBuckets.length - 1; i > 0; i--) {
            for (int num: frequencyBuckets[i]) {
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

// Time complexity: O(N)
// Space complexity: O(N)

