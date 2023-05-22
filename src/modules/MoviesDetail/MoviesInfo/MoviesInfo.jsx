import React, { useEffect, useState } from 'react'
import { apiGetMovieDetails } from '../../../API/movieAPI';
import styles from "./Info.module.scss"

function MoviesInfo({ movieId }) {

  const [movie, setMovie] = useState({});

  const getMovieDetails = async () => {
    try {
      const data = await apiGetMovieDetails(movieId);
      console.log(data);
      setMovie(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div>
      <h1>{movie.tenPhim}</h1>
      <div>
        <img className={styles.img} src={movie.hinhAnh} />
        <h3>Mô tả: {movie.moTa}</h3>
      </div>
    </div>
  )
}

export default MoviesInfo