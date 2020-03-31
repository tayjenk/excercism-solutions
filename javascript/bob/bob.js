/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {
  let response = "Whatever."
  switch(!!message) {
    case RegExp(/^\''|^\s+$/).test(message):
      response = "Fine. Be that way!"
      break
    case (message === message.toUpperCase() &&
          RegExp(/[A-Z]\?/).test(message)):
      response = 'Calm down, I know what I\'m doing!'
      break
    case RegExp(/\?$|(\?\s+)$/).test(message):
      response = "Sure."
      break
    case (message === message.toUpperCase() &&
          RegExp(/[A-Z]/).test(message)):
      response = "Whoa, chill out!"
      break
  }
  return response
}
