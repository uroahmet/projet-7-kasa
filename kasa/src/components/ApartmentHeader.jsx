import React from 'react'
import "./ApartmentHeader.css"

export function ApartmentHeader({ flat }) {
  const { name } = flat.host
  const [firstName, lastName] = name.split (" ")

  return (
    <div className='apartment__header'>
      <div className='apartment__title'>
      <h1>{flat.title}</h1>
      <h2>{flat.location}</h2>
      <div className='apartment__tags'>
       {flat.tags.map((tag) => (
          <span key={tag}>{tag}</span>
          ))}
      </div>
      </div>
      <div className='apartment__owner'>
      <div className='apartment__owner__details'>
        <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
        </h3>
        <div className='apartment__owner__badge'></div>
        <img src={flat.host.picture} alt="" />
        </div>
        <div className='apartment__owner__stars'>
           {[1, 2, 3, 4, 5].map((num)=> ( // Aray de 5 et pour chaque numéro = span par défaut donc vide mais si rating >= au num actuel alors "on"
            <span key={num} className={flat.rating >= num ? "on" : ""}>★</span>
            ))}
      </div>
    </div>
    </div>
  )
}

export default ApartmentHeader
