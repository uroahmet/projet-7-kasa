import React, { useState } from "react";
import "./DescriptionPanel.css";

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content";
  const chevronClass = (isContentVisible ? "rotate-up" : "rotate-down") + " fas fa-chevron-down";

  return (
    <div className="description__panel">
      <p className="description__header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}
