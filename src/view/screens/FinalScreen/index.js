import React from 'react';

import IMAGES from '../../../assets'
import Button from '../../components/Button'
import { Link, useLocation } from "react-router-dom";

const TEXT = {
  title: 'Total score:',
  earned: 'earned',
  tryAgain: 'Try again'
}

const FinalScreen = () => {
  const { search } = useLocation()

  const sum = new URLSearchParams(search).get('sum')

  console.log("search", sum)
  return (
    <div className="final-page-wrapper">
      <img className="final-image" src={IMAGES.hand} alt="hand" />
      <div className="final-container">
        <div className="final-descr">{TEXT.title}</div>
        <div className="final-title">${sum} {TEXT.earned}</div>
        <Link to="/">
          <Button text={TEXT.tryAgain} />
        </Link>
      </div>
    </div>
  );
}

export default FinalScreen;
