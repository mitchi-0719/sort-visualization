import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Select from "react-select";
import { getRandArray } from "../feature/getRandArray";

export const Setting = ({
  setSortType,
  order,
  setOrder,
  setArray,
  isRunning,
}) => {
  const options = [
    { value: "bubble", label: "Bubble sort (交換ソート)" },
    // { value: "selection", label: "Selection sort (選択ソート)" },
    // { value: "insertion", label: "Insertion sort (挿入ソート)" },
    // { value: "quick", label: "Quick sort" },
    // { value: "heap", label: "Heap sort" },
    // { value: "merge", label: "Merge sort" },
  ];

  const radioValues = [
    { value: "asc", label: "昇順" },
    { value: "desc", label: "降順" },
  ];

  // const handleChange = (e) => {
  //   if (2 <= e.target.value <= 10) {
  //     setArrayCount(e.target.value);
  //   }
  // };

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
      {/* <TextField
        type="number"
        label="配列の要素数"
        defaultValue={arrayCount}
        onChange={handleChange}
        inputProps={{ min: 2, max: 10 }}
      /> */}
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
          onClick={() => getRandArray(0, setArray)}
        >
          ランダム配列生成
        </Button>
        <Button
          variant="contained"
          disabled={isRunning}
          onClick={() => getRandArray(-1, setArray)}
        >
          ランダム昇順生成
        </Button>
        <Button
          variant="contained"
          disabled={isRunning}
          onClick={() => getRandArray(1, setArray)}
        >
          ランダム降順生成
        </Button>
      </Box>
    </Box>
  );
};
