import styles from "../styles/ArraySetting.module.css"
import { Button } from "@mui/material";

export const ArraySetting = ({ array, setArray }) => {
  const handleChange = (n, i) => {
    setArray(array.map((value, index) => (index === i ? n : value)));
  };

  return (
    <>
      <div>
        <h3>配列設定</h3>
        <div>
          {array.map((value, index) => (
            <div key={index}>
              <label>{index} </label>
              <input
                type="number"
                id={index}
                name="value"
                value={value}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.buttons}>
        <Button variant="contained">ランダム配列生成</Button>
        <Button variant="contained">ランダム昇順生成</Button>
        <Button variant="contained">ランダム降順生成</Button>
      </div>
    </>
  );
};
