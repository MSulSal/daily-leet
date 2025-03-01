class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    const res = "";
    for (const s of strs) {
      res += s.length + "#" + s;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      const length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
    }
    return res;
  }
}
