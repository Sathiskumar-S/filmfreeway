import React from 'react';
import "./Reviews.css";
import images from "../../assets/img/index.js";
import Button from "./Button.jsx";

const Reviews = () => {
  return (
    <div>
      <img src={images.reviews_background} alt="images" className={"review-bg"}/>
      <h3 className={"review-title"}>Happy Filmmakers,<br/> Happy Festivals</h3>
        <div className={"card card-component"}>
            <h4>"FilmFreeway has established itself as the industry standard in festival submissions."</h4>
            <p>Adam Montgomery, Senior Manager Programming</p>
            <p className={"text-green"}>Sundance Film Festival</p>
        </div>
        <div className={"card-1 card-component"}>
            <h4>"FilmFreeway is where filmmakers go to discover and enter film festivals."</h4>
            <p>Cameron Bailey, Artistic Director & Co-Head</p>
            <p className={"text-green"}>Toronto International Film Festival</p>
        </div>
        <div className={"review-btn"}>
            <Button name={"Read Reviews"}/>
        </div>
    </div>
  )
}

export default Reviews