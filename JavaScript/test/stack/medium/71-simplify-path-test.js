const expect = require('chai').expect
const simplifyPath = require('../../../src/stack/medium/71-simplify-path')

describe('简化路径', function () {
  it('/home/ 的简化路径为 /home', function () {
    const path = '/home/'
    const result = '/home'

    expect(simplifyPath(path)).to.be.equal(result)
  })
  it('/home/ 的简化路径为 /home', function () {
    const path = '/home/.'
    const result = '/home'

    expect(simplifyPath(path)).to.be.equal(result)
  })
  it('/home/ 的简化路径为 /', function () {
    const path = '/home/..'
    const result = '/'

    expect(simplifyPath(path)).to.be.equal(result)
  })
  it('/ 的简化路径为 /', function () {
    const path = '/'
    const result = '/'

    expect(simplifyPath(path)).to.be.equal(result)
  })
  it('/a 的简化路径为 /a', function () {
    const path = '/a'
    const result = '/a'

    expect(simplifyPath(path)).to.be.equal(result)
  })
  it('/../ 的简化路径为 /', function () {
    const path = '/../'
    const result = '/'

    expect(simplifyPath(path)).to.be.equal(result)
  })
  it('/home//foo/ 的简化路径为 /home/foo', function () {
    const path = '/home//foo/'
    const result = '/home/foo'

    expect(simplifyPath(path)).to.be.equal(result)
  })
  it('/a/./b/../../c/ 的简化路径为 /c', function () {
    const path = '/a/./b/../../c/'
    const result = '/c'

    expect(simplifyPath(path)).to.be.equal(result)
  })
  it('/a/b/c 的简化路径为 /a/b/c ', function () {
    const path = '/a/b/c'
    const result = '/a/b/c'

    expect(simplifyPath(path)).to.be.equal(result)
  })
  it('/a/b/c/// 的简化路径为 /a/b/c ', function () {
    const path = '/a/b/c///'
    const result = '/a/b/c'

    expect(simplifyPath(path)).to.be.equal(result)
  })
  it('/a/b/../../../../../c 的简化路径为 /c ', function () {
    const path = '/a/b/../../../../../c'
    const result = '/c'

    expect(simplifyPath(path)).to.be.equal(result)
  })
  it('/a/b/../../../.././c 的简化路径为 /c ', function () {
    const path = '/a/b/../../../.././c'
    const result = '/c'

    expect(simplifyPath(path)).to.be.equal(result)
  })
})
