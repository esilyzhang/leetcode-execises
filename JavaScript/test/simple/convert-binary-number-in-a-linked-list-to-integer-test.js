const expect = require('chai').expect;
const getDecimalValue = require('../../src/simple/convert-binary-number-in-a-linked-list-to-integer');

describe('数组格式的二进制转化为十进制数', function () {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  const convertListNodes = function (arr) {
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
  it('[1, 0, 1] 得到的十进制数为 5', function () {
    const head = convertListNodes([1, 0, 1]);
    const result = 5;

    expect(getDecimalValue(head)).to.be.equal(result);
  });

  it('[0] 得到的十进制数为 0', function () {
    const head = convertListNodes([0]);
    const result = 0;

    expect(getDecimalValue(head)).to.be.equal(result);
  });

  it('[1] 得到的十进制数为 1', function () {
    const head = convertListNodes([1]);
    const result = 1;

    expect(getDecimalValue(head)).to.be.equal(result);
  });

  it('[1,0,0,1,0,0,1,1,1,0,0,0,0,0,0] 得到的十进制数为 18880', function () {
    const head = convertListNodes([
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
    ]);
    const result = 18880;

    expect(getDecimalValue(head)).to.be.equal(result);
  });
  it('[0,0] 得到的十进制数为 5', function () {
    const head = convertListNodes([0, 0]);
    const result = 0;

    expect(getDecimalValue(head)).to.be.equal(result);
  });
});
