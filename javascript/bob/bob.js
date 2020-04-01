/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isSilent = message => {if(message === '') return !!message}
const isYellingAsking = message => message === message.toUpperCase() && RegExp(/[A-Z]\?/).test(message)
const isAsking = message => message.endsWith("?")
const isYelling = message => message === message.toUpperCase() && RegExp(/[A-Z]/).test(message)


export const hey = message => {
  const messageTrim = message.trim()
  switch (!!messageTrim) {
    case isSilent(messageTrim):
      return "Fine. Be that way!"
    case isYellingAsking(messageTrim):
      return "Calm down, I know what I'm doing!"
    case isAsking(messageTrim):
      return "Sure."
    case isYelling(messageTrim):
      return "Whoa, chill out!"
    default:
      return "Whatever."
  }
}


