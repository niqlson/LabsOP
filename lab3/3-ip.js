'use strict'

const func = (ip) => {
  let answer = 0
  const numbers = ip.split('.')
  for (let i = 0; i < numbers.length; i++) {
      answer = answer << 8
      answer += Number(numbers[i])
  }
  return answer
}
console.log(func('127.0.0.1'))
