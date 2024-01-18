import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MAX_NUMBER, MIN_NUMBER } from "../../constants/number";

export const ChangeDialog = ({
  value,
  dialogOpen,
  setDialogOpen,
  idx,
  setArray,
  setTrigger,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e) => {
    const val = e.target.value;
    const min = MIN_NUMBER;
    const max = MAX_NUMBER;
    val != "" && min <= val && val <= max && setInputValue(Number(val));
  };

  const handleDone = () => {
    setArray((prev) => {
      const next = [...prev];
      next[idx] = Number(inputValue);
      return next;
    });
    setTrigger((prev) => !prev);
    handleClose();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleDone();
    }
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onClose={handleClose} onKeyDown={handleKeyDown}>
      <DialogContent>
        <TextField
          type="number"
          inputProps={{
            min: MIN_NUMBER,
            max: MAX_NUMBER,
          }}
          defaultValue={value}
          onChange={handleChange}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          cancel
        </Button>
        <Button variant="contained" onClick={handleDone}>
          done
        </Button>
      </DialogActions>
    </Dialog>
  );
};
