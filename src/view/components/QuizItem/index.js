import React, { memo, useState } from 'react'
import classNames from 'classnames'

const QuizItem = ({ text, prefix, isCorrect, small, additionClassName, onClick, showCorrect }) => {
  const [wrong, setWrong] = useState(false)
  const [correct, setCorrect] = useState(false)

  const onClickHandler = () => {
    isCorrect ? setCorrect(true) : setWrong(true)
    onClick(isCorrect)
  }

  const correctShown = correct || (showCorrect && isCorrect)
  const classess = classNames('quiz-item-wrapper', small && 'small', correctShown && 'correct', wrong && 'wrong', additionClassName)

  return (
    <div onClick={onClickHandler} className={classess}>
      <div className="devider" />
    <div className="quiz-item">
      <div className="hex-before" />
      <div className="hex-center">
      {prefix && <span className="prefix">{prefix}</span>}
      <span className="text">{text}</span>
      </div>
      <div className="hex-after" />
    </div>
    </div>
  )
}

export default memo(QuizItem)
