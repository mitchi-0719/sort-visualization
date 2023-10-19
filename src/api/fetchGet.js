// test

export const fetchGet = async (num) => {
  const apiUrl = "https://test-api-one-rose.vercel.app/";
  console.log("url =", `${apiUrl}?num=${num}`);
  const res = await fetch(`${apiUrl}?num=${num}`);
  const data = await res.json();
  return data;
};
