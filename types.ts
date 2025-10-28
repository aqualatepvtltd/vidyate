
export interface Subject {
  name: string;
  link: string;
}

export interface YearData {
  name: string;
  subjects: Subject[];
}

export interface ResourceTypeData {
  name: string;
  icon: string;
  description: string;
  years: { [key: string]: YearData };
}

export interface CourseData {
  name: string;
  description: string;
  resources: { [key: string]: ResourceTypeData };
}

export interface Courses {
  [key: string]: CourseData;
}
