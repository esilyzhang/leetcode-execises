const expect = require('chai').expect;
const decompressRLElist = require('../../src/simple/decompress-run-length-encode-list.js');

describe('解压缩加密的列表', function () {
  it('[1, 2, 3, 4] 解压缩后为 [2, 4, 4, 4]', function () {
    const nums = [1, 2, 3, 4];
    const result = [2, 4, 4, 4];

    expect(decompressRLElist(nums)).to.be.deep.equal(result);
  });

  it('[1, 1, 2, 3] 解压缩后为 [1,3,3]', function () {
    const nums = [1, 1, 2, 3];
    const result = [1, 3, 3];

    expect(decompressRLElist(nums)).to.be.deep.equal(result);
  });
});
