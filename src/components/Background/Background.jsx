import React from 'react';
import "./Background.css";

const Background = ({name}) => {
  return (
    <div>
      <img src={name} alt="Background" className={"background"} />
    </div>
  )
}

export default Background;