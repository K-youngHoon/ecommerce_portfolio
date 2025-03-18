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
import { useStore } from "@src/stores";
import { ErrorModal } from "../error";

// 배너 데이터

interface IProps {
  list: never[];
}

export const BannerSlider = (props: IProps) => {
  const swiperRef = useRef<SwiperType>(null);
  const loopRef = useRef(true);

  const [currentIdx, setCurrentIdx] = useState(0);

  const { modal } = useStore().config();

  const onPlay = () => {
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
    <div>
      <Swiper
        modules={[Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ pauseOnMouseEnter: true }}
        loop={loopRef.current}
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
        <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
        <div className={styles.pagination}>
          <button onClick={onPlay}>stop</button>
          <div>
            {currentIdx + 1}/{props.list.length}
          </div>
        </div>
        <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
      </div>
    </div>
  );
};
