import { useState, useEffect } from "react";

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

        console.log(json)
        
        setData(json)

      } catch (err: unknown) {
        if ((err as any).name === "AbortError") {
          console.log("Fetch aborted");
        } else {
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
