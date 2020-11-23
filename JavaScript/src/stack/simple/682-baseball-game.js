/**
 * @param {string[]} ops
 * @return {number}
 * @result Runtime: 80 ms, faster than 76.77% of JavaScript online submissions for Baseball Game.
 * Memory Usage: 39.1 MB, less than 64.01% of JavaScript online submissions for Baseball Game.
 */
var calPoints = function (ops) {
  const score = [];
  ops.forEach((op) => {
    if (op === 'C') {
      score.pop();
    } else if (op === 'D') {
      score.push(score[score.length - 1] * 2);
    } else if (op === '+') {
      score.push(score[score.length - 1] + score[score.length - 2]);
    } else {
      score.push(Number(op));
    }
  });
  return score.reduce((preval, sum) => preval + sum);
};
module.exports = calPoints;
