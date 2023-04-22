import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { musicLinks } from "../../../constants/constants";

function TopRow({ data }) {
  const images = data
    ?.map((song, idx) => {
      return { id: song?.key, img: song?.images?.coverart, subtitle: song?.subtitle };
    })
    .slice(20, 31)
    .sort((a, b) => {
      const objA = a["subtitle"];
      const objB = b["subtitle"];
      return objA.localeCompare(objB);
    });

  return (
    <div className="top-row">
      <div className="cover-arts-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
          }}
          slidesPerView="1"
          speed={600}
          centeredSlides="true"
          loop
          className="swiper-wrapper"
        >
          {images?.length > 0 &&
            images.map((image, idx) => {
              return (
                <SwiperSlide className="cover-arts" key={idx}>
                  <img src={image.img} alt="" />
                </SwiperSlide>
              );
            })}
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
