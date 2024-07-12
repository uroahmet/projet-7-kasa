import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ImageBanner.css";

export function ImageBanner({ pictures = [] }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    return i === currentPicture ? "show" : "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    setCurrentPicture(newCurrentPicture < 0 ? pictures.length - 1 : newCurrentPicture);
  };

  const arePicturesAvailable = () => {
    return pictures.length > 0;
  };

  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src="about.jpg" className="show" alt="default" />;
    }
    return pictures.map((pic, i) => (
      <img key={i} src={pic} alt={`slide ${i + 1}`} className={getClassName(i)} />
    ));
  };

  let arrowLeft, arrowRight, countImage;

  if (pictures.length > 1) {
    arrowLeft = (
      <button className="btn btn-previous" onClick={moveToPrevious}>
        <i className="fas fa-chevron-left"></i>
      </button>
    );

    arrowRight = (
      <button className="btn btn-next" onClick={moveToNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    );

    countImage = (
      <span className="slide-counter">
        {currentPicture + 1} / {pictures.length}
      </span>
    );
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

ImageBanner.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string)
};
