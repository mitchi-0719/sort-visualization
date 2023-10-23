import { Button } from "@mui/material";
import { ButtonArea } from "./components/ButtonArea";
import { Header } from "./components/Header";
import { Setting } from "./components/Setting";
import { SortArea } from "./components/SortArea";
import { useState } from "react";
import styles from "./styles/App.module.css";

function App() {
  const [sortType, setSortType] = useState("bubble");
  const [order, setOrder] = useState("asc");
  const [array, setArray] = useState([...Array(10)]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />

      <div className={styles.main}>
        <Setting
          sortType={sortType}
          setSortType={setSortType}
          order={order}
          setOrder={setOrder}
          array={array}
          setArray={setArray}
        />
        <Button variant="contained" className={styles.btn}>
          ソート実行
        </Button>
      </div>
      <SortArea />
      <ButtonArea />
    </>
  );
}

export default App;
