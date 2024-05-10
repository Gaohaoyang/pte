import styles from './index.module.css'
import { wfdData } from '@/constants/wfdData'
import { useWfdControl } from '@/pages/Wfd/store/useWfdControl'
import { useShallow } from 'zustand/react/shallow'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import speak from '@/utils/speak'
// import { getAllSpecificLanguageVoices } from '@/utils/speak'
// import { useVoiceControlPersist } from '@/store/useVoiceControlPersist'

const Wfd = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { currentIndex, setCurrentIndex, setTotal, total } = useWfdControl(
    useShallow((state) => state),
  )

  useEffect(() => {
    const index = Number(id) - 1
    setCurrentIndex(index)
    const timer = setTimeout(() => {
      speak(wfdData[index].sentence)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [id])

  useEffect(() => {
    setTotal(wfdData.length)
    getVoices()
  }, [])

  const getVoices = async () => {
    // if (1 || useVoiceControlPersist.getState().getVoicesList().length === 0) {
    //   const voices = await getAllSpecificLanguageVoices('en-US')
    //   console.log('voices', voices)
    //   useVoiceControlPersist.getState().setVoicesList(voices)
    // }
  }

  return (
    <div className={styles.container}>
      <div>Num {currentIndex + 1}</div>
      <div>{wfdData[currentIndex].sentence}</div>
      <textarea name="" id="" className={styles.textarea}></textarea>
      <div className={styles.row}>
        <button>Submit</button>
        <div>
          <button
            onClick={() => {
              if (currentIndex === 0) {
                navigate(`/Wfd/${wfdData.length}`)
              } else {
                navigate(`/Wfd/${Number(id) - 1}`)
              }
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (currentIndex + 1 >= total) {
                navigate(`/Wfd/1`)
              } else {
                navigate(`/Wfd/${Number(id) + 1}`)
              }
            }}
          >
            Next
          </button>
        </div>
      </div>

      <div>Answer</div>
      <div>
        <div>Your Answer:</div>
        <div>sentence</div>
      </div>
      <div>
        <div>Correct Answer:</div>
        <div>sentence</div>
      </div>
    </div>
  )
}

export default Wfd
