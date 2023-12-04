import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Select from "react-select";
import { getRandArray } from "../../feature/getRandArray";

export const Setting = ({ setSortType, order, setOrder, setArray }) => {
  const options = [
    { value: "bubble", label: "Bubble sort (交換ソート)" },
    { value: "selection", label: "Selection sort (選択ソート)" },
    { value: "insertion", label: "Insertion sort (挿入ソート)" },
    { value: "quick", label: "Quick sort" },
    { value: "heap", label: "Heap sort" },
    { value: "merge", label: "Merge sort" },
  ];

  const radioValues = [
    { value: "asc", label: "昇順" },
    { value: "desc", label: "降順" },
  ];

  return (
    <>
      <Select
        defaultValue={{ value: "bubble", label: "Bubble sort (交換ソート)" }}
        options={options}
        isMulti={false}
        onChange={(e) => setSortType(e.value)}
      />
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
              />
            );
          })}
        </RadioGroup>
      </FormControl>

      <Box>
        <Button variant="contained" onClick={() => getRandArray(0, setArray)}>
          ランダム配列生成
        </Button>
        <Button variant="contained" onClick={() => getRandArray(-1, setArray)}>
          ランダム昇順生成
        </Button>
        <Button variant="contained" onClick={() => getRandArray(1, setArray)}>
          ランダム降順生成
        </Button>
      </Box>
    </>
  );
};
