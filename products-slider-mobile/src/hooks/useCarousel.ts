import { RefObject, useEffect } from "react";

type Scroll = {
  direction: "up" | "down" | "idle";
  scrollY: number;
};

var scrollY = 0;
var timeout: NodeJS.Timeout;
const SLIDE_HEIGHT = 240;
const useCarousel = (
  ref: RefObject<HTMLElement>,
  slideRefs: RefObject<HTMLElement[]>
) => {
  const scales = slideRefs?.current?.map(() => 1);
  const normalize = (value: number, min: number, max: number) => {
    const localValue = (value - min) / (max - min);
    return Math.max(0, Math.min(1, localValue));
  };

  const getTransform = (scale: number, rotate: number) =>
    `perspective(800px) rotateX(${rotate}deg) scale(${scale})`;

  const handleNavigation = (e: any) => {
    const element = e.currentTarget;
    const wrapperHeight = element?.clientHeight;
    clearTimeout(timeout);

    if (!slideRefs?.current) return;

    slideRefs?.current?.forEach((_, slide) => {
      if (!slideRefs?.current || !scales) return;
      const { offsetTop, clientHeight } = slideRefs.current[slide];
      const elementPosition = offsetTop + clientHeight;
      const scale = normalize(elementPosition, 0.5, scrollY + wrapperHeight);
      const brightness = normalize(
        elementPosition,
        0.9,
        scrollY + wrapperHeight
      );
      slideRefs.current[slide].style.marginBottom = `-${Math.min(
        (1 - scale) * SLIDE_HEIGHT,
        SLIDE_HEIGHT / 1.5
      )}px`;
      slideRefs.current[slide].style.filter = `brightness(${brightness})`;
      slideRefs.current[slide].style.transform = getTransform(scale, -30);

      scales[slide] = scale;
    });
    timeout = setTimeout(() => {
      if (!slideRefs?.current) return;
      slideRefs?.current?.forEach((_, slide) => {
        if (!slideRefs?.current || !scales) return;
        const scale = scales[slide];
        slideRefs.current[slide].style.transform = getTransform(scale, 0);
      });
    }, 200);
    scrollY = element?.scrollTop;
  };

  useEffect(() => {
    if (ref?.current && slideRefs?.current) {
      scrollY = ref?.current.scrollTop;
      handleNavigation({ currentTarget: ref?.current });
      ref?.current.addEventListener("scroll", handleNavigation);
    }
    return () => {
      if (ref?.current && slideRefs?.current)
        ref?.current.removeEventListener("scroll", handleNavigation);
    };
  }, [ref, slideRefs]);

  return {};
};

export default useCarousel;
