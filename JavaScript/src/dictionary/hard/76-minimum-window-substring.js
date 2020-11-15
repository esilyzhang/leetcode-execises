/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * @result Runtime: 104 ms, faster than 61.58% of JavaScript online submissions for Minimum Window Substring.
 * Memory Usage: 43.6 MB, less than 18.23% of JavaScript online submissions for Minimum Window Substring.
 */
var minWindow = function (s, t) {
  let result = '',
    lindex = 0,
    rindex = 0,
    charTypeNum;
  const charMap = new Map();
  for (let i = 0; i < t.length; i++) {
    charMap.set(
      t.charAt(i),
      charMap.has(t.charAt(i)) ? charMap.get(t.charAt(i)) + 1 : 1
    );
  }
  charTypeNum = charMap.size;
  while (rindex < s.length) {
    const rChar = s.charAt(rindex);
    if (charMap.has(rChar)) {
      charMap.set(rChar, charMap.get(rChar) - 1);
      if (charMap.get(rChar) === 0) charTypeNum--;
    }
    while (charTypeNum === 0) {
      curSubstr = s.substring(lindex, rindex + 1);
      if (!result || result.length > curSubstr.length) {
        result = curSubstr;
      }
      const lChar = s.charAt(lindex);
      if (charMap.has(lChar)) {
        charMap.set(lChar, charMap.get(lChar) + 1);
        if (charMap.get(lChar) === 1) charTypeNum++;
      }
      lindex++;
    }

    rindex++;
  }
  return result;
};

module.exports = minWindow;
