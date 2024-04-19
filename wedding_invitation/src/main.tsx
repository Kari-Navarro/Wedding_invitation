import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Countdown from './countdown.tsx'
import createMexicoCityDate from './hour.tsx'
import PhotoCarousel from './carousel.tsx'
import GoogleMapsLink from './maps.tsx'
import Header from './header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Countdown weddingDate={createMexicoCityDate()}/>
    <PhotoCarousel/>
    <GoogleMapsLink/>
  </React.StrictMode>,
)
