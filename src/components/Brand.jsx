import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Brand = () => {
  return (
    <div>
      <section className="brand-container">
        <div className="swiper-container brand-slider">
          <Swiper
            spaceBetween={20}

            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              450: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }
            }
          >
            <div className="swiper-wrapper">
              <SwiperSlide><div className="swiper-slide"><img src="images/1.jpg" alt="" /></div></SwiperSlide>
              <SwiperSlide><div className="swiper-slide"><img src="images/2.jpg" alt="" /></div></SwiperSlide>
              <SwiperSlide><div className="swiper-slide"><img src="images/3.jpg" alt="" /></div></SwiperSlide>
              <SwiperSlide><div className="swiper-slide"><img src="images/4.jpg" alt="" /></div></SwiperSlide>
              <SwiperSlide><div className="swiper-slide"><img src="images/5.jpg" alt="" /></div></SwiperSlide>
              <SwiperSlide><div className="swiper-slide"><img src="images/6.jpg" alt="" /></div></SwiperSlide>
            </div>
          </Swiper>
        </div>

      </section>
    </div>
  );
};

export default Brand;
