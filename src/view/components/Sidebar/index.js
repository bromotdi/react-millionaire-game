import React, { useMemo } from 'react'

import { QUESTIONS } from '../../../constants/questions'
import QuizItem from "../QuizItem";

const getClassName = (currentIndex, itemIndex) => {
  const revertIndex = (currentIndex - QUESTIONS.length + 1) * -1
  return revertIndex === itemIndex ? 'result-active' : revertIndex > itemIndex ? 'result-common' : 'result-inactive'
}

const Sidebar = ({ currentIndex }) => {
  const questions = useMemo(() => [...QUESTIONS].sort((a, b) => b.sum - a.sum), [])

  return (
    <div className="sidebar-wrapper">
      {questions.map(({ sum }, index) => <QuizItem small key={sum} text={`$${sum}`} additionClassName={getClassName(currentIndex, index)} />)}
    </div>
  )
}

export default Sidebar
