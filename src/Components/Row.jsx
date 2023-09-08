import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from 'axios';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = 'http://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results); // Use "results" instead of "result"
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2> {title}</h2>
      

      <div className="row_posters">
        {movies?.map((item) =>
         ( (isLargeRow && item.poster_path) ||
          (!isLargeRow && item.backdrop_path)) && (
            (
            <img
              className={`row_poster ${isLargeRow && "row__posterLarge"}`}
              key={item.id} // Don't forget to add a unique key
              src={`${base_url}${isLargeRow ? item.poster_path : item.backdrop_path
                }`}
              alt={item.name}
            />
          )
          ))}


      </div>


       
    </div>
  );
}

export default Row;
