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
import { useContext, useEffect } from "react";
import { Context } from "../context/context";
import {
  DARK_SIDE_BG_COLOR,
  DARK_SIDE_BORDER_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_SIDE_BG_COLOR,
  LIGHT_SIDE_BORDER_COLOR,
  LIGHT_TEXT_COLOR,
} from "../styles/style";
import { MAX_NUMBER, MIN_NUMBER } from "../constants/number";

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
  const { isDark } = useContext(Context);

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

  const handleSpinButtonClick = (val) => {
    setArrayLength((prev) => prev + val);
  };

  const generateRandNum = () => {
    const max = MAX_NUMBER;
    const min = MIN_NUMBER;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    if (arrayLength < array.length) {
      setArray(array.slice(0, arrayLength));
    } else if (arrayLength > array.length) {
      const randNum = generateRandNum();
      setArray([...array, randNum]);
    }
  }, [arrayLength]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      width="20vw"
      border={3}
      borderColor={isDark ? DARK_SIDE_BORDER_COLOR : LIGHT_SIDE_BORDER_COLOR}
      rowGap={1}
      p={1}
      bgcolor={isDark ? DARK_SIDE_BG_COLOR : LIGHT_SIDE_BG_COLOR}
      boxShadow="2px 0px 5px 0px rgba(0,0,0,0.5)"
    >
      <Typography
        variant="h6"
        color={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}
      >
        ソート設定
      </Typography>
      <Select
        defaultValue={{ value: "bubble", label: "Bubble sort (交換ソート)" }}
        options={options}
        isMulti={false}
        onChange={(e) => setSortType(e.value)}
        isDisabled={isRunning}
      />
      <Typography color={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}>
        配列要素数
      </Typography>
      <Box display="flex">
        <Button
          variant="outlined"
          onClick={() => handleSpinButtonClick(-1)}
          disabled={isRunning || arrayLength === 2}
        >
          <RemoveCircleOutline />
        </Button>
        <Typography
          variant="h5"
          style={{ margin: "auto 16px" }}
          color={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}
        >
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
                label={
                  <Typography
                    color={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}
                  >
                    {val.label}
                  </Typography>
                }
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
          onClick={() => setArray(getRandArray(0, arrayLength))}
        >
          ランダム配列生成
        </Button>
        <Button
          variant="contained"
          disabled={isRunning}
          onClick={() => setArray(getRandArray(-1, arrayLength))}
        >
          ランダム昇順生成
        </Button>
        <Button
          variant="contained"
          disabled={isRunning}
          onClick={() => setArray(getRandArray(1, arrayLength))}
        >
          ランダム降順生成
        </Button>
      </Box>
    </Box>
  );
};
