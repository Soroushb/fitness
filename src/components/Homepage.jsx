import React, {useState} from 'react'
import { News, SearchMovies, SearchActors } from '../components'


const Homepage = () => {

  const [search, setSearch] = useState("MOVIE")

  return (
    <>
    {search === "MOVIE" && (
          <SearchMovies/>
    )}
    
    {search === "ACTOR" && (
          <SearchActors/>
    )}

    <div>
      <button onClick={() => setSearch("MOVIE")}>movie</button>
      <button onClick={() => setSearch("ACTOR")}>actor</button>
    </div>
    <News simplified/>
    </>
  )
}

export default Homepage