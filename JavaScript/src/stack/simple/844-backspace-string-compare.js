/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 * @result Runtime: 84 ms, faster than 51.54% of JavaScript online submissions for Backspace String Compare.
 * Memory Usage: 38.8 MB, less than 72.63% of JavaScript online submissions for Backspace String Compare.
 */
var backspaceCompare = function (S, T) {
  function genStrStack(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === '#') {
        stack.pop();
      } else {
        stack.push(str.charAt(i));
      }
    }
    return stack;
  }
  return genStrStack(S).join('') === genStrStack(T).join('');
};
module.exports = backspaceCompare;
