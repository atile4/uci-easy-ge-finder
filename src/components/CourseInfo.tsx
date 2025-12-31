import { responseGrade } from "../types";
import { useFetch } from "../hooks/useFetch";

type CourseID = {
  department : string
  number : string
};

const url = "https://anteaterapi.com/v2/rest"

export default function CourseInfo({ department, number } : CourseID) {
  
  const { data, isPending, error} = useFetch<responseGrade | null>(`${url}/grades/aggregateByCourse?courseNumber=${number}&department=${department}`) 
  
  const info = data?.data[0];
  
  return (
    <>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isPending && info &&     
        <div className="course-info">
          <p>Number of A's: {info.gradeACount}</p>
          <p>Number of B's: {info.gradeBCount}</p>
          <p>Number of C's: {info.gradeCCount}</p>
          <p>Average GPA: {info.averageGPA}</p>
        </div> 
      }
      {!isPending && !info && <p>Could not retrieve data.</p>}

    </>

  )
}
