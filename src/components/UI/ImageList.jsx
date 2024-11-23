import React from 'react';
import "./ImageList.css";

const ImageList = (props) => {
  return (
    <div className={"image-list"}>
      <div className={"image-list-container"}>
        <div className={"list"}>
          <img src={props.image1} alt="Best Festivals" height={150} width={150}/>
          <img src={props.image2} alt="Best Festivals" height={150} width={150}/>
          <img src={props.image3} alt="Best Festivals" height={150} width={150}/>
          <img src={props.image4} alt="Best Festivals" height={150} width={150}/>
          <img src={props.image5} alt="Best Festivals" height={150} width={150}/>
          <img src={props.image6} alt="Best Festivals" height={150} width={150}/>
        </div>
      </div>
    </div>
  )
}

export default ImageList