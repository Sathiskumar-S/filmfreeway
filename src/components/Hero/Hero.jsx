import React from 'react';
import "./Hero.css";
import Button from "../UI/Button.jsx";

const Hero = ({heroData}) => {
  return (
    <div className={"hero"}>
      <div className={"hero-text"}>
        <h1>{heroData.header}</h1>
        <p>{heroData.content} <br/> {heroData.content1}</p>
          <Button name={"Browse Festivals"}/>
      </div>
    </div>
  )
}

export default Hero;