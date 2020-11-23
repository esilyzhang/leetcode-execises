/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 * result Runtime: 84 ms, faster than 10.78% of JavaScript online submissions for Build an Array With Stack Operations.
 * Memory Usage: 38.4 MB, less than 84.05% of JavaScript online submissions for Build an Array With Stack Operations.
 */
var buildArray = function (target, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i === target[0]) {
      result.push('Push');
      target.shift();
    } else {
      result.push('Push', 'Pop');
    }
    if (!target.length) {
      return result;
    }
  }
  return result;
};
module.exports = buildArray;
