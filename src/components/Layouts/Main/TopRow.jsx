import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import { musicLinks } from "../../../constants/constants";

function TopRow() {
  return (
    <div className="top-row">
      <div className="cover-arts-slider">
        <Swiper
          modules={[Pagination, FreeMode]}
          freeMode="true"
          pagination
          slidesPerView="1"
          speed="600"
          centeredSlides="true"
          className="swiper-wrapper"
        >
          <SwiperSlide className="cover-arts">
            <img src="" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="music-options">
        {musicLinks.map(({ title, icon: Icon, link }, idx) => (
          <Link to={link} className="option" key={idx}>
            <div className="icon">
              <Icon size={25} stroke="rgba(4, 4, 161, 0.938)" />
            </div>
            <span className="option-title fs-small">{title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopRow;
