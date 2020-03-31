/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const isSilent = message => RegExp(/^\''|^\s+$/).test(message)
const isYellingAsking = message => message === message.toUpperCase() && RegExp(/[A-Z]\?/).test(message)
const isAsking = message => RegExp(/\?$|(\?\s+)$/).test(message)
const isYelling = message => message === message.toUpperCase() && RegExp(/[A-Z]/).test(message)


export const hey = message => {
  let response = "Whatever."
  switch (!!message) {
    case isSilent(message):
      response = "Fine. Be that way!"
      break
    case isYellingAsking(message):
      response = "Calm down, I know what I'm doing!"
      break
    case isAsking(message):
      response = "Sure."
      break
    case isYelling(message):
      response = "Whoa, chill out!"
  }
  return response
}


