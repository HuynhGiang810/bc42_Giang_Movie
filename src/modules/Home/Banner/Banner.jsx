import React from 'react'
import { useEffect, useState } from 'react';
import { apiGetBanners } from '../../../API/movieAPI';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";




function Banner() {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);

  const getBanners = async () => {
    try {
      const data = await apiGetBanners();
      setBanners(data.content);
    } catch (error) {
      setError(error.response?.data?.content);
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  if (error) return null;


  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
    >
      {banners.map((item, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <img
          
            src={item.hinhAnh}
            alt={item.maBanner}
            
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
    
  
}

export default Banner