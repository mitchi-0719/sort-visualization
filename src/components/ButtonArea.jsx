import { Button } from "@mui/material";
import { PlayCircle } from "@mui/icons-material/";
import styles from "../styles/ButtonArea.module.css"

export const ButtonArea = () => {
  return (
    <div className={styles.container}>
      <Button variant="contained">解説</Button>
      <Button variant="contained">
        <PlayCircle className={styles.reverse}/>
        戻る
      </Button>
      <Button variant="contained">
        進む
        <PlayCircle />
      </Button>
      <Button variant="contained">リセット</Button>
    </div>
  );
};
