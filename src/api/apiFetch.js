export const apiFetch = async (sort_type, is_asc, values) => {
  const body = {
    sort_type: sort_type,
    is_asc: is_asc,
    values: values,
  };

  const API_URL = "https://sort-api.vercel.app/";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Response:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
