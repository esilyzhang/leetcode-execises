const expect = require('chai').expect;
const addTwoNumbers = require('../../../src/linkedList/medium/2-add-two-numbers');

describe('链表求和', function () {
  describe('测试 addTwoNumbers', function () {
    let convertListNodes;
    before(function () {
      function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
      }
      convertListNodes = function (arr) {
        let curNode = null;
        for (let i = arr.length - 1; i >= 0; i--) {
          curNode = new ListNode(arr[i], curNode);
        }
        return curNode;
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
    it('[2,4,9], [5,6,4,9] 的和为 [7,0,4,0,1]', function () {
      const l1 = convertListNodes([2, 4, 9]);
      const l2 = convertListNodes([5, 6, 4, 9]);

      expect(addTwoNumbers(l1, l2)).to.deep.equal(
        convertListNodes([7, 0, 4, 0, 1])
      );
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
