//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.input = string.split('\n')
  }

  get rows() {
    const array = this.input
    const rowMatrix = []
    array.forEach(string => {
      let row = string.split(' ').map(char => parseInt(char))
      rowMatrix.push(row)
    })
    return rowMatrix
  }

  get columns() {
    const array = this.rows
    let columnMatrix = []
    let i = 0
    while(i < Math.max(array.length, array[0].length)) {
      let column = array.map(row => row[i])
      columnMatrix.push(column)
      i++
    }
    return columnMatrix
  }
}
