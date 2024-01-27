import { Box } from "@mui/material";
import { SortButton } from "./SortButton";
import { generateColors } from "../feature/generateColors";
import { useWindowSize } from "../feature/useWindowSize";
import { useEffect, useState } from "react";
import { calcCoordinates } from "../feature/calcCoordinates";
import { ErrorPage } from "./ErrorPage";
import { BubbleSort } from "../components/sort/BubbleSort";
import { SelectionSort } from "../components/sort/SelectionSort";
import { apiFetch } from "../api/apiFetch";
import { Loading } from "./Loading";

export const Sort = ({ array, setArray, sortType, order }) => {
  const paleColors = generateColors(array.length);
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
    setSortIndex(0);
    (async () => {
      const res = await apiFetch(sortType, order === "asc", array);
      setSortData(res.API_Response.sort_log.log);
    })();
  }, [array, sortType, order]);

  useEffect(() => {
    setCoordinates(calcCoordinates(array.length, width, height));
    setCoordinateIndex(
      Array.from({ length: array.length }, (_, index) => index)
    );
  }, [width, height, array, sortData]);

  return (
    <Box width="80vw" display="flex" flexDirection="column">
      <Box height="90%" sx={{ transform: "scale(1, -1)" }}>
        {sortData.length === 0 ? (
          <Loading />
        ) : (
          <>
            {sortType === "bubble" ? (
              <BubbleSort
                array={array}
                setArray={setArray}
                paleColors={paleColors}
                sortIndex={sortIndex}
                coordinates={coordinates}
                setCoordinates={setCoordinates}
                sortData={sortData}
                coordinateIndex={coordinateIndex}
                setCoordinateIndex={setCoordinateIndex}
              />
            ) : sortType === "selection" ? (
              <SelectionSort
                array={array}
                setArray={setArray}
                paleColors={paleColors}
                sortIndex={sortIndex}
                coordinates={coordinates}
                setCoordinates={setCoordinates}
                sortData={sortData}
                coordinateIndex={coordinateIndex}
                setCoordinateIndex={setCoordinateIndex}
                order={order}
              />
            ) : (
              <ErrorPage />
            )}
          </>
        )}
      </Box>
      <Box height="10%">
        <SortButton
          arrayLength={array.length}
          setArray={setArray}
          sortIndex={sortIndex}
          setSortIndex={setSortIndex}
          sortDataLength={sortData.length}
          setSortData={setSortData}
          setCoordinateIndex={setCoordinateIndex}
        />
      </Box>
    </Box>
  );
};
