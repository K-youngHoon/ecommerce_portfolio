import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Scrollbar,
  Thumbs,
} from "swiper/modules";
import styles from "./bannerSlider.module.scss";
import slideStyles from "@src/styles/Slide.module.scss";

// 배너 데이터
const banners = [
  {
    id: 1,
    image: "/images/banner1.jpg",
    text: "네이버에서만 역대급 혜택",
    date: "3.4 - 3.16",
  },
  {
    id: 2,
    image: "/images/banner2.jpg",
    text: "선착순 10% 할인 쿠폰!",
    subText: "러닝페스타 최대 70% 할인",
  },
  {
    id: 3,
    image: "/images/banner3.jpg",
    text: "니베아 롤온 데오드란트",
    subText: "72시간 지속 효과",
  },
];

export const BannerSlider = () => {
  return (
    <div className={styles.bannerContainer}>
      {/* <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, el: `.${styles.pagination}` }}
        loop
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className={styles.bannerSlide}
              style={
                {
                  // backgroundImage: `url(${banner.image})`,
                  // backgroundSize: "cover",
                }
              }
            >
              <div>
                <h2>{banner.text}</h2>
                {banner.subText && <p>{banner.subText}</p>}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.pagination}></div>
      </Swiper> */}
      <div className={slideStyles.swiperContainer}>
        {/* 메인 슬라이드 */}
        <Swiper
          modules={[
            Navigation,
            Pagination,
            // Autoplay,
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
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className={`${slideStyles.slide}`}>{banner.text}</div>
              <label>{banner.subText}</label>
            </SwiperSlide>
          ))}
          <div className={slideStyles.customPagination}></div>{" "}
          {/* 페이지네이션 */}
        </Swiper>
      </div>
    </div>
  );
};
