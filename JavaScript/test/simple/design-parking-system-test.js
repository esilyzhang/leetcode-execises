const expect = require('chai').expect;
const ParkingSystem = require('../../src/simple/design-parking-system');

describe('停车场的设计', function () {
  it('1,1,0 的停车场对于 1,2,3,1 的停车结果为 true,true,false,false', function () {
    let parkingSystem = new ParkingSystem(1, 1, 0);

    expect(parkingSystem.addCar(1)).to.be.true;
    expect(parkingSystem.addCar(2)).to.be.true;
    expect(parkingSystem.addCar(3)).to.be.false;
    expect(parkingSystem.addCar(1)).to.be.false;
  });
});
