/**
 * @param {string} s
 * @return {number}
 * @result Runtime: 100 ms, faster than 92.94% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 43.3 MB, less than 5.77% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 */
var lengthOfLongestSubstring = function (s) {
  let lng = 0,
    lIndex = 0,
    rIndex = 0;
  const charMap = new Map();
  for (rIndex = 0; rIndex < s.length; rIndex++) {
    let curChar = s.charAt(rIndex);
    if (charMap.has(curChar)) {
      let preIndex = lIndex;
      lIndex = charMap.get(curChar) + 1;
      for (let j = preIndex; j < lIndex - 1; j++) {
        charMap.delete(s.charAt(j));
      }
    } else {
      if (lng < rIndex - lIndex + 1) {
        lng = rIndex - lIndex + 1;
      }
    }
    charMap.set(curChar, rIndex);
  }

  return lng;
};
module.exports = lengthOfLongestSubstring;
