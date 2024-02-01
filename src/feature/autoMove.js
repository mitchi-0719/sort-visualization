export const autoMove = (
  sortIndex,
  setSortIndex,
  sortDataLength,
  setAutoRunning,
  autoSpeed,
  setIntervalId
) => {
  let temp = sortIndex;
  setAutoRunning(true);

  const id = setInterval(() => {
    setSortIndex((prev) => prev + 1);
    temp++;

    if (temp === sortDataLength - 1) {
      clearInterval(id);
      setAutoRunning(false);
    }
  }, autoSpeed);

  setIntervalId(id);
};
