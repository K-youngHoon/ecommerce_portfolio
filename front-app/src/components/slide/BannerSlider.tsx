import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  Virtual,
  A11y,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./bannerSlider.module.scss";
import { useRef, useState } from "react";
import { useSlide } from "./useSlide";
// 배너 데이터

interface IProps {
  list: never[];
}

export const BannerSlider = (props: IProps) => {
  const { isLoop, onMove, loopToggle, currentIndex, initialProps } = useSlide({
    index: 0,
    loop: true,
  });

  return (
    <div>
      <Swiper
        modules={[Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{ pauseOnMouseEnter: true }}
        className={styles.swiper}
        {...initialProps}
      >
        {props.list.map((_, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            Slide {index + 1}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.buttonContainer}>
        <button onClick={() => onMove("slidePrev")}>Prev</button>
        <div className={styles.pagination}>
          <button onClick={loopToggle}>{isLoop ? "stop" : "start"}</button>
          <div>
            {currentIndex + 1}/{props.list.length}
          </div>
        </div>
        <button onClick={() => onMove("slideNext")}>Next</button>
      </div>
    </div>
  );
};
