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

// 배너 데이터

interface IProps {
  list: never[];
}

export const BannerSlider = (props: IProps) => {
  const swiperRef = useRef<SwiperType>(null);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);

  const [currentIdx, setCurrentIdx] = useState(0);

  const checkInstance = (swiper: typeof swiperRef.current) => {
    if (!swiper) {
      throw new Error("swiper instance is not init");
    }

    return swiper;
  };

  const onPlay = () => {
    try {
      const swiper = checkInstance(swiperRef.current);

      swiper.autoplay[isAutoplayActive ? "stop" : "start"]();
      setIsAutoplayActive((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  const onMove = (direction: "slidePrev" | "slideNext") => {
    try {
      const swiper = checkInstance(swiperRef.current);
      swiper[direction]();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Swiper
        modules={[Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ pauseOnMouseEnter: true }}
        loop={isAutoplayActive}
        className={styles.swiper}
        onRealIndexChange={(s) => setCurrentIdx(s.realIndex)}
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
          <button onClick={onPlay}>
            {isAutoplayActive ? "stop" : "start"}
          </button>
          <div>
            {currentIdx + 1}/{props.list.length}
          </div>
        </div>
        <button onClick={() => onMove("slideNext")}>Next</button>
      </div>
    </div>
  );
};
