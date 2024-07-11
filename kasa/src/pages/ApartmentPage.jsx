import React from 'react'
import "./ApartmentPage.css"
import { DescriptionPanel } from '../components/DescriptionPanel'
import { ImageBanner } from '../components/ImageBanner'
import { ApartmentHeader } from '../components/ApartmentHeader'
import { useLocation, useParams } from 'react-router-dom'



export function ApartmentPage() {
  const location = useLocation()
  console.log("location", location)
  console.log("apartment id is:", location.state.apartmentId)
  return (
    <div className='apartment-page'>
        <ImageBanner />
        <ApartmentHeader />
    <div className='apartment__description__area'>
    <DescriptionPanel />
    <DescriptionPanel />
    </div>
    </div>
  )
}

export default ApartmentPage