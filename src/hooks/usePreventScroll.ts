import { useEffect } from "react";

export const usePreventScroll = (preventScroll: boolean) => {
  useEffect(() => {
    if (preventScroll) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (preventScroll) {
        document.body.style.overflow = "visible";
      }
    };
  }, [preventScroll]);
};
