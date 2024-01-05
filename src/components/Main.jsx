import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Setting } from "./Setting/Setting";
import { Sort } from "./sort/Sort";

export const Main = () => {
  const [array, setArray] = useState([...Array(10)].map((_, i) => i));
  const [sortType, setSortType] = useState("bubble");
  const [order, setOrder] = useState("asc");
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading , setIsLoading] = useState(false);

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
        setIsLoading={setIsLoading}
        setSortData={setSortData}
      />
    </Box>
  );
};
