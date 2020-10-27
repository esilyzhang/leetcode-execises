/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 * @result Runtime: 156 ms, faster than 42.39% of JavaScript online submissions for Design Parking System.
 * Memory Usage: 46.1 MB, less than 24.57% of JavaScript online submissions for Design Parking System.
 */
var ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (carType === 1) {
    if (this.big) {
      this.big--;
      return true;
    } else {
      return false;
    }
  } else if (carType === 2) {
    if (this.medium) {
      this.medium--;
      return true;
    } else {
      return false;
    }
  } else if (carType === 3) {
    if (this.small) {
      this.small--;
      return true;
    } else {
      return false;
    }
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

module.exports = ParkingSystem;
