from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        product = 1
        products = [1] * len(nums)

        for i in range(len(nums)):
            products[i] *= product
            product *= nums[i]

        product = 1

        for i in range(len(nums) - 1, -1, -1):
            products[i] *= product
            product *= nums[i]

        return products