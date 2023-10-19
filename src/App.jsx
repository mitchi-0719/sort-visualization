import { useState, useEffect } from "react";
import { Header } from "./Components/Header/Header";
import { fetchGet } from "./api/fetchGet";

function App() {
  const [input, setInput] = useState(0);
  useEffect(() => {
    const data = fetchGet(10);
    data.then((data) => console.log("data=", data));
  }, []);

  const handleChange = (n) => {
    setInput(n);
  };

  const handleClick = (n) => {
    const data = fetchGet(Number(n));
    data.then((data) => console.log("data=", data));
  };

  return (
    <>
      <Header />
      <div>
        <h1>Hello, World!</h1>
        <input
          type="number"
          name="number"
          id="number"
          onChange={(e) => handleChange(e.target.value)}
        />
        <button onClick={() => handleClick(input)}>フェッチ</button>
      </div>
    </>
  );
}

export default App;
