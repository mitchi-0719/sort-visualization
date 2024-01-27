import { MAX_NUMBER, MIN_NUMBER } from "../constants/number";

export const getRandArray = (length) => {
  const arr = [];
  const min = MIN_NUMBER;
  const max = MAX_NUMBER;
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return arr;
};
