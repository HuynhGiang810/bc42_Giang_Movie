import React from 'react';
import { apiGetMovies } from '../../../API/movieAPI';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const data = await apiGetMovies();
      setMovies(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);


  return (
    <div>
      {movies.map((item) => {
        return (
          <div>
            <span>{item.tenPhim}</span>
            <button onClick={() => navigate(`/movies/${item.maPhim}`)}>
              Mua vé
            </button>

            {/* <Modal show={..} onHide={...}>
              <ReactPlayer
                url={item.trailer}
                config={{
                  youtube: {
                    playerVars: {
                      autoplay: 1,
                    },
                  },
                }}
              />
            </Modal> */}
          </div>
        );
      })}
    </div>
  )
}

export default Movies