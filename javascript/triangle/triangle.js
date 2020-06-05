//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.s1 = side1,
    this.s2 = side2,
    this.s3 = side3,
    this.sidesSet = new Set([this.s1, this.s2, this.s3])
    this.isIsosceles = this.isIsosceles.bind(this)
  }

  isEquilateral() {
    if (!this.isValidTriangle()) return false
    if (!this.s1 || !this.s2 || !this.s3) return false
    return this.sidesSet.size === 1
  }

  isIsosceles() {
    if(!this.isValidTriangle()) return false
    return this.sidesSet.size < 3
  }

  isScalene() {
    if(!this.isValidTriangle()) return false
    return this.sidesSet.size === 3
  }

  isValidTriangle() {
    if (!this.s1 || !this.s2 || !this.s3) return false
    if(this.s1 + this.s2 < this.s3 || this.s1 + this.s3 < this.s2 || this.s2 + this.s3 < this.s1) return false
    return true
  }
}
