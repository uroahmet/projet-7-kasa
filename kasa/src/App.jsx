import React from 'react'
import "./App.css"
import Banner from './components/Banner.jsx'
import ApartmentGrid from './components/ApartmentGrid.jsx'
import Main from "./components/Main.jsx"

function App() {
  return (
    <div>
      <Main> {/* Conteneur pour Banner et ApartmentGrid*/}
    <Banner />
    <ApartmentGrid />
      </Main>
    </div>
  )
}

export default App
