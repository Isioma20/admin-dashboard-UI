import { useEffect } from "react";

export const useClickOutside = (refs, callback) => {
  const refArray = Array.isArray(refs) ? refs : [refs];
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const isOutside = refArray.every(
        (ref) => !ref?.current?.contains(event.target)
      );

      if (isOutside && typeof callback === "function") {
        callback(event);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [callback, refs]);
};
