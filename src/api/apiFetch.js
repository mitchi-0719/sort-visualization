export const apiFetch = async (sort_type, is_asc, values) => {
  console.log("sort_type:", sort_type);
  console.log("is_asc:", is_asc);
  console.log("values:", values);

  const body = {
    sort_type: sort_type,
    is_asc: is_asc,
    values: values,
  };

  const API_URL = "https://sort-api.vercel.app/";

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    mode: "no-cors",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};
