/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const result = [],
    max = Math.max(...candies);
  candies.forEach((item) => {
    if (item + extraCandies < max) {
      result.push(false);
      return;
    }
    result.push(true);
  });
  return result;
};
module.exports = kidsWithCandies;
