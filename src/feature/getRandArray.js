import { MAX_NUMBER, MIN_NUMBER } from "../constants/number";

export const getRandArray = (type, length) => {
  const arr = [];
  const min = MIN_NUMBER;
  const max = MAX_NUMBER;
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  // 降順
  if (type === -1) {
    arr.sort((a, b) => a - b);

    // 昇順
  } else if (type === 1) {
    arr.sort((a, b) => b - a);
  }
  return arr;
};
