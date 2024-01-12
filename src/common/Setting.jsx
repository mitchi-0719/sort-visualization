import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material/";
import Select from "react-select";
import { getRandArray } from "../feature/getRandArray";
import { useEffect } from "react";

export const Setting = ({
  array,
  setSortType,
  order,
  setOrder,
  setArray,
  isRunning,
  arrayLength,
  setArrayLength,
}) => {
  const options = [
    { value: "bubble", label: "Bubble sort (交換ソート)" },
    { value: "selection", label: "Selection sort (選択ソート)" },
    // { value: "insertion", label: "Insertion sort (挿入ソート)" },
    // { value: "quick", label: "Quick sort" },
    // { value: "heap", label: "Heap sort" },
    // { value: "merge", label: "Merge sort" },
  ];

  const radioValues = [
    { value: "asc", label: "昇順" },
    { value: "desc", label: "降順" },
  ];

  const handleSpinButtonClick = (val) => {
    setArrayLength((prev) => prev + val);
  };

  useEffect(() => {
    if (arrayLength < array.length) {
      setArray(array.slice(0, arrayLength));
    } else if (arrayLength > array.length) {
      setArray([...array, 0]);
    }
  }, [arrayLength]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      width="20vw"
      border={3}
      borderColor="#0070ff"
      rowGap={1}
      sx={{ background: "#fff", p: 1 }}
    >
      <Typography variant="h6">ソート設定</Typography>
      <Select
        defaultValue={{ value: "bubble", label: "Bubble sort (交換ソート)" }}
        options={options}
        isMulti={false}
        onChange={(e) => setSortType(e.value)}
        isDisabled={isRunning}
      />
      <Typography>配列要素数</Typography>
      <Box display="flex">
        <Button
          variant="outlined"
          onClick={() => handleSpinButtonClick(-1)}
          disabled={isRunning || arrayLength === 2}
        >
          <RemoveCircleOutline />
        </Button>
        <Typography variant="h5" style={{ margin: "auto 16px" }}>
          {arrayLength}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => handleSpinButtonClick(1)}
          disabled={isRunning || arrayLength === 10}
        >
          <AddCircleOutline />
        </Button>
      </Box>
      <FormControl>
        <RadioGroup row>
          {radioValues.map((val, index) => {
            return (
              <FormControlLabel
                key={index}
                value={val.value}
                control={<Radio />}
                label={val.label}
                onChange={(e) => setOrder(e.target.value)}
                checked={order === val.value}
                disabled={isRunning}
              />
            );
          })}
        </RadioGroup>
      </FormControl>

      <Box rowGap={1} display="flex" flexDirection="column">
        <Button
          variant="contained"
          disabled={isRunning}
          onClick={() => getRandArray(0, arrayLength, setArray)}
        >
          ランダム配列生成
        </Button>
        <Button
          variant="contained"
          disabled={isRunning}
          onClick={() => getRandArray(-1, arrayLength, setArray)}
        >
          ランダム昇順生成
        </Button>
        <Button
          variant="contained"
          disabled={isRunning}
          onClick={() => getRandArray(1, arrayLength, setArray)}
        >
          ランダム降順生成
        </Button>
      </Box>
    </Box>
  );
};
