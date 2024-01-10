import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const ChangeDialog = ({
  value,
  dialogOpen,
  handleClose,
  idx,
  setArray,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const val = e.target.value;
    -30 <= val && val <= 30 && setInputValue(val);
  };

  const handleDone = () => {
    setArray((prev) => {
      const next = [...prev];
      next[idx] = Number(inputValue);
      return next;
    });
    handleClose();
  };

  return (
    <Dialog open={dialogOpen} onClose={handleClose}>
      <DialogContent>
        <TextField
          type="number"
          inputProps={{
            min: -30,
            max: 30,
          }}
          value={inputValue}
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
