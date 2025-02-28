from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        frequency_buckets = [[] for _ in range(len(nums) + 1)]

        for num in nums:
            count[num] = count.get(num, 0) + 1

        for num, count in count.items():
            frequency_buckets[count].append(num)

        topK = []

        for i in range(len(frequency_buckets) - 1, 0, -1):
            for num in frequency_buckets[i]:
                topK.append(num)
                if len(topK) == k:
                    return topK

        return topK

# Time complexity: O(N)
# Space complexity: O(N)