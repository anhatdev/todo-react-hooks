import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  async function fetchData() {
    const res = await fetch(url);
    const json = await res.json();
    setData(json.items);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return data;
}
