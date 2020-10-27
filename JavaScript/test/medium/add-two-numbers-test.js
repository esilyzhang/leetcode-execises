const expect = require('chai').expect;
const addTwoNumbers = require('../../src/medium/add-two-numbers');

describe('链表求和', function () {
  describe('测试 addTwoNumbers', function () {
    let convertListNodes;
    before(function () {
      function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
      }
      convertListNodes = function (arr) {
        let nextNode, curNode, firstNode;
        if (arr.length === 1) {
          return new ListNode(arr[0], null);
        }
        for (let i = 0; i < arr.length - 1; i++) {
          if (i === 0) {
            firstNode = new ListNode(arr[i], null);
            curNode = firstNode;
          } else {
            curNode.val = arr[i];
          }
          nextNode = new ListNode(0, null);
          curNode.next = nextNode;
          curNode = nextNode;
        }
        curNode.val = arr[arr.length - 1];
        return firstNode;
      };
    });
    it('[9,9,9,9,9,9,9], [9,9,9,9] 的和为 [8,9,9,9,0,0,0,1]', function () {
      const l1 = convertListNodes([9, 9, 9, 9, 9, 9, 9]);
      const l2 = convertListNodes([9, 9, 9, 9]);

      expect(addTwoNumbers(l1, l2)).to.deep.equal(
        convertListNodes([8, 9, 9, 9, 0, 0, 0, 1])
      );
    });
    it('[2,4,3], [5,6,4] 的和为 [7, 0, 8]', function () {
      const l1 = convertListNodes([2, 4, 3]);
      const l2 = convertListNodes([5, 6, 4]);

      expect(addTwoNumbers(l1, l2)).to.deep.equal(convertListNodes([7, 0, 8]));
    });

    it('[7,9,3,2,4,3], [4,1,3,6,4] 的和为 [1, 1, 7, 8, 8, 3]', function () {
      const l1 = convertListNodes([7, 9, 3, 2, 4, 3]);
      const l2 = convertListNodes([4, 1, 3, 6, 4]);

      expect(addTwoNumbers(l1, l2)).to.deep.equal(
        convertListNodes([1, 1, 7, 8, 8, 3])
      );
    });
    it('[0], [0] 的和为 [0]', function () {
      const l1 = convertListNodes([0]);
      const l2 = convertListNodes([0]);

      expect(addTwoNumbers(l1, l2)).to.deep.equal(convertListNodes([0]));
    });
    it('[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5, 6, 4] 的和为 [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]', function () {
      const l1 = convertListNodes([
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
      ]);
      const l2 = convertListNodes([5, 6, 4]);

      expect(addTwoNumbers(l1, l2)).to.deep.equal(
        convertListNodes([
          6,
          6,
          4,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
        ])
      );
    });
  });
});
