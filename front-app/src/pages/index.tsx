import { authHoc } from "@src/components/common";
import { HomeHeader, HomeFooter } from "@src/components/layouts";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  Thumbs,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import homeStyles from "./home.module.scss";
import slideStyles from "@src/styles/Slide.module.scss";

function Home() {
  return (
    <div>
      <HomeHeader />
      <main className={homeStyles["main-container"]}>
        <div className={slideStyles.swiperContainer}>
          {/* 메인 슬라이드 */}
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
              Scrollbar,
              Thumbs,
              EffectFade,
            ]}
            effect="fade" // 페이드 효과
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              el: `.${slideStyles.customPagination}`,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            {["red", "blue", "green", "yellow", "purple"].map(
              (color, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`${slideStyles.slide} ${slideStyles[`slide-${color}`]}`}
                  >
                    Slide {index + 1}
                  </div>
                </SwiperSlide>
              )
            )}
            <div className={slideStyles.customPagination}></div>{" "}
            {/* 페이지네이션 */}
          </Swiper>

          {/* 썸네일 슬라이드 */}
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            watchSlidesProgress
            className={slideStyles.thumbnail}
          >
            {["red", "blue", "green", "yellow", "purple"].map(
              (color, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`${slideStyles.thumbnailItem} ${slideStyles[`slide-${color}`]}`}
                  ></div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </main>
      <HomeFooter />
    </div>
  );
}

export default Home;
// export default authHoc(Home);
