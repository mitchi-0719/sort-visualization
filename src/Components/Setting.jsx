import { ArraySetting } from "./ArraySetting";
import { SortSetting } from "./SortSetting";
import { useState } from "react";

export const Setting = (props) => {
  const [open, setOpen] = useState(false);
  const { sortType, setSortType, order, setOrder, array, setArray } = props;

  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)}>設定</button>
      {open && (
        <div>
          <SortSetting sortType={sortType} setSortType={setSortType} order={order} setOrder={setOrder}/>
          <ArraySetting array={array} setArray={setArray}/>
        </div>
      )}
    </>
  );
};
