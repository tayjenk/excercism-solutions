//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  // let reversedStr = ""
  // for(let char of str) {
  //   reversedStr = char + reversedStr
  //   console.log({reversedStr})
  // }
  // return reversedStr
  return str.split("").reverse().join("")
};
