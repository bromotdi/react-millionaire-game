import React, { memo } from 'react'

const Button = ({ text }) => {

  return (
    <div className="button">{text}</div>
  )
}

export default memo(Button)
