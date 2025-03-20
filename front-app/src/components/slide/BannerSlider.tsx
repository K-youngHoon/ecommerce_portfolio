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

  const checkSwiper =
    (action: (swiper: NonNullable<typeof swiperRef.current>) => void) => () => {
      try {
        if (!swiperRef.current) {
          throw new Error("instance is not init");
        }

        action(swiperRef.current);
      } catch (error) {
        console.error("Error executing Swiper action:", error);
      }
    };

  const onPlay = checkSwiper((swiper) => {
    swiper.autoplay[isAutoplayActive ? "stop" : "start"]();
    setIsAutoplayActive((prev) => !prev);
  });

  const onNext = (direction: "slidePrev" | "slideNext") =>
    checkSwiper((swiper) => swiper[direction]());

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
        <button onClick={onNext("slidePrev")}>Prev</button>
        <div className={styles.pagination}>
          <button onClick={onPlay}>
            {isAutoplayActive ? "stop" : "start"}
          </button>
          <div>
            {currentIdx + 1}/{props.list.length}
          </div>
        </div>
        <button onClick={onNext("slideNext")}>Next</button>
      </div>
    </div>
  );
};
