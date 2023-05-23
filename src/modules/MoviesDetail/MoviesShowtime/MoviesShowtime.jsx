import React, { useEffect, useState } from 'react'
import { apiGetMovieSchedule, apiGetMovieShowTime } from '../../../API/movieAPI';
import { Tabs } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import moment from "moment";
// import styles from "./MoviesShowtime.module.scss"


function MoviesShowtime({ movieId }) {
  const { TabPane } = Tabs;
  const [cumrap, setCumrap] = useState([]);
  const [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
  const [movieShowtime, setMovieShowtime] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabPosition, setTabPosition] = useState("left");

  const getMovieShowtime = async () => {
    try {
      const data = await apiGetMovieShowTime();
      console.log(data);
      setMovieShowtime(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieSchedule = async () => {
    try {
      const data = await apiGetMovieSchedule(movieId);
      console.log(data);
      setCumrap(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieShowtime();
    getMovieSchedule()
  }, [maHeThongRap]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  const handleChangeTabPosition = (value, e) => {
    setTabPosition(value);
  };
  return (
    <div>
      <div>
        <div dir="left" >
          <Tabs tabPosition={tabPosition}>
            {movieShowtime.map((heThong, index) => {
              // console.log("he thong rap", heThong);
              return (
                <TabPane
                  style={{ height: "580px" }}
                  key={index}
                  tab={
                    <img
                      style={{ height: "50px" }}
                      src={heThong.logo}
                      alt="logo"
                      onClick={() => setMaHeThongRap(heThong.maHeThongRap)}
                    />
                  }
                >
                  <Tabs tabPosition={tabPosition}>
                    {cumrap[0]?.lstCumRap
                      ?.slice(0, 6)
                      .map((cumRap, subIndex) => {
                        // console.log("lst cum rap", cumRap);
                        return (
                          <TabPane
                            
                            key={subIndex}
                            tab={
                              <>
                                <h1
                                  style={{
                                    fontSize: "large",
                                    textAlign: "justify",
                                    width: "500px",
                                  }}
                                >
                                  {cumRap.tenCumRap}
                                </h1>
                                <p
                                  style={{
                                    textAlign: "justify",
                                    width: "500px",
                                  }}
                                >
                                  {cumRap.diaChi}
                                </p>
                              </>
                            }
                          >
                            {cumRap?.danhSachPhim.map((phim, index) => {
                              // console.log("phim", phim);
                              return (
                                <div >
                                  <div>
                                    <img
                                      src={phim.hinhAnh}
                                      style={{
                                        width: "100px",
                                        height: "150px",
                                      }}
                                      alt="img"
                                    />
                                  </div>
                                  <div style={{ marginLeft: "10px" }}>
                                    <p
                                      style={{
                                        fontSize: "large",
                                        textAlign: "justify",
                                        fontWeight: "700",
                                        textTransform: "capitalize",
                                      }}
                                    >
                                      {phim.tenPhim}
                                    </p>
                                    <div>
                                      <Container style={{ width: "345px" }}>
                                        <Row>
                                          {phim?.lstLichChieuTheoPhim
                                            .slice(0, 4)
                                            ?.map((lich, index) => {
                                              return (
                                                <Col xs={6} md={6}>
                                                  <p
                                                    key={index}
                                                    style={{
                                                      textAlign: "justify",
                                                    }}
                                                  >
                                                    {moment(
                                                      lich.ngayChieuGioChieu
                                                    ).format("DD/MM ~ hh:mm A")}
                                                  </p>
                                                </Col>
                                              );
                                            })}
                                        </Row>
                                      </Container>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </TabPane>
                        );
                      })}
                  </Tabs>
                </TabPane>
              );
            })}
          </Tabs>
        </div>
      </div>
    </div>



  );
}

export default MoviesShowtime