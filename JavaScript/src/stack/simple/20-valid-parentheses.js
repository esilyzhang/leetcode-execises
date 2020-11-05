/**
 * @param {string} s
 * @return {boolean}
 * @result Runtime: 80 ms, faster than 61.96% of JavaScript online submissions for Valid Parentheses.
 * Memory Usage: 38.3 MB, less than 5.65% of JavaScript online submissions for Valid Parentheses.
 * @todo 奇数字符串肯定为不合法
 */
var isValid = function (s) {
  let parentheses = [];
  for (let i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
      case '(':
        parentheses.push('(');
        continue;
      case ')':
        if ('(' !== parentheses[parentheses.length - 1]) {
          return false;
        }
        parentheses.pop();
        continue;
      case '[':
        parentheses.push('[');
        continue;
      case ']':
        if ('[' !== parentheses[parentheses.length - 1]) {
          return false;
        }
        parentheses.pop();
        continue;
      case '{':
        parentheses.push('{');
        continue;
      case '}':
        if ('{' !== parentheses[parentheses.length - 1]) {
          return false;
        }
        parentheses.pop();
        continue;
    }
  }
  if (parentheses.length) {
    return false;
  }
  return true;
};
module.exports = isValid;
