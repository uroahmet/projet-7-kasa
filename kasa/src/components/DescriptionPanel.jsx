import React from "react"
import "./DescriptionPanel.css"

export function DescriptionPanel(props) {
    return (
        <div className='description__panel'>
        <p className='description__header'>
            <span>{props.title}</span>
            <i className="fa-sharp fa solid fa-chevron-up"></i>
            </p>
        <p className='description__content'>{props.content}</p>
    </div>
  )
}