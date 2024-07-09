import React from "react"
import "./ApartmentDescription.css"

export function ApartmentDescription() {
    return (
        <div className='apartment__description'>
        <p className='description__header'>
            <span>Description</span>
            <i className="fa-sharp fa solid fa-chevron-up"></i>
            </p>
        <p className='description__content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia dicta minus,
            reiciendis vero aliquid maiores fuga perferendis praesentium doloremque, eos consectetur aut laborum,
            maxime consequuntur fugiat! Tempore perspiciatis dicta voluptate!</p>
    </div>
  )
}