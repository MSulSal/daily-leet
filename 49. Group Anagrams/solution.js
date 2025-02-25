/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  groups = {};

  for (s of strs) {
    count = Array(26).fill(0);
    for (c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    if (groups[count] === undefined) {
      groups[count] = [];
    }
    groups[count].push(s);
  }
  return Object.values(groups);
};
