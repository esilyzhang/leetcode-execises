/**
 * @param {string} s
 * @return {boolean}
 * @todo 奇数字符串肯定为不合法
 */
var isValid = function (s) {
  let parentheses = [];
  const map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  for (let i = 0; i < s.length; i++) {
    let curC = s.charAt(i);
    if (map.has(curC)) {
      parentheses.push(curC);
    } else {
      let stackTop = parentheses[parentheses.length - 1];
      if (map.get(stackTop) === curC) {
        parentheses.pop();
      } else {
        return false;
      }
    }
  }
  if (parentheses.length) {
    return false;
  }
  return true;
};
//--------------------------------
// 1. 遍历字符串
// 2.
module.exports = isValid;
