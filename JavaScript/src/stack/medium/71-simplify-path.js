/**
 * @param {string} path
 * @return {string}
 * @result Runtime: 96 ms, faster than 33.89% of JavaScript online submissions for Simplify Path.
 * Memory Usage: 40 MB, less than 89.04% of JavaScript online submissions for Simplify Path.
 */
var simplifyPath = function (path) {
  let curPath = '',
    pathStack = []
  for (let i = 0; i < path.length; i++) {
    let curChar = path.charAt(i)
    if (
      (curChar === '/' && curPath && curPath !== '/') ||
      (i === path.length - 1 && curChar !== '/')
    ) {
      curPath =
        i === path.length - 1 && curChar !== '/' ? curPath + curChar : curPath
      switch (curPath) {
        case '/.':
          break
        case '/..':
          pathStack.pop()
          break
        default:
          pathStack.push(curPath)
          break
      }
      curPath = '/'
    } else if (curPath !== '/' || curChar !== '/') {
      curPath += curChar
    }
  }
  return pathStack.join('') || '/'
}

module.exports = simplifyPath
