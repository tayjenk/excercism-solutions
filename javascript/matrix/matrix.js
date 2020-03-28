//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.content = matrixString.split("\n")
  }

  get rows() {
    return this.content.map(numberSet => this.mapToNumber(numberSet))
  }

  get columns() {
    return this.transpose(this.rows)
  }

  mapToNumber(numberString) {
    return numberString.split(" ").map(num => parseInt(num))
  }

  transpose(matrix) {
    const tranposeMatrix = []
    for (let i = 0; i < matrix[0].length; i++) {
      let tRow = matrix.map(matrixRow => matrixRow[i])
      tranposeMatrix.push(tRow)
    }
    return tranposeMatrix
  }
}
