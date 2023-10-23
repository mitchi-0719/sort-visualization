import Select from "react-select";

export const SortSetting = ({sortType, setSortType, order, setOrder}) => {

  const options = [
    { value: "bubble", label: "Bubble sort (交換ソート)" },
    { value: "selection", label: "Selection sort (選択ソート)" },
    { value: "insertion", label: "Insertion sort (挿入ソート)" },
    { value: "quick", label: "Quick sort" },
    { value: "heap", label: "Heap sort" },
    { value: "merge", label: "Merge sort" },
  ];

  const radioValues = [
    { value: "asc", label: "昇順" },
    { value: "desc", label: "降順" },
  ];

  return (
    <>
      <div>
        <h3>ソート種別</h3>
        <Select
          options={options}
          isMulti={false}
          onChange={(e) => setSortType(e.value)}
        />
      </div>
      <div>
        <h3>昇順・降順</h3>
        {radioValues.map((val) => (
          <label key={val.value}>
            <input
              type="radio"
              value={val.value}
              name="order-select"
              onChange={(e) => setOrder(e.target.value)}
              checked={order === val.value}
            />
            {val.label}
          </label>
        ))}
      </div>
    </>
  );
};
