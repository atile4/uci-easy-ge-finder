export type response = {
  ok: boolean;
  data: {
    items: Course[];
  };
}

//GE List Types
export type Course = {
  id: string;
  department: string;
  courseNumber: string;
  courseNumeric: number;
  school: string;
};

export type Display = {
  courses: Course[];
  selectedGE: string | null;
};

export type Submit = {
  setSelectedGE: (value: string) => void;
};

export type responseGrade = { 
  ok: boolean; 
  data: {
    averageGPA: number; 
    courseNumber: string;
    department: string;
    // gradeACount: string;
    // gradeBCount: string; 
    // gradeCCount: string; 
    // gradeDCount: string; 
    // gradeFCount: string; 

    gradeACount: number;
    gradeBCount: number; 
    gradeCCount: number; 
    gradeDCount: number; 
    gradeFCount: number;
    gradeNPCount?: number;
    gradePCount?: number;
    gradeWCount?: number;

  }[]; 
}