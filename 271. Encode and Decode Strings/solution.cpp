#include <vector>
#include <string>

using namespace std;

class Solution {
    public:
        string encode(vector<string>& strs) {
            string res = "";
            for (string s: strs) {
                res += to_string(s.length()) + "#" + s;
            }
            return res;
        }

        vector<string> decode(string s) {
            vector<string> res;
            int i = 0;
            while (i < s.length()) {
                int j = s[i];
                while (j != '#') {
                    j++;
                }
                int len = stoi(s.substr(i, j - i));
                i = j + 1;
                j = i + len;
                res.push_back(s.substr(i, len));
                i = j;
            }
            return res;
        }
};