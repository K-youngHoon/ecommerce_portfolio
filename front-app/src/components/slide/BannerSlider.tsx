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
import { useRef } from "react";
import { useStore } from "@src/stores";
import { ErrorModal } from "../error";

// 배너 데이터

export const BannerSlider = () => {
  const swiperRef = useRef<SwiperType>(null);
  const loopRef = useRef(true);

  const { modal } = useStore().config();

  const onLoop = () => {
    try {
      if (swiperRef.current === null) {
        throw new Error();
      }

      swiperRef.current.autoplay[loopRef.current ? "stop" : "start"]();
      loopRef.current = !loopRef.current;
    } catch (error) {
      modal.update({ isOpen: true, content: <ErrorModal /> });
    }
  };

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{ pauseOnMouseEnter: true }}
        loop={loopRef.current}
        className={styles.swiper}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className={styles.swiperSlide}
            onClick={() => console.log(index)}
          >
            Slide {index + 1}
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button onClick={onLoop}>stop</button>
        <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
        <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
      </div>
    </>
  );
};
