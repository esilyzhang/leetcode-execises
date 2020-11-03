/**
 * @param {string} s
 * @return {number}
 * @result Runtime: 88 ms, faster than 10.33% of JavaScript online submissions for Split a String in Balanced Strings.
 * Memory Usage: 40.8 MB, less than 34.62% of JavaScript online submissions for Split a String in Balanced Strings.
 */
var balancedStringSplit = function (s) {
  let count = 0,
    tmpStr = { R: 0, L: 0 };
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    tmpStr[char] += 1;
    Object.keys(tmpStr).forEach(function (key) {
      if (key !== char && tmpStr[key] && tmpStr[key] === tmpStr[char]) {
        count++;
        tmpStr[char] = 0;
        tmpStr[key] = 0;
      }
    });
  }

  return count;
};
module.exports = balancedStringSplit;
