function containsDuplicate(nums) {
  const numset = new Set();

  for (const num of nums) {
    if (numset.has(num)) {
      return true;
    }
    numset.add(num);
  }
  return false;
}

// Time complexity: O(n)
// Space complexity: O(n)
