type CompareResultInput = {
  word: string
  correct: boolean
}

export type CompareResult = {
  answer: string
  inputOriginal: string
  inputCompared: Array<CompareResultInput>
  total: number
  correct: number
}
export const compareWfd = (answer: string, input: string) => {
  const res: CompareResult = {
    answer,
    inputOriginal: input,
    inputCompared: [],
    total: 0,
    correct: 0,
  }

  // remove comma and full stop
  const answerWithoutComma = answer.replace(/[,.]/g, '')
  const inputWithoutComma = input.replace(/[,.]/g, '')

  console.log('answer', answer)
  console.log('input', input)

  console.log('answerWithoutComma', answerWithoutComma)
  console.log('inputWithoutComma', inputWithoutComma)

  const answerArr = answerWithoutComma.split(' ')
  const inputArr = inputWithoutComma.split(' ')

  console.log('answerArr', answerArr)
  console.log('inputArr', inputArr)

  res.total = answerArr.length

  const inputCompared: Array<CompareResultInput> = []
  for (let i = 0; i < inputArr.length; i++) {
    if (answerArr.indexOf(inputArr[i]) !== -1) {
      answerArr.splice(answerArr.indexOf(inputArr[i]), 1)
      res.correct++
      inputCompared.push({
        word: i === inputArr.length - 1 ? inputArr[i] : inputArr[i] + ' ',
        correct: true,
      })
    } else {
      inputCompared.push({
        word: i === inputArr.length - 1 ? inputArr[i] : inputArr[i] + ' ',
        correct: false,
      })
    }
  }

  if (input.endsWith('.') && answer.endsWith('.')) {
    inputCompared.push({
      word: '.',
      correct: true,
    })
  }

  res.inputCompared = inputCompared
  console.log(res)
  return res
}
