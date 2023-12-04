import { useState } from "react";
import { ArrayInput } from "./sort/ArrayInput";
import { ButtonArea } from "./sort/SortButton";
import { Box } from "@mui/material";
import { Setting } from "./sort/Setting";

export const Main = () => {
  const [array, setArray] = useState([...Array(10)].map((_, i) => i));
  const [sortType, setSortType] = useState("bubble");
  const [order, setOrder] = useState("asc");

  return (
    <Box display="flex">
      <Box
        flex={2}
        border={3}
        borderColor="#0070ff"
        borderRadius="0 10px 10px 0"
        sx={{ background: "#fff", p: 1 }}
      >
        <Setting
          setSortType={setSortType}
          order={order}
          setOrder={setOrder}
          setArray={setArray}
        />
      </Box>
      <Box flex={8}>
        <ArrayInput array={array} setArray={setArray} />
        <ButtonArea />
      </Box>
    </Box>
  );
};
