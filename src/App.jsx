import { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { fetchGet } from "./api/fetchGet";
import { fetchPost } from "./api/fetchPost";
import { apiFetch } from "./api/apiFetch";

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
    </>
  );
}

export default App;
