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

// Tests
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
