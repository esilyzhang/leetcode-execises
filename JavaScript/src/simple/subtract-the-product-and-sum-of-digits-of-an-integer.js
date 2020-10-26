/**
 * @param {number} n
 * @return {number}
 */
/**
 * Runtime: 84 ms, faster than 18.55% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
 * Memory Usage: 38.6 MB, less than 39.59% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
 */
var subtractProductAndSum = function (n) {
  let product = 1,
    sum = 0;
  function calc(n) {
    if (n) {
      let curDigit = n % 10;
      product *= curDigit;
      sum += curDigit;
      calc(parseInt(n / 10));
    }
  }
  calc(n);
  return product - sum;
};
module.exports = subtractProductAndSum;
