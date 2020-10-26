/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
/**
 * Runtime: 100 ms, faster than 20.61% of JavaScript online submissions for Shuffle String.
 * Memory Usage: 40.4 MB, less than 5.87% of JavaScript online submissions for Shuffle String.
 */
var restoreString = function (s, indices) {
  let result = [];
  indices.forEach((item, index) => {
    result[item] = s[index];
  });
  return result.join('');
};
module.exports = restoreString;
