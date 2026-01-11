import { useState, useEffect } from "react";

export async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  console.log("returning");
  return res.json();
}

export function useFetch<response>(url: string | null) {
  const [data, setData] = useState<response | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!url) return; // skip fetching if no URL

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsPending(true);
      setError("");

      try {
        const res = await fetch(url, { signal });
        if (!res.ok) throw new Error(res.statusText);

        const json: response = await res.json();

        console.log(json);

        setData(json);
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setError("Could not fetch the data");
          }
        } else {
          // err is not an Error object
          setError("Could not fetch the data");
        }
      } finally {
        setIsPending(false);
      }
    };

    fetchData();

    return () => {
      controller.abort(); // cleanup on unmount
    };
  }, [url]);

  return { data, isPending, error };
}
