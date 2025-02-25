from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(set(nums))
    
s = Solution()
test_pass_count = 0
test_cases = [
    ([1,2,3,1], True),
    ([1,2,3,4], False),
    ([1,1,1,3,3,4,3,2,4,2], True),
    ([1], False)
]

for input, expected_outcome in test_cases:
    if s.containsDuplicate(input) == expected_outcome:
        test_pass_count += 1
        print("Test passed")
    else:
        print("Test failed")

print(f"{test_pass_count}/{len(test_cases)} tests passed")