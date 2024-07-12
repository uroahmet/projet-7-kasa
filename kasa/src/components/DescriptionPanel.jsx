import React, { useState } from "react";
import "./DescriptionPanel.css";

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content";
  const chevronClass = (isContentVisible ? "rotate-up" : "rotate-down") + " fas fa-chevron-down";

  let content;
  if (typeof props.content === "string") {
    content = <p className={contentClass}>{props.content}</p>;
  } else {

    content = (
      <div className={contentClass}>
        {props.content}
      </div>
    );
  }

  return (
    <div className="description__panel">
      <p className="description__header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      {content}
    </div>
  );
}
