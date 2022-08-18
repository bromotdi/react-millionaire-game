import React, { useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom"
import classNames from 'classnames'

import QuizItem from '../../components/QuizItem'
import Sidebar from '../../components/Sidebar'
import { QUESTIONS, PREFIXES } from '../../../constants/questions'

const QuizScreen = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const onClick = useCallback((isCorrect) => {
    setDisabled(true)
    setTimeout(() => {
      const questionsCount = QUESTIONS.length - 1
      const nextIndex = questionIndex + 1
      const { sum } = QUESTIONS?.[questionIndex - 1] || { sum: 0 }
      const finalWinSum = questionIndex === questionsCount && isCorrect ? QUESTIONS[questionsCount].sum : sum
      if (!isCorrect || nextIndex >= QUESTIONS.length) return navigate(`/final?sum=${finalWinSum}`)
      console.log(questionIndex, nextIndex)
      setQuestionIndex(nextIndex)
      setDisabled(false)
    }, 0)

  }, [questionIndex])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const { description, answers } = QUESTIONS[questionIndex]

  return (
    <div className="quiz-container">
      <div className="quiz-wrapper">
        <div className="description">{description}</div>
        <div className={classNames('quiz-items', disabled && 'disabled')} key={questionIndex}>
          {answers.map(({ text, isCorrect }, index) => (
            <QuizItem onClick={onClick} key={text} prefix={PREFIXES[index]} text={text} isCorrect={isCorrect} showCorrect={disabled} />
          ))}
        </div>
      </div>
      <div className={classNames('sidebar-container', menuOpen && 'active')}>
        <Sidebar currentIndex={questionIndex}/>
      </div>
      <div className="mobile-menu" onClick={toggleMenu}>{menuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}</div>
    </div>
  );
}

export default QuizScreen;
