#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
    public:
        vector<int> topKFrequent(vector<int>& nums, int k) {
            unordered_map<int, int> count;
            vector<vector<int>> frequencyBuckets(nums.size() + 1);
    
            for (int num: nums) {
                count[num] = 1 + count[num];
            }
    
            for (const auto& entry: count) {
                frequencyBuckets[entry.second].push_back(entry.first);
            }
    
            vector<int> topK;
    
            for (int i = frequencyBuckets.size() - 1; i > 0; i--) {
                for (int num: frequencyBuckets.at(i)) {
                    topK.push_back(num);
                    if (topK.size() == k) {
                        return topK;
                    }
                }
            }
    
            return topK;
        }
};

// Time Complexity: O(n)
// Space Complexity: O(n)