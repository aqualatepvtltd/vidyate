export interface UserCredential {
  id: string;
  pass: string;
  name: string;
  email: string;
  rollNo?: string;
  batch?: string;
}

export const userCredentials: UserCredential[] = [
  {
    id: "student@vidyate.com",
    pass: "vidyate2026",
    name: "Aditya Sharma",
    email: "student@vidyate.com",
    rollNo: "VID/2026/042",
    batch: "B.Pharm Final Year"
  },
  {
    id: "candidate101",
    pass: "pharma123",
    name: "Priya Patel",
    email: "priya.patel@gmail.com",
    rollNo: "VID/2026/101",
    batch: "GPAT Aspirant"
  },
  {
    id: "exam@vidyate.in",
    pass: "exam2026",
    name: "Rahul Verma",
    email: "rahul.verma@vidyate.in",
    rollNo: "VID/2026/088",
    batch: "Pharm.D 5th Year"
  },
  {
    id: "demo",
    pass: "demo123",
    name: "Demo Candidate",
    email: "demo@vidyate.com",
    rollNo: "DEMO-999",
    batch: "Mock Test Access"
  },
  {
    id: "admin",
    pass: "admin123",
    name: "Proctor Evaluator",
    email: "admin@vidyate.com",
    rollNo: "ADMIN-001",
    batch: "Evaluator"
  }
];

export default userCredentials;
