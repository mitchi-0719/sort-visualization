// test

export const fetchPost = async (name, price, item_name) => {
  const apiUrl = "https://test-api-one-rose.vercel.app/";

  const body = {
    name: name,
    price: price,
    item_name: item_name,
  };

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};
