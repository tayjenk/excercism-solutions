//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixInString) {
    this.content = matrixInString
  }

  get rows() {
    return this.mapToArrMatrix(this.content)
  }

  get columns() {
    return this.transpose(this.rows)
  }

  mapToArrMatrix(stringMatrix) {
    return stringMatrix.split("\n").map(stringSet => stringSet.split(" ").map(num => parseInt(num)))
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
