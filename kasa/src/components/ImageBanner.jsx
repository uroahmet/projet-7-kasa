import React, { useState } from "react";
import "./ImageBanner.css";

export function ImageBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src="about.jpg" className="show" alt="" />;
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  };

  let arrowLeft;
  let arrowRight;
  let countImage;

  if (pictures.length > 1) {
    arrowLeft = <button className="btn btn-previous" onClick={moveToPrevious}>
                  <i className="fas fa-chevron-left"></i>
                </button>;
  
    arrowRight =  <button className="btn btn-next" onClick={moveToNext}>
                  <i className="fas fa-chevron-right"></i>
                </button>;
 
    countImage = <span className="slide-counter">
                  {currentPicture + 1} / {pictures.length}
                </span> ;
   } 
   

  return (
    <div className="image__banner">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {arePicturesAvailable() && (
        <>
          {arrowLeft}
          {countImage}
          {arrowRight}
        </>
      )}
    </div>
  );
}