//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.splitMatrix = matrixString.split('\n')
  }

  get rows() {
    return this.splitMatrix.map(matrixRow => matrixRow.split(' ').map(matrixPt => parseInt(matrixPt)))
  }

  get columns() {
    const matrixByRow = this.rows
    const columnMatrix = []
    const LENGTH = Math.max(matrixByRow.length, matrixByRow[0].length)
    let i = 0
    while(i < LENGTH) {
      let column = matrixByRow.map(row => row[i])
      columnMatrix.push(column)
      i++
    }
    return columnMatrix
  }
}
