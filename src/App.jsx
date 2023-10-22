import { ButtonArea } from "./Components/ButtonArea";
import { Header } from "./Components/Header";
import { Setting } from "./Components/Setting";
import { SortArea } from "./Components/SortArea";
import { useState } from "react";

function App() {
  const [sortType, setSortType] = useState("bubble");
  const [order, setOrder] = useState("asc");
  const [array, setArray] = useState([...Array(10)]);

  return (
    <>
      <Header />

      <div>
        <Setting
          sortType={sortType}
          setSortType={setSortType}
          order={order}
          setOrder={setOrder}
          array={array}
          setArray={setArray}
        />
        <button>ソート実行</button>
      </div>
      <SortArea />
      <ButtonArea />
    </>
  );
}

export default App;
