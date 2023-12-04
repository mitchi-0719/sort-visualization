import style from "../../styles/Block.module.css";

export const SortBlock = ({ value, handleChange, index }) => {
  return (
    <input
      type="number"
      className={style.input}
      min={-10000}
      max={10000}
      value={value}
      onChange={(e) => handleChange(e.target.value, index)}
    />
  );
};
