import React from 'react'
import { useEffect, useState } from 'react';
import { apiGetBanners } from '../../../API/movieAPI';
import Swiper, {Navigation, Pagination} from 'swiper'
import  { SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from "swiper";
// import "./styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/swiper-bundle.css";

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
      modules={[Navigation, Pagination, EffectFade]}
     
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