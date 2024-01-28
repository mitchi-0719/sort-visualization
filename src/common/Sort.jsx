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
import { useIsWideSize } from "../feature/useIsWideSize";

export const Sort = ({ array, setArray, sortType, order }) => {
  const paleColors = generateColors(array.length);
  const [coordinates, setCoordinates] = useState(
    Array(array.length).fill({ x: 0, y: 0 })
  );
  const [coordinateIndex, setCoordinateIndex] = useState(
    Array.from({ length: array.length }, (_, index) => index)
  );
  const [sortIndex, setSortIndex] = useState(0);
  const [sortData, setSortData] = useState([]);
  const windowSIze = useWindowSize();
  const isWideSize = useIsWideSize();

  useEffect(() => {
    setSortIndex(0);
    (async () => {
      const res = await apiFetch(sortType, order === "asc", array);
      setSortData(res.API_Response.sort_log.log);
    })();
  }, [array, sortType, order]);

  useEffect(() => {
    setCoordinates(
      calcCoordinates(
        array.length,
        windowSIze.width,
        windowSIze.height,
        isWideSize
      )
    );
    setCoordinateIndex(
      Array.from({ length: array.length }, (_, index) => index)
    );
  }, [windowSIze.width, windowSIze.height, array, sortData]);

  return (
    <Box
      width={isWideSize ? "80vw" : "100vw"}
      display="flex"
      flexDirection="column"
    >
      <Box
        height={windowSIze.height * (isWideSize ? 0.7 : 0.55)}
        sx={{ transform: "scale(1, -1)" }}
      >
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
      <Box py={0.5}>
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
