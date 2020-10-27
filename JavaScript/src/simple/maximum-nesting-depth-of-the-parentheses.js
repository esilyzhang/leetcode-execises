/**
 * @param {string} s
 * @return {number}
 * @result
 * Runtime: 80 ms, faster than 68.59% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
 * Memory Usage: 38.7 MB, less than 78.81% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
 */
var maxDepth = function (s) {
  const vpsRegex = /\([0-9\+\-\*\/#]*\)/g;
  let count = 0;
  function strTest(s) {
    if (vpsRegex.test(s)) {
      count++;
      strTest(s.replace(vpsRegex, '#'));
    }
  }
  strTest(s);
  return count;
};
module.exports = maxDepth;
