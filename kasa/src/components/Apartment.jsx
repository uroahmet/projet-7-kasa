import React from 'react'
import "./Apartment.css"
import  { Link } from "react-router-dom";

function Apartment(props) {
  const state = {
      apartmentId: props.id
  }

  return (
    <Link to ="/flat" state={state}>
    <div className='apartment'>
    <img src={props.imageUrl} alt="" />
        <div className='apartment__subtitle'>{props.title}</div>
        </div>
        </Link>
  )
}

export default Apartment
