import { Box } from "@mui/material";
import { SortSetting } from "../components/sort/SortSetting";
import { SortButton } from "../components/sort/SortButton";
import { generatePaleColors } from "../feature/generatePaleColors";
import { useWindowSize } from "../feature/useWindowSize";
import { useEffect, useState } from "react";
import { calcCoordinates } from "../feature/calcCoordinates";
import { ErrorPage } from "./ErrorPage";
import { BubbleSort } from "../components/sort/BubbleSort";

export const Sort = ({
  array,
  setArray,
  sortType,
  order,
  isRunning,
  setIsRunning,
}) => {
  const paleColors = generatePaleColors(array.length);
  const [width, height] = useWindowSize();
  const [coordinates, setCoordinates] = useState(
    Array(array.length).fill({ x: 0, y: 0 })
  );
  const [coordinateIndex, setCoordinateIndex] = useState(
    Array.from({ length: array.length }, (_, index) => index)
  );
  const [sortIndex, setSortIndex] = useState(0);
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    setCoordinates(calcCoordinates(array.length, width, height));
  }, [width, height, array]);

  return (
    <Box width="80vw" display="flex" flexDirection="column">
      <Box height="90%">
        {!isRunning ? (
          <SortSetting
            array={array}
            setArray={setArray}
            paleColors={paleColors}
            coordinates={coordinates}
          />
        ) : (
          <>
            {sortType === "bubble" ? (
              <BubbleSort
                array={array}
                index={sortIndex}
                paleColors={paleColors}
                sortIndex={sortIndex}
                coordinates={coordinates}
                setCoordinates={setCoordinates}
                sortData={sortData}
                coordinateIndex={coordinateIndex}
                setCoordinateIndex={setCoordinateIndex}
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
          setArray={setArray}
          sortIndex={sortIndex}
          setSortIndex={setSortIndex}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          sortDataLength={isRunning ? sortData.length : 0}
          setSortData={setSortData}
          setCoordinateIndex={setCoordinateIndex}
        />
      </Box>
    </Box>
  );
};
