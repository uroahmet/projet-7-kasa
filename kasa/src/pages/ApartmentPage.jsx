import React from 'react'
import "./ApartmentPage.css"
import { DescriptionPanel } from '../components/DescriptionPanel'
import { ImageBanner } from '../components/ImageBanner'
import { ApartmentHeader } from '../components/ApartmentHeader'



export function ApartmentPage() {
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