import { useState } from "react";
import { Box } from "@mui/material";
import { Setting } from "../common/Setting";
import { Sort } from "../common/Sort";

export const Main = () => {
  const [array, setArray] = useState([...Array(10)].map((_, i) => i));
  const [sortType, setSortType] = useState("bubble");
  const [order, setOrder] = useState("asc");
  const [isRunning, setIsRunning] = useState(false);

  const [sortIndex, setSortIndex] = useState(0);

  const [sortData, setSortData] = useState([]);

  return (
    <Box display="flex" height="80vh">
      <Setting
        setSortType={setSortType}
        order={order}
        setOrder={setOrder}
        setArray={setArray}
        isRunning={isRunning}
      />
      <Sort
        array={array}
        setArray={setArray}
        sortType={sortType}
        order={order}
        sortIndex={sortIndex}
        setSortIndex={setSortIndex}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        sortDataLength={isRunning ? sortData.length : 0}
        setSortData={setSortData}
      />
    </Box>
  );
};
