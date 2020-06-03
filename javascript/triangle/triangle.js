//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1,
    this.side2 = side2,
    this.side3 = side3
  }

  isEquilateral() {
    return side1 === side2 && side2 === side3
  }

  isIsosceles() {
    throw new Error("Remove this statement and implement this function");
  }

  isScalene() {
    throw new Error("Remove this statement and implement this function");
  }
}
