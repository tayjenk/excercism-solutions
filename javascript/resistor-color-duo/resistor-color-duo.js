//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorArr) => {
  let color1 = colorArr[0].toLowerCase()
  let color2 = colorArr[1].toLowerCase()
  if (COLORS[color1] && COLORS[color2]) {
    return parseInt(COLORS[color1] + COLORS[color2])
  }
  return -1

};

const COLORS = {
 "black" : "0",
  "brown" : "1",
  "red": "2",
  "orange": "3",
  "yellow": "4",
  "green": "5",
  "blue": "6",
  "violet": "7",
  "grey": "8",
  "white": "9"
}
