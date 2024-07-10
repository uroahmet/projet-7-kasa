import React, { useEffect, useState } from 'react'
import "./ApartmentGrid.css"
import Apartment from "./Apartment.jsx"

function ApartmentGrid() {
    const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
  fetch("logements.json")
  .then ((res) => res.json ())
  .then ((res) => setApartments(res))
  }

  return (
    <div className="grid">
        {apartments.map((apartment) => (
          <Apartment title={apartment.title} imageUrl={apartment.cover} />
        ))}
        </div>
  )
}
export default ApartmentGrid
