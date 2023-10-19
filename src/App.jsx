import { useState, useEffect } from "react";
import { Header } from "./Components/Header/Header";
import { fetchGet } from "./api/fetchGet";
import { fetchPost } from "./api/fetchPost";

function App() {
  const [getInput, setGetInput] = useState(0);
  const [postInput, setPostInput] = useState(0);

  const getHandleChange = (n) => {
    setGetInput(n);
  };

  const getHandleClick = (n) => {
    const data = fetchGet(Number(n));
    data.then((data) => console.log("data=", data));
  };

  const postHandleChange = (n) => {
    setPostInput(n);
  };

  const postHandleClick = (n) => {
    const data = fetchPost("panda", Number(n), "chocolate");
    data.then((data) => console.log("data=", data));
  };

  return (
    <>
      <Header />
      <h1>Hello, World!</h1>
      <div>
        <h2>getのテスト</h2>
        <input
          type="number"
          name="number"
          id="number"
          onChange={(e) => getHandleChange(e.target.value)}
        />
        <button onClick={() => getHandleClick(getInput)}>フェッチget</button>
      </div>
      <div>
        <h2>postのテスト</h2>
        <input
          type="number"
          name="number"
          id="number"
          onChange={(e) => postHandleChange(e.target.value)}
        />
        <button onClick={() => postHandleClick(postInput)}>フェッチpost</button>
      </div>
    </>
  );
}

export default App;
