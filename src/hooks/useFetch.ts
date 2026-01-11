export async function useFetch<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  console.log("returning");
  return res.json();
}
