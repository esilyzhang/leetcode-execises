/**
 * @param {string} S
 * @return {string}
 * @result Runtime: 104 ms, faster than 36.01% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
 * Memory Usage: 46.9 MB, less than 54.02% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
 */
var removeDuplicates = function (S) {
  const strStack = [];
  for (let i = 0; i < S.length; i++) {
    if (strStack[strStack.length - 1] === S.charAt(i)) {
      strStack.pop();
    } else {
      strStack.push(S.charAt(i));
    }
  }
  return strStack.join('');
};
module.exports = removeDuplicates;
