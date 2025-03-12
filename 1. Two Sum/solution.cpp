#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
    public:
        vector<int> twoSum(vector<int>& nums, int target) {
            unordered_map<int, int> prev;
    
            for (int i = 0; i < nums.size(); i++) {
                int num = nums[i];
                int diff = target - num;
                if (prev.find(diff) != prev.end()) {
                    return {prev[diff], i};
                }
                prev[num] = i;
            }
    
            return {};
        }
};

// Time Complexity: O(n)
// Space Complexity: O(n)