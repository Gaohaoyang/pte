import styles from './index.module.css'
import { wfdData } from '@/constants/wfdData'
import { useWfdControl } from '@/pages/Wfd/store/useWfdControl'
import { useShallow } from 'zustand/react/shallow'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Wfd = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { currentIndex, setCurrentIndex, setTotal, total } = useWfdControl(
    useShallow((state) => state),
  )

  useEffect(() => {
    console.log('here??')

    setCurrentIndex(Number(id) - 1)
  }, [id])

  useEffect(() => {
    setTotal(wfdData.length)
  }, [])

  console.log('id', id)
  console.log('currentIndex', currentIndex)

  return (
    <div className={styles.container}>
      <div>Num {currentIndex + 1}</div>
      <div>{wfdData[currentIndex].sentence}</div>
      <textarea name="" id="" className={styles.textarea}></textarea>
      <div>Submit</div>
      <div>Answer</div>
      <div>
        <div>Your Answer:</div>
        <div>sentence</div>
      </div>
      <div>
        <div>Correct Answer:</div>
        <div>sentence</div>
      </div>
      <div
        onClick={() => {
          if (currentIndex === 0) {
            navigate(`/Wfd/${wfdData.length}`)
          } else {
            navigate(`/Wfd/${Number(id) - 1}`)
          }
        }}
      >
        Prev
      </div>
      <div
        onClick={() => {
          if (currentIndex + 1 >= total) {
            navigate(`/Wfd/1`)
          } else {
            navigate(`/Wfd/${Number(id) + 1}`)
          }
        }}
      >
        Next
      </div>
    </div>
  )
}

export default Wfd
