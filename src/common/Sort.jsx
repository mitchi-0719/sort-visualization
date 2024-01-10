import { Box } from "@mui/material";
import { SortSetting } from "../components/sort/SortSetting";
import { SortButton } from "../components/sort/SortButton";
import { generatePaleColors } from "../feature/generatePaleColors";
import { useWindowSize } from "../feature/useWindowSize";
import { useEffect, useState } from "react";
import { calcCoordinates } from "../feature/calcCoordinates";
import { ErrorPage } from "./ErrorPage";
import { BubbleSort } from "../components/sort/BubbleSort";

export const Sort = ({ array, sortType, order, isRunning, setIsRunning }) => {
  const paleColors = generatePaleColors(array.length);
  const [width, height] = useWindowSize();
  const [coordinates, setCoordinates] = useState(
    Array(array.length).fill({ x: 0, y: 0 })
  );
  const [sortIndex, setSortIndex] = useState(0);
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    setCoordinates(calcCoordinates(array.length, width, height));
  }, [width, height, array.length]);

  return (
    <Box width="80vw" display="flex" flexDirection="column">
      <Box height="90%">
        {!isRunning ? (
          <SortSetting
            array={array}
            paleColors={paleColors}
            coordinates={coordinates}
          />
        ) : (
          <>
            {sortType === "bubble" ? (
              <BubbleSort
                array={array}
                paleColors={paleColors}
                index={sortIndex}
                coordinates={coordinates}
                setCoordinates={setCoordinates}
                sortData={sortData}
              />
            ) : (
              <ErrorPage />
            )}
          </>
        )}
      </Box>
      <Box height="10%">
        <SortButton
          sortType={sortType}
          isAsc={order === "asc"}
          array={array}
          sortIndex={sortIndex}
          setSortIndex={setSortIndex}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          sortDataLength={isRunning ? sortData.length : 0}
          setSortData={setSortData}
        />
      </Box>
    </Box>
  );
};
