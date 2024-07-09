import React from 'react'
import "./ApartmentPage.css"

function ApartmentPage() {
  return (
    <div className='apartment-page'>
      <div>
        <img src="https://picsum.photos/800/400" alt="" />
      </div>
      <div className='apartment-page__title'>
      <h1>Crazy loft on Canal Saint Martin</h1>
      <h2>Paris, Ile de France</h2>
      <div className='apartment__tags'>
        <span>Cozy</span>
        <span>Canal</span>
        <span>Paris 10</span>
      </div>
      </div>
      <div className='apartment__owner'>
        <h3>Alexandre Dumas</h3>
        <div className='apartment__owner__badge'></div>
        <div className='apartment__owner__stars'>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    </div>
    <div className='apartment__description'>
        <p>Description</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia dicta minus,
            reiciendis vero aliquid maiores fuga perferendis praesentium doloremque, eos consectetur aut laborum,
            maxime consequuntur fugiat! Tempore perspiciatis dicta voluptate!</p>
    </div>
    </div>
  )
}

export default ApartmentPage
