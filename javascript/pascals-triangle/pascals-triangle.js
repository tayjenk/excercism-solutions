//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
2 rows
[1] [1, 1]

3 rows
[1] [1, 1] [1, ]
            0 1 2
4 rows
[1] [1, 1] [1, 2, 1] [1, 3, 3, 1]
*/

export const rows = numOfRows => {
  const triangle = []
  let i = 1;
  while(i <= numOfRows) {
    if(!triangle.length) triangle.push([1])

    i++
  }
  return triangle
};
