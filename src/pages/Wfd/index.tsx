import styles from './index.module.css'
import { wfdData } from '@/constants/wfdData'
// import { useWfdControl } from '@/pages/wfd/store/useWfdControl'
// import { useShallow } from 'zustand/react/shallow'
import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import speak from '@/utils/speak'
import { compareWfd, CompareResult } from '@/utils/compareWfd'
// import { getAllSpecificLanguageVoices } from '@/utils/speak'
// import { useVoiceControlPersist } from '@/store/useVoiceControlPersist'

const Wfd = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [compareResult, setCompareResult] = useState<CompareResult>()
  const [inputText, setInputText] = useState('')
  const inputTextRef = useRef('')

  // const {
  //   // currentIndex,
  //   // setCurrentIndex,
  //   // setTotal,
  //   // reset,
  // } = useWfdControl(useShallow((state) => state))

  useEffect(() => {
    // reset()
    setCompareResult(undefined)
    setInputText('')
    inputTextRef.current = ''

    const index = Number(id) - 1
    // setCurrentIndex(index)
    const timer = setTimeout(() => {
      speak(wfdData[index].sentence)
    }, 800)
    return () => {
      clearTimeout(timer)
    }
  }, [id])

  useEffect(() => {
    // setTotal(wfdData.length)
    getVoices()
  }, [])

  const getVoices = async () => {
    // if (1 || useVoiceControlPersist.getState().getVoicesList().length === 0) {
    //   const voices = await getAllSpecificLanguageVoices('en-US')
    //   console.log('voices', voices)
    //   useVoiceControlPersist.getState().setVoicesList(voices)
    // }
  }

  useEffect(() => {
    console.log(inputText)
    inputTextRef.current = inputText
  }, [inputText])

  const handleSubmit = () => {
    console.log('inputTextRef.current', inputTextRef.current)
    setCompareResult(compareWfd(wfdData[Number(id) - 1].sentence, inputTextRef.current))
  }

  return (
    <div className={styles.container}>
      <div>Num {id}</div>
      {/* <div>{wfdData[currentIndex].sentence}</div> */}
      <textarea
        name=""
        id=""
        className={styles.textarea}
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      ></textarea>
      <div className={styles.row}>
        <button onClick={handleSubmit}>Submit</button>
        <div>
          <button
            style={{
              marginRight: '10px',
            }}
            onClick={() => {
              if (Number(id) === 1) {
                navigate(`/wfd/${wfdData.length}`)
              } else {
                navigate(`/wfd/${Number(id) - 1}`)
              }
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (Number(id) >= wfdData.length) {
                navigate(`/wfd/1`)
              } else {
                navigate(`/wfd/${Number(id) + 1}`)
              }
            }}
          >
            Next
          </button>
        </div>
      </div>

      {compareResult && (
        <>
          <div className={styles.compareResult}>
            <div className={styles.answerRow}>
              <div className={styles.col1}>Answer: </div>
              <div>{compareResult?.answer}</div>
            </div>
            <div className={styles.answerRow}>
              <div className={styles.col1}>Input: </div>
              <div className={styles.inputComparedRow}>
                {compareResult?.inputCompared.map((item, index) => (
                  <span
                    key={index}
                    style={{
                      color: item.correct ? 'green' : '#333',
                    }}
                  >
                    {item.word}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.answerRow}>
            <div className={styles.col1}>Overall:</div>
            <div className={styles.inputCompareRow}>
              {compareResult?.correct}/{compareResult?.total}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Wfd
