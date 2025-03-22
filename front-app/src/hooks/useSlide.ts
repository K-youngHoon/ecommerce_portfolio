import { useCallback, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";

interface IParams {
  index: number;
  loop: boolean;
}

export const useSlide = (initial: IParams) => {
  const swiperRef = useRef<SwiperType>(null);
  const [isLoop, setIsLoop] = useState(initial.loop);
  const [currentIndex, setCurrentIndex] = useState(initial.index);

  const checkInstance = useCallback((swiper: typeof swiperRef.current) => {
    if (!swiper) {
      throw new Error("swiper instance is not init");
    }

    return swiper;
  }, []);

  const loopToggle = useCallback(() => {
    try {
      const swiper = checkInstance(swiperRef.current);

      swiper.autoplay[isLoop ? "stop" : "start"]();
      setIsLoop((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  }, [checkInstance, isLoop]);

  const onMove = useCallback(
    (direction: "slidePrev" | "slideNext") => {
      try {
        const swiper = checkInstance(swiperRef.current);
        swiper[direction]();
      } catch (error) {
        console.error(error);
      }
    },
    [checkInstance]
  );

  const onBeforeInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  const onRealIndexChange = useCallback((swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
  }, []);

  return {
    loopToggle,
    onMove,
    isLoop,
    swiperRef,
    currentIndex,
    initialProps: {
      onBeforeInit,
      onRealIndexChange,
      loop: isLoop,
    },
  };
};
