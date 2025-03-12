#include <vector>
#include <unordered_map>
# include <string>

using namespace std;

class Solution {
    public:
        vector<vector<string>> groupAnagrams(vector<string>& strs) {
            unordered_map<string, vector<string>> groups;
    
            for (string s: strs) {
                vector count(26, 0);
                for (char c: s) {
                    count[c - 'a']++;
                }
                string key = to_string(count[0]);
                for (int i = 1; i < 26; i++) {
                    key += ',' + to_string(count[i]);
                }
                groups[key].push_back(s);
            }
            vector<vector<string>> values;
            for (const auto& pair: groups) {
                values.push_back(pair.second);
            }
            return values;
        }
};

// Time Complexity: O(n * m)
// Space Complexity: O(n * m)