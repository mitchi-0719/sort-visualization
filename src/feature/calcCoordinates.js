import { RECT_WIDTH, RECT_HEIGHT } from "../constants/blockConst";

export const calcCoordinates = (length, width, height, isWide) => {
  const areaWidth = width * (isWide ? 0.8 : 1);
  const areaHeight = height * (isWide ? 0.7 : 0.55);
  const verticalSpacing = 20;
  const topMargin = areaHeight / 5;
  const leftMargin = (areaWidth - length * (RECT_WIDTH + verticalSpacing)) / 2;

  const coordinatesArray = [];
  let X, Y;

  for (let i = 0; i < length; i++) {
    X = leftMargin + i * (RECT_WIDTH + verticalSpacing);
    Y = topMargin - RECT_HEIGHT / 2;
    coordinatesArray.push({ x: X, y: Y });
  }

  return coordinatesArray;
};
