import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Countdown from './countdown.tsx'
import createMexicoCityDate from './hour.tsx'
import PhotoCarousel from './carousel.tsx'
import GoogleMapsLink from './maps.tsx'
import Header from './header.tsx'
import Phrase from './phrase.tsx'
import Date from './date.tsx'
import Assistance from './confirm.tsx'
import Itinerary from './itinerary.tsx'
import Whats from './whats.tsx'
import Audio from './audio.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Audio/>
    <PhotoCarousel/>
    <Phrase/>
    <Date/>
    <Countdown weddingDate={createMexicoCityDate()}/>
    <Itinerary/>
    <GoogleMapsLink/>
    <Assistance/>
    <Whats/>

  </React.StrictMode>,
)
