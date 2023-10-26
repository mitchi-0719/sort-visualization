import { Button } from "@mui/material";
import styles from "../styles/Header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Sort-visualization</h1>
      <Button variant="contained">使い方</Button>
    </header>
  );
}