import React from 'react';
import { apiGetMovies } from '../../../API/movieAPI';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CardImg } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Card  from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const data = await apiGetMovies();
      console.log(data);
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
      <h1 className='text-center'>Phim Đang Chiếu</h1>
      <Row>
        {movies.map((item) => {
          return (
            <Col md={4}>
              <Card className='mt-4'>
                <CardImg style={{height:400,}} src={item.hinhAnh} />
                <Card.Body>
                  <Card.Title>{item.tenPhim}</Card.Title>
                  <Button className='me-3' onClick={()=> navigate(`/movies/${item.maPhim}`)}>Mua Vé</Button>
                  <Button >Xem Trailer</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Movies