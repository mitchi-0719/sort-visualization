import { useState } from "react";
import { Box } from "@mui/material";
import { Setting } from "./Setting/Setting";
import { Sort } from "./sort/Sort";

export const Main = () => {
  const [array, setArray] = useState([...Array(10)].map((_, i) => i));
  const [sortType, setSortType] = useState("bubble");
  const [order, setOrder] = useState("asc");

  return (
    <Box display="flex" height="80vh">
      <Setting
        setSortType={setSortType}
        order={order}
        setOrder={setOrder}
        setArray={setArray}
      />
      <Sort array={array} setArray={setArray} />
    </Box>
  );
};
