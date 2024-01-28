import { useWindowSize } from "./useWindowSize";

export const useIsWideSize = () => {
  const windowSize = useWindowSize();

  return windowSize.width > windowSize.height;
};
