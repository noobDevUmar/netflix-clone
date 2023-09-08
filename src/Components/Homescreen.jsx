import React from 'react'
import "./Homescreen.css"
import Row from './Row'
import Nav from './Nav'
import Banner from './Banner'
import requests from './request'

function Homescreen() {
  return (
    <div className='homescreen'>
     {/* Nav */}
        <Nav/>
        

     {/* Banner */}
    <Banner/>

     {/* Rows */}
     <Row title='NETFLIX ORIGINALS'
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow
     />


<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMoviesg} />
<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />



      </div>
  )
}

export default Homescreen