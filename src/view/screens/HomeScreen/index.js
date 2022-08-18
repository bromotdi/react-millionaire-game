import React from 'react';

import IMAGES from '../../../assets'
import Button from '../../components/Button'
import { Link } from "react-router-dom";

const TEXT = {
  title: 'Who wants to be a millionaire?',
  start: 'Start'
}

const HomeScreen = () => {
  return (
    <div className="home-page-wrapper">
      <img className="home-image" src={IMAGES.hand} alt="hand" />
      <div className="start-container">
        <div className="start-title">{TEXT.title}</div>
        <Link to="/quiz">
        <Button text={TEXT.start} />
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
