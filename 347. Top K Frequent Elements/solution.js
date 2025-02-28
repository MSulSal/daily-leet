/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const count = {};
  const frequencyBuckets = [];
  for (let i = 0; i < nums.length + 1; i++) {
    frequencyBuckets.push([]);
  }

  for (const num of nums) {
    if (count[num] === undefined) {
      count[num] = 0;
    }
    count[num] += 1;
  }

  for (const num in count) {
    frequencyBuckets[count[num]].push(num);
  }

  const topK = [];
  for (let i = frequencyBuckets.length - 1; i > 0; i--) {
    for (const num of frequencyBuckets[i]) {
      topK.push(parseInt(num));
      if (topK.length === k) {
        return topK;
      }
    }
  }
};

// Time complexity: O(n)
// Space complexity: O(n)
