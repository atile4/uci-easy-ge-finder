import type { CourseData } from "../types";

export const fullFilter = (
  data: (CourseData | null)[],
  GE: string,
  dep: string,
  year: string,
  hasOverlap: boolean,
  ABRatio: number,
  searchQuery: string
) => {
  let filteredData = searchQuery ? filterByQuery(data, searchQuery) : [...data];

  filteredData = filterByGE(filteredData, GE);
  filteredData = filterByDep(filteredData, dep);
  filteredData = hasOverlap ? filterByOverlap(filteredData) : filteredData;
  filteredData = filterByRatio(filteredData, ABRatio);

  if (year === "all") {
    filteredData = groupDataWithoutYear(filteredData);
  } else {
    filteredData = filterByYear(filteredData, year);
    filteredData = groupData(filteredData);
  }

  return filteredData;
};

export const filterByQuery = (data: (CourseData | null)[], query: string) => {
  return data?.filter((course) => {
    //@TODO search logic here
    if (course) {
      const lower_course = (
        course.department + course.courseNumber
      ).toLowerCase();
      return lower_course.includes(query);
    }
  });
};

export const filterByGE = (data: (CourseData | null)[], GE: string) => {
  return data?.filter(
    (course) => course?.geCategories && course?.geCategories.includes(GE)
  );
};

export const filterByDep = (data: (CourseData | null)[], dep: string) => {
  return data?.filter((course) => course?.department.includes(dep));
};

export const filterByOverlap = (data: (CourseData | null)[]) => {
  return data?.filter((course) =>
    course?.geCategories ? course.geCategories.length > 1 : false
  );
};

export const filterByYear = (data: (CourseData | null)[], year: string) => {
  return data?.filter((course) => course?.year === year);
};

export const filterByRatio = (data: (CourseData | null)[], ratio: number) => {
  return data?.filter((course) => {
    if (course && course.gradeACount && course.gradeBCount) {
      return course.gradeACount / course.gradeBCount > ratio;
    }
  });
};

export const groupDataWithoutYear = (data: (CourseData | null)[]) => {
  return Object.values(
    data
      .filter((c) => c.geCategories.length > 0)

      // GROUP BY department, courseNumber, geCategories
      .reduce<
        Record<
          string,
          {
            department: string;
            courseNumber: string;
            geCategories: string[];

            gradeACount: number;
            gradeBCount: number;
            gradeCCount: number;
            gradeDCount: number;
            gradeFCount: number;

            gpaSum: number;
            gpaCount: number;
          }
        >
      >((acc, c) => {
        // normalize array for grouping
        const normalizedGE = [...c.geCategories].sort();
        const geKey = JSON.stringify(normalizedGE);

        const key = `${c.department}|${c.courseNumber}|${geKey}`;

        if (!acc[key]) {
          acc[key] = {
            department: c.department,
            courseNumber: c.courseNumber,
            geCategories: normalizedGE,

            gradeACount: 0,
            gradeBCount: 0,
            gradeCCount: 0,
            gradeDCount: 0,
            gradeFCount: 0,

            gpaSum: 0,
            gpaCount: 0,
          };
        }

        acc[key].gradeACount += c.gradeACount;
        acc[key].gradeBCount += c.gradeBCount;
        acc[key].gradeCCount += c.gradeCCount;
        acc[key].gradeDCount += c.gradeDCount;
        acc[key].gradeFCount += c.gradeFCount;

        acc[key].gpaSum += c.averageGPA;
        acc[key].gpaCount += 1;

        return acc;
      }, {})
  ).map((g) => ({
    department: g.department,
    courseNumber: g.courseNumber,
    geCategories: g.geCategories,
    gradeACount: g.gradeACount,
    gradeBCount: g.gradeBCount,
    gradeCCount: g.gradeCCount,
    gradeDCount: g.gradeDCount,
    gradeFCount: g.gradeFCount,
    averageGPA: g.gpaSum / g.gpaCount,
  }));
};

// SELECT department, courseNumber, geCategories, sum(gradeACount), sum(gradeBCount), avg(averageGPA)
//  FROM data
//  WHERE geCategories.length > 0
//  GROUP BY department, courseNumber, geCategories
export const groupData = (data: (CourseData | null)[]) => {
  return Object.values(
    data
      // WHERE geCategories.length > 0
      .filter((c) => c.geCategories.length > 0)

      // GROUP BY department, courseNumber, geCategories, year
      .reduce<
        Record<
          string,
          {
            department: string;
            courseNumber: string;
            year: string;
            geCategories: string[];

            gradeACount: number;
            gradeBCount: number;
            gradeCCount: number;
            gradeDCount: number;
            gradeFCount: number;

            gpaSum: number;
            gpaCount: number;
          }
        >
      >((acc, c) => {
        // normalize geCategories so order doesn't matter
        const normalizedGE = [...c.geCategories].sort();
        const geKey = JSON.stringify(normalizedGE);

        const key = `${c.department}|${c.courseNumber}|${c.year}|${geKey}`;

        if (!acc[key]) {
          acc[key] = {
            department: c.department,
            courseNumber: c.courseNumber,
            year: c.year,
            geCategories: normalizedGE,

            gradeACount: 0,
            gradeBCount: 0,
            gradeCCount: 0,
            gradeDCount: 0,
            gradeFCount: 0,

            gpaSum: 0,
            gpaCount: 0,
          };
        }

        acc[key].gradeACount += c.gradeACount;
        acc[key].gradeBCount += c.gradeBCount;
        acc[key].gradeCCount += c.gradeCCount;
        acc[key].gradeDCount += c.gradeDCount;
        acc[key].gradeFCount += c.gradeFCount;

        acc[key].gpaSum += c.averageGPA;
        acc[key].gpaCount += 1;

        return acc;
      }, {})
  ).map((g) => ({
    department: g.department,
    courseNumber: g.courseNumber,
    year: g.year,
    geCategories: g.geCategories,
    gradeACount: g.gradeACount,
    gradeBCount: g.gradeBCount,
    gradeCCount: g.gradeCCount,
    gradeDCount: g.gradeDCount,
    gradeFCount: g.gradeFCount,
    averageGPA: g.gpaSum / g.gpaCount,
  }));
};
