import { useCallback, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";

export const useSlide = () => {
  const swiperRef = useRef<SwiperType>(null);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);

  const checkInstance = (swiper: typeof swiperRef.current) => {
    if (!swiper) {
      throw new Error("swiper instance is not init");
    }

    return swiper;
  };

  const loofToggle = () => {
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

  return { loofToggle, onMove, isAutoplayActive, swiperRef };
};
