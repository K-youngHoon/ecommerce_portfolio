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
import { BannerSlider } from "@src/components/features";

function Home() {
  return (
    <div>
      <HomeHeader />
      <main className={homeStyles["main-container"]}>
        <BannerSlider />
      </main>
      <HomeFooter />
    </div>
  );
}

export default Home;
// export default authHoc(Home);
