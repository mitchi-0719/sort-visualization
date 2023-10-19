export const apiFetch = async (sort_type, is_asc, values) => {

  const body = {
    sort_type: sort_type,
    is_asc: is_asc,
    values: values,
  };

  const res = await fetch(REACT_APP_SORT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data;
};
