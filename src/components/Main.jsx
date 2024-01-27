import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Setting } from "../common/Setting";
import { Sort } from "../common/Sort";
import { getRandArray } from "../feature/getRandArray";

export const Main = () => {
  const [array, setArray] = useState([...Array(10)].map((_, i) => i));
  const [sortType, setSortType] = useState("bubble");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    setArray(getRandArray(array.length));
  }, []);

  return (
    <Box display="flex" height="80vh">
      <Setting
        array={array}
        setSortType={setSortType}
        order={order}
        setOrder={setOrder}
        setArray={setArray}
      />
      <Sort
        array={array}
        setArray={setArray}
        sortType={sortType}
        order={order}
      />
    </Box>
  );
};
