import { Button, Dialog, DialogActions } from "@mui/material";

export const ChangeDialog = () => {
  return (
    <Dialog open={true}>
      <DialogActions>
        <Button>cancel</Button>
        <Button>done</Button>
      </DialogActions>
    </Dialog>
  )
};
