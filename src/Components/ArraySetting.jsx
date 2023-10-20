export const ArraySetting = ({ array, setArray }) => {

  const handleChange = (n, i) => {
    setArray(array.map((value, index) => (index === i ? n : value)));
  };

  return (
    <>
      <h2>配列設定</h2>
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

      <div>
        <button>ランダム配列生成</button>
        <button>ランダム昇順生成</button>
        <button>ランダム降順生成</button>
      </div>
    </>
  );
};
