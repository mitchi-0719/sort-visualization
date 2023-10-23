import { ArraySetting } from "./ArraySetting";
import { SortSetting } from "./SortSetting";
import { useState } from "react";
import styles from "../styles/Setting.module.css";
import { Button } from "@mui/material";

export const Setting = (props) => {
  const { sortType, setSortType, order, setOrder, array, setArray } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Button onClick={() => setOpen((prev) => !prev)} variant="contained" className={styles.btn}>
        設定
      </Button>
      {open && (
        <div className={styles.settingArea}>
          <SortSetting
            sortType={sortType}
            setSortType={setSortType}
            order={order}
            setOrder={setOrder}
          />
          <ArraySetting array={array} setArray={setArray} />
        </div>
      )}
    </div>
  );
};
