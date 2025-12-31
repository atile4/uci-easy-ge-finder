import { useState } from "react";
import GenEdInput from "../components/GEInput";
import GEList from "../components/GEList";
import { useFetch } from "../hooks/useFetch";
import { response } from "../types";

const url = "https://anteaterapi.com/v2/rest/coursesCursor?geCategory="

export default function Home() {
  const [selectedGE, setSelectedGE] = useState<string | null>(null);

  const { data, isPending, error } = useFetch<response | null>(
    selectedGE ? url + selectedGE : null
  )

  const courses = data?.data.items;

  return (
    <>
      <GenEdInput setSelectedGE={setSelectedGE} />
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isPending && data && <GEList courses={courses || []} selectedGE={selectedGE}/>}
    </>
  );
}