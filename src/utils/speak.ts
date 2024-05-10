export const getAllSpecificLanguageVoices = async (language: string) => {
  const voices = await getVoices()
  return voices.filter((voice) => voice.lang.includes(language))
}

const getVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise(function (resolve) {
    const synth = window.speechSynthesis
    const id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices())
        clearInterval(id)
      }
    }, 10)
  })
}

const speak = (text: string) => {
  const synth = window.speechSynthesis
  const utterance = new SpeechSynthesisUtterance(text)
  // utterance.lang = 'zh-CN'
  synth.speak(utterance)
}
export default speak
