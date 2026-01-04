export type response = {
  ok: boolean;
  data: {
    items : any;
  };
}

export type responseCourses = {
  ok: boolean;
  data: {
    items: Course[];
  };
}

export type responseGrades = {
  ok: boolean;
  data: GradeData[];
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

export type GradeData = { 
    averageGPA: number; 
    courseNumber: string;
    department: string;
    gradeACount: number;
    gradeBCount: number; 
    gradeCCount: number; 
    gradeDCount: number; 
    gradeFCount: number;
    gradeNPCount?: number;
    gradePCount?: number;
    gradeWCount?: number;
}