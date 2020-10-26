const expect = require("chai").expect;
const defangIPaddr = require("../src/simple/define-an-ip-address");

describe("将 IP 修改成特定格式", function () {
  it("1.1.1.1 修改后为 1[.]1[.]1[.]1", function () {
    const address = "1.1.1.1";
    const result = "1[.]1[.]1[.]1";

    expect(defangIPaddr(address)).to.be.equal(result);
  });

  it("255.100.50.0 修改后为 255[.]100[.]50[.]0", function () {
    const address = "255.100.50.0";
    const result = "255[.]100[.]50[.]0";

    expect(defangIPaddr(address)).to.be.equal(result);
  });
});
