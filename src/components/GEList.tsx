import styles from "./GEList.module.css"
import { Display } from "../types";
import { useState } from "react";
import CourseInfo from "./CourseInfo";

export default function GEList({ courses, selectedGE }: Display) {
  const [expandedID, setExpandedID] = useState<string | null>(null)

  const handleClick = (id : string) => {
    setExpandedID(expandedID === id ? null : id)
    
  }

  if (!courses) return (
    <div><h2>Please select a Gen Ed Category.</h2></div>
  );
  
  return (
    <div className="class-list">
      <div>
        <h2>{selectedGE}</h2>
      </div>
      {courses.map((course) => {
        const isExpanded = (expandedID === course.id)
        
        return (
          <div 
            key={course.id} 
            className={`${styles["course-card"]} ${isExpanded ? styles.expanded : ""}`} 
            onClick={() => {handleClick(course.id)}}
          >
            <h3>{course.department} {course.courseNumber}</h3>
            {isExpanded && 
              <CourseInfo department = {course.department} number = {course.courseNumber} />
            }
          </div>
        )


    })}

    </div>
  )
}
