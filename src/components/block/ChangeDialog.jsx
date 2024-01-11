import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export const ChangeDialog = ({
  value,
  dialogOpen,
  setDialogOpen,
  idx,
  setArray,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e) => {
    const val = e.target.value;
    val != "" && 0 <= val && val <= 30 && setInputValue(Number(val));
  };

  const handleDone = () => {
    setArray((prev) => {
      const next = [...prev];
      next[idx] = Number(inputValue);
      return next;
    });
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
            min: 0,
            max: 30,
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
