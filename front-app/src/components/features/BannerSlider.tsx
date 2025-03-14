import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Scrollbar,
  Thumbs,
  FreeMode,
} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/free-mode";
// import "swiper/css/thumbs";
// import "swiper/css/effect-fade";
// import "./bannerSlider.scss";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./bannerSlider.module.scss";

// 배너 데이터

export const BannerSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={styles.swiper}
      loop
    >
      {Array.from({ length: 10 }, (_, i) => (
        <SwiperSlide key={i} className={styles.swiperSlide}>
          Slide {i + 1}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
