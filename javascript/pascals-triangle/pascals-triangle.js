//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
2 rows
[1] [1, 1]

3 rows
[1] [1, 1] [1, ]
     0  1   0 1 2
4 rows
[1] [1, 1] [1, 2, 1] [1, 3, 3, 1]
*/

export const rows = (numOfRows) => {
  const triangle = []
  if (!numOfRows) return triangle
  triangle.push([1])
  //let i = 1
  // (i < numOfRows)
  for (let i = 1; i < numOfRows; i++) {
    const prevRow = triangle[triangle.length - 1],
      newRow = []
    prevRow.forEach((el, idx) => {
      prevRow[idx - 1] ? newRow.push(prevRow[idx - 1] + el) : newRow.push(el)
    })
    newRow.push(1)
    triangle.push(newRow)
  }
  return triangle
}
