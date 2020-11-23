/**
 * @param {string} s
 * @return {string}
 * @result Runtime: 92 ms, faster than 58.06% of JavaScript online submissions for Make The String Great.
 * Memory Usage: 40.7 MB, less than 61.75% of JavaScript online submissions for Make The String Great.
 */
var makeGood = function (s) {
  const strStack = []
  function checked(char1, char2) {
    if (char1 === char2) {
      return false
    }
    if (char1.toUpperCase() === char2.toUpperCase()) {
      return true
    } else {
      return false
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (
      strStack[strStack.length - 1] &&
      checked(strStack[strStack.length - 1], s.charAt(i))
    ) {
      strStack.pop()
    } else {
      strStack.push(s.charAt(i))
    }
  }
  return strStack.join('')
}
module.exports = makeGood
