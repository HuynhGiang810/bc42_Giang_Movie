import React from 'react'
import MoviesInfo from './MoviesInfo/MoviesInfo'
import MoviesShowtime from './MoviesShowtime/MoviesShowtime'
import { useParams } from 'react-router-dom'

function MoviesDetail() {
  const { moviesId } = useParams();
  console.log(moviesId);
  return (
    <>
      <MoviesInfo movieId={moviesId} />


      <MoviesShowtime movieId={moviesId} />
    </>
  )
}

export default MoviesDetail