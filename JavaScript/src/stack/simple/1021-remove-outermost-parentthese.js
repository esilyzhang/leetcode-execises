/**
 * @param {string} S
 * @return {string}
 * @result Runtime: 80 ms, faster than 83.46% of JavaScript online submissions for Remove Outermost Parentheses.
 * Memory Usage: 40.8 MB, less than 38.40% of JavaScript online submissions for Remove Outermost Parentheses.
 */
var removeOuterParentheses = function (S) {
  let result = '',
    parentheses = [];
  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === '(') {
      // 判断里面是否含有子表达式
      if (parentheses.length) {
        result += S.charAt(i);
      }
      parentheses.push(S.charAt(i));
    } else {
      parentheses.pop();
      // 判断里面是否含有子表达式
      if (parentheses.length) {
        result += S.charAt(i);
      }
    }
  }
  return result;
};

module.exports = removeOuterParentheses;
