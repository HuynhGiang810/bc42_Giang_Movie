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
                    
                    />
                  }>
                  <Tabs tabPosition={tabPosition}>
                    {cumrap?.heThongRapChieu?.map((cumRap, index) => {
                      return (
                        heThong.maHeThongRap === cumRap.maHeThongRap && (
                          <TabPane key={index}
                            tab={
                              <div>
                                <p>{cumRap?.cumRapChieu[0]?.tenCumRap}</p>
                                <p>{cumRap?.cumRapChieu[0]?.diaChi}</p>
                              </div>}>
                            {cumRap?.cumRapChieu[0]?.lichChieuPhim?.map((lichChieu,index) =>{
                              return (
                                <div key={index}>
                                  {lichChieu.ngayChieuGioChieu}
                                </div>
                              )
                            })}
                          </TabPane>
                        )
                      )
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