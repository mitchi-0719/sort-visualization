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
import { useContext, useEffect, useState } from "react";
import { darkModeContext } from "../context/DarkModeContext";
import {
  DARK_SIDE_BG_COLOR,
  DARK_SIDE_BORDER_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_SIDE_BG_COLOR,
  LIGHT_SIDE_BORDER_COLOR,
  LIGHT_TEXT_COLOR,
} from "../styles/style";
import { MAX_NUMBER, MIN_NUMBER } from "../constants/number";
import { autoModeContext } from "../context/AutoModeContext";
import { useIsWideSize } from "../feature/useIsWideSize";

export const Setting = ({ array, setSortType, order, setOrder, setArray }) => {
  const { isDark } = useContext(darkModeContext);
  const { autoRunning, autoSpeed, setAutoSpeed } = useContext(autoModeContext);
  const [arrayLength, setArrayLength] = useState(array.length);
  const isWideSize = useIsWideSize();

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

  const handleSpinButtonClick = (val, setState) => {
    setState((prev) => prev + val);
  };

  const generateRandNum = () => {
    const max = MAX_NUMBER;
    const min = MIN_NUMBER;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    setArrayLength(array.length);
  }, [array]);

  useEffect(() => {
    if (arrayLength < array.length) {
      setArray((prev) => prev.slice(0, arrayLength));
    } else if (arrayLength > array.length) {
      const randNum = generateRandNum();
      setArray((prev) => [...prev, randNum]);
    }
  }, [arrayLength]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={isWideSize ? "20vw" : "100vw"}
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
        my={1}
      >
        ソート設定
      </Typography>

      <Box
        display="flex"
        flexDirection={isWideSize ? "column" : "row"}
        justifyContent="space-between"
        height="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="30%"
          rowGap={1}
        >
          <Select
            defaultValue={{
              value: "bubble",
              label: "Bubble sort (交換ソート)",
            }}
            options={options}
            isMulti={false}
            onChange={(e) => setSortType(e.value)}
            isDisabled={autoRunning}
          />
          <Box>
            <Typography color={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}>
              配列要素数
            </Typography>
            <Box display="flex">
              <Button
                variant="outlined"
                onClick={() => handleSpinButtonClick(-1, setArrayLength)}
                disabled={autoRunning || arrayLength === 2}
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
                onClick={() => handleSpinButtonClick(1, setArrayLength)}
                disabled={autoRunning || arrayLength === 10}
              >
                <AddCircleOutline />
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="40%"
          rowGap={1}
        >
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
                    disabled={autoRunning}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          <Box>
            <Typography color={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}>
              オートモード速度
            </Typography>
            <Box display="flex">
              <Button
                variant="outlined"
                onClick={() => handleSpinButtonClick(-50, setAutoSpeed)}
                disabled={autoRunning || autoSpeed === 300}
              >
                <RemoveCircleOutline />
              </Button>
              <Typography
                variant="h5"
                style={{ margin: "auto 16px" }}
                color={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}
              >
                {`${autoSpeed}ms`}
              </Typography>
              <Button
                variant="outlined"
                onClick={() => handleSpinButtonClick(50, setAutoSpeed)}
                disabled={autoRunning || autoSpeed === 600}
              >
                <AddCircleOutline />
              </Button>
            </Box>
          </Box>
        </Box>

        <Box rowGap={1} display="flex" flexDirection="column">
          <Button
            variant="contained"
            disabled={autoRunning}
            onClick={() => setArray(getRandArray(arrayLength))}
          >
            ランダム配列生成
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
