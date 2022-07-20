import React, { useRef } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import ArrowIcon from '../../../svgs/down-chevron.svg';
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';

SwiperCore.use([Navigation]);

const DesignSliderStyles = styled.section`
  width: 100%;
  padding: 2rem 0;
  section {
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    .box {
      width: 95%;
      margin: 0 auto;
      border: solid 1px #000;
    }
    .next {
      cursor: pointer;
      position: absolute;
      bottom: -3rem;
      right: calc(0% + 35%);
      border: solid 1px #000;
      border-radius: 50%;
      padding: 0.35rem;
      display: flex;
      height: 30px;
      width: 30px;
      svg {
        width: 20px;
        transform: rotate(-90deg);
      }
      @media only screen and (min-width: 414px) {
        right: calc(0% + 40%);
      }
      @media only screen and (min-width: 1200px) {
        right: calc(0% + 47%);
      }
    }
    .prev {
      cursor: pointer;
      position: absolute;
      bottom: -3rem;
      left: calc(0% + 35%);
      border: solid 1px #000;
      border-radius: 50%;
      padding: 0.35rem;
      height: 30px;
      display: flex;
      width: 30px;
      svg {
        width: 20px;
        transform: rotate(90deg);
      }
      @media only screen and (min-width: 414px) {
        left: calc(0% + 40%);
      }
      @media only screen and (min-width: 1200px) {
        left: calc(0% + 47%);
      }
    }
  }
`;
const DesignSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <DesignSliderStyles>
      <section>
        <div className="next" ref={navigationNextRef}>
          <ArrowIcon />
        </div>
        <div className="prev" ref={navigationPrevRef}>
          <ArrowIcon />
        </div>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={10}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="galleryCarousel"
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            992: {
              slidesPerView: 2.95,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <div className="box">
              <StaticImage
                src="../../../assets/images/slider/desktop/1.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <StaticImage
                src="../../../assets/images/slider/desktop/2.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <StaticImage
                src="../../../assets/images/slider/desktop/3.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <StaticImage
                src="../../../assets/images/slider/desktop/4.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <StaticImage
                src="../../../assets/images/slider/desktop/5.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <StaticImage
                src="../../../assets/images/slider/desktop/6.png"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </DesignSliderStyles>
  );
};

export default DesignSlider;
