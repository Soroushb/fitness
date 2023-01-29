import React from 'react'
import { News, SearchMovies, SearchActors } from '../components'


const Homepage = () => {

  return (
    <>
    <SearchMovies/>
    <SearchActors/>
    <News simplified/>
    </>
  )
}

export default Homepage