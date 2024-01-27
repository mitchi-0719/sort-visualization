export const autoMove = (
  sortIndex,
  setSortIndex,
  sortDataLength,
  setAutoRunning,
  autoSpeed
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
  }, autoSpeed);
};
