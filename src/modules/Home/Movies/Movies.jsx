import React from 'react';
import { apiGetMovies } from '../../../API/movieAPI';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CardImg } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ReactPlayer from "react"
import { Modal } from "react-bootstrap";
import styles from "./Movies.module.scss";


function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState("");
  console.log(trailer);

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

  const handleOpenModal = (trailer) => {
    setOpen(true);
    setTrailer(trailer);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1 className='text-center'>Phim Đang Chiếu</h1>
      <Row>
        {movies?.map((item) => {
          return (
            <Col md={4}>
              <Card className='mt-4'>
                <CardImg style={{ height: 400, }} src={item.hinhAnh} />
                <Card.Body>
                  <Card.Title>{item.tenPhim}</Card.Title>
                  <Button className='me-3' onClick={() => navigate(`/movies/${item.maPhim}`)}>Mua Vé</Button>
                  <button onClick={() => handleOpenModal(item.trailer)}>
                    Xem trailer
                  </button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
      <div style={{ position: "relative" }}>
        <Modal
          show={isOpen}
          onHide={handleCloseModal}
          backdropOpacity={0.7}
          style={{
            position: "absolute !important",
            top: "100% !important",
            width: "50% !important",
            height: "650px !important",
            zIndex: "10 !important",
            marginLeft: "25% !important",
            marginRight: "25% !important",
            marginTop: "180px !important",
          }}
        >
          
          <Modal.Body
            style={{
              height: "500px",
            }}
          >
            <ReactPlayer
              className={styles.reactPlayer}
              url={trailer}
              width="100%"
              height="100%"
              controls={true}
              playing={isOpen}
            />
          </Modal.Body>
        </Modal>
        <div
          className={`${isOpen ? styles.backgroundBlur : styles.nonBlur}`}
        ></div>
      </div>
    </div>
  );
}

export default Movies