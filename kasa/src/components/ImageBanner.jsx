import React from 'react'
import "./ImageBanner.css"

export function ImageBanner(props) {
  return (
    <div className='image__banner'>
    <img src={props.imageUrl} alt="" />
  </div>
  )
}

export default ImageBanner
