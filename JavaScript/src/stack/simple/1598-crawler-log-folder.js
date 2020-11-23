/**
 * @param {string[]} logs
 * @return {number}
 * result Runtime: 80 ms, faster than 75.76% of JavaScript online submissions for Crawler Log Folder.
 * Memory Usage: 39.4 MB, less than 35.06% of JavaScript online submissions for Crawler Log Folder.
 */
var minOperations = function (logs) {
  const pathStack = []
  logs.forEach((log) => {
    switch (log) {
      case '../':
        pathStack.pop()
        break
      case './':
        break
      default:
        pathStack.push(log)
    }
  })
  return pathStack.length
}
module.exports = minOperations
