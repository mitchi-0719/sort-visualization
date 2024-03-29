export const generateColors = (count) => {
  const baseHue = 60;
  const saturation = 70;
  const lightness = 70;
  const step = 360 / count;

  const paleColors = Array.from({ length: count }, (_, index) => {
    const hue = (baseHue + index * step) % 360;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  });

  return paleColors;
};