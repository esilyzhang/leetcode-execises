/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
/**
 * Runtime: 80 ms, faster than 73.53% of JavaScript online submissions for Jewels and Stones.
 * Memory Usage: 39.6 MB, less than 14.38% of JavaScript online submissions for Jewels and Stones.
 * */
var numJewelsInStones = function (J, S) {
  const result = S.match(new RegExp(`[${J}]`, 'g'));
  return result ? result.length : 0;
};
module.exports = numJewelsInStones;
