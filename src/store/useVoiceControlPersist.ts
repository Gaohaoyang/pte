import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type State = {
  voicesListStr: string
}
type Actions = {
  setVoicesList: (voicesList: SpeechSynthesisVoice[]) => void
  getVoicesList: () => SpeechSynthesisVoice[]
  reset: () => void
}

const initialState: State = {
  voicesListStr: '',
}

export const useVoiceControlPersist = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,
      setVoicesList: (voicesList: SpeechSynthesisVoice[]) => {
        console.log('setVoicesList', voicesList)
        console.log('str', JSON.stringify(voicesList))
        console.log('setVoicesList 0', voicesList[0].lang)
        console.log('str 0', JSON.stringify({...voicesList[0]}))
        set({ voicesListStr: JSON.stringify(voicesList) })
      },
      getVoicesList: () => {
        const voicesListStr = get().voicesListStr
        if (voicesListStr) {
          return JSON.parse(voicesListStr)
        }
        return []
      },
      reset: () => set({ ...initialState }),
    }),
    {
      name: 'useVoiceControlPersist',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
