#include <iostream>
#include <string>

using namespace std;

class Solution {
    public:
        bool isAnagram(string s, string t) {
            if (s.length() != t.length()) {
                return false;
            }
    
            int count[26];
            for (int i = 0; i < s.length(); i++) {
                count[s[i] - 'a']++;
                count[t[i] - 'a']--;
            }
    
            for (int c: count) {
                if (c != 0) {
                    return false;
                }
            }
    
            return true;
        }
};

// Time complexity: O(n)
// Space complexity: O(1)