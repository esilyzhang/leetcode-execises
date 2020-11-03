const expect = require('chai').expect;
const rangeSumBST = require('../../src/simple/range-sum-of-bst');

describe('', function () {
  function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  const insertNode = (node, val) => {
    if (node.val < val) {
      if (node.left === null) {
        node.left = new TreeNode(val);
      } else {
        insertNode(node.left, val);
      }
    } else {
      if (node.right === null) {
        node.right = new TreeNode(val);
      } else {
        insertNode(node.right, val);
      }
    }
  };
  let root;
  const genBst = (array) => {
    array.forEach(val, (index) => {
      if (index) {
        insertNode(root, val);
      } else {
        root = new TreeNode(val);
      }
    });
  };
  it('', function () {});
});
