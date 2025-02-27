public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        IDictionary<string, IList<string>> groups = new Dictionary<string, IList<string>>();

        foreach (String s in strs) {
            int[] count = new int[26];
            foreach (char c in s.ToCharArray()) {
                count[c - 'a']++;
            }
            string key = string.Join(",", count);
            if (!groups.ContainsKey(key)) {
                groups[key] = new List<string>();
            }
            groups[key].Add(s);
        }
        return new List<IList<string>>(groups.Values);
    }
}

// Time complexity: O(N * K)
// Space complexity: O(N * K)