import { useEffect, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export default function Fetcher() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${count}`
    );
    const data = await res.json();
    setData(data);
    setLoading(false);
    setCount((count) => count + 1);
  };

  return (
    <div class="flex gap-2 w-full">
      <Button onClick={fetchData}>Fetch {count}</Button>
      <p class="flex-grow-1 font-bold text-xl">
        {loading ? "Loading..." : data ? JSON.stringify(data) : "No data"}
      </p>
    </div>
  );
}
