/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const isSilent = message => RegExp(/^\''|^\s+$/).test(message)
const isYellingAsking = message => message === message.toUpperCase() && RegExp(/[A-Z]\?/).test(message)
const isAsking = message => RegExp(/(\?\s*)$/).test(message)
const isYelling = message => message === message.toUpperCase() && RegExp(/[A-Z]/).test(message)


export const hey = message => {
  switch (!!message) {
    case isSilent(message):
      return "Fine. Be that way!"
    case isYellingAsking(message):
      return "Calm down, I know what I'm doing!"
    case isAsking(message):
      return "Sure."
    case isYelling(message):
      return "Whoa, chill out!"
    default:
      return "Whatever."
  }
}


