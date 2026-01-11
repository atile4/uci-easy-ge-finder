// Custom type definitions used in the project.

// Fetch response data types
export type Response = {
  ok: boolean;
  data: Array<CourseData | null>;
};

export type CourseData = {
  averageGPA: number;
  courseNumber: string;
  year: string;
  department: string;
  geCategories: Array<string>;
  gradeACount: number;
  gradeBCount: number;
  gradeCCount: number;
  gradeDCount: number;
  gradeFCount: number;
  gradePCount: number;
  gradeNPCount: number;
};

// Filter Types
export type FilterParams = {
  geCategory: string;
  ABRatio: number;
  timeFrame: string;
  department: string;
  multipleGE: boolean;
};

export type SearchParamType = {
  searchQuery: string;
  setSearchQuery: (e: string) => void;
  showFilters: boolean;
  setShowFilters: (e: boolean) => void;
  filters: FilterParams;
  setFilters: (e: FilterParams) => void;
};

// export type response = {
//   ok: boolean;
//   data: {
//     items: any;
//   };
// };

// export type responseCourses = {
//   ok: boolean;
//   data: {
//     items: Course[];
//   };
// };

// export type responseGrades = {
//   ok: boolean;
//   data: GradeData[];
// };

//GE List Types
// export type Course = {
//   id: string;
//   department: string;
//   courseNumber: string;
//   courseNumeric: number;
//   school: string;
// };

// export type Display = {
//   courses: Course[];
//   selectedGE: string | null;
// };

export type Submit = {
  setSelectedGE: (value: string) => void;
};

// export type GradeData = {
//   averageGPA: number;
//   courseNumber: string;
//   department: string;
//   gradeACount: number;
//   gradeBCount: number;
//   gradeCCount: number;
//   gradeDCount: number;
//   gradeFCount: number;
//   gradeNPCount?: number;
//   gradePCount?: number;
//   gradeWCount?: number;
// };
