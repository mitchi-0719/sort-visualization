export const getRandArray = (type, length, setArray) => {
  const arr = [];
  const min = 0;
  const max = 30;
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
  setArray(arr);
};
