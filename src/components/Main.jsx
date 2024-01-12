import { useState } from "react";
import { Box } from "@mui/material";
import { Setting } from "../common/Setting";
import { Sort } from "../common/Sort";

export const Main = () => {
  const [arrayLength, setArrayLength] = useState(10);
  const [array, setArray] = useState([...Array(arrayLength)].map((_, i) => i));
  const [sortType, setSortType] = useState("bubble");
  const [order, setOrder] = useState("asc");
  const [isRunning, setIsRunning] = useState(false);

  return (
    <Box display="flex" height="80vh">
      <Setting
        array={array}
        setSortType={setSortType}
        order={order}
        setOrder={setOrder}
        setArray={setArray}
        isRunning={isRunning}
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
      />
      <Sort
        array={array}
        setArray={setArray}
        sortType={sortType}
        order={order}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
    </Box>
  );
};
