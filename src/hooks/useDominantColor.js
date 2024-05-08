import { useState, useEffect } from "react";
import ColorThief from "colorthief";

function useDominantColor(src) {
  const [dominantColors, setDominantColors] = useState([0, 0, 0]);

  useEffect(() => {
    if (!src) return;
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = src;

    image.onload = () => {
      const colorThief = new ColorThief();
      const colorPalette = colorThief.getColor(image);

      setDominantColors(colorPalette);
    };
  }, [src]);

  const [r, g, b] = dominantColors;
  const rgb = `rgb(${r},${g},${b})`;

  return rgb;
}

export default useDominantColor;
