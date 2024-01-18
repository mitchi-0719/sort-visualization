export const autoMove = (
  sortIndex,
  setSortIndex,
  sortDataLength,
  setAutoRunning
) => {
  let temp = sortIndex;
  setAutoRunning(true);
  const intervalId = setInterval(() => {
    setSortIndex((prev) => prev + 1);
    temp++;

    if (temp === sortDataLength - 1) {
      clearInterval(intervalId);
      setAutoRunning(false);
    }
  }, 400);
};