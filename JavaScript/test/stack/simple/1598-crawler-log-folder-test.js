const expect = require('chai').expect
const minOperations = require('../../../src/stack/simple/1598-crawler-log-folder')

describe('日志文件目录返回主目录的最少步骤数', function () {
  it('d1/->d2->../->d21->./ 返回主目录需要 2 步', function () {
    const logs = ['d1/', 'd2/', '../', 'd21/', './']
    const result = 2
    expect(minOperations(logs)).to.be.equal(result)
  })
  it('d1/->d2/->./->d3/->../->d31 返回主目录需要 3 步', function () {
    const logs = ['d1/', 'd2/', './', 'd3/', '../', 'd31/']
    const result = 3
    expect(minOperations(logs)).to.be.equal(result)
  })
  it('d1/->../->../->../ 返回主目录需要 0 步', function () {
    const logs = ['d1/', '../', '../', '../']
    const result = 0
    expect(minOperations(logs)).to.be.equal(result)
  })
})
