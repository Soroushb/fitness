import React, {useState} from 'react'
import { News, SearchMovies, SearchActors } from '../components'
import {BiSolidLeftArrow, BiSolidRightArrow} from 'react-icons/bi'


const Homepage = () => {

  const [search, setSearch] = useState("MOVIE")

  return (
    <>

    <div className='arrow-container'>
      <div className={`${search === "MOVIE" ? "active" : ""}`}>
        <BiSolidLeftArrow onClick={() => setSearch("MOVIE")}/>
      </div>
      <div className={`${search === "ACTOR" ? "active" : ""}`}>
        <BiSolidRightArrow onClick={() => setSearch("ACTOR")}/>
      </div>
    </div>

    {search === "MOVIE" && (
          <SearchMovies/>
    )}
    
    {search === "ACTOR" && (
          <SearchActors/>
    )}

   
    <News simplified/>
    </>
  )
}

export default Homepage