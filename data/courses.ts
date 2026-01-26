import { Course } from '../types';



const B_PHARM_YEARS = [
  {
    id: "sem-1",
    name: "Semester I",
    subjects: [
      { 
        id: "hap-1", 
        name: "Human Anatomy & Physiology – I", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "https://drive.google.com/drive/folders/1iCiQ2yu5YCSiOXJlW6lw817zqjJQ95YB?usp=sharing", pyq: "", syllabus: "https://drive.google.com/drive/folders/1q0adk4vlxMlpoXcp5NNHvfzGDCXTHos7?usp=drive_link" }
      },
      { 
        id: "pa-1", 
        name: "Pharmaceutical Analysis – I", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "https://drive.google.com/drive/folders/1HOM5Md0jeB10buQLBCXdSXD7_arub5kL?usp=drive_link", pyq: "", syllabus: "https://drive.google.com/drive/folders/1q0adk4vlxMlpoXcp5NNHvfzGDCXTHos7?usp=drive_link" }
      },
      { 
        id: "ph-1", 
        name: "Pharmaceutics – I", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "https://drive.google.com/drive/folders/1coEzXQxv4qmD5tGvu3JDfLBlR3oZs0Nk?usp=drive_link", pyq: "", syllabus: "https://drive.google.com/drive/folders/1q0adk4vlxMlpoXcp5NNHvfzGDCXTHos7?usp=drive_link" }
      },
      { 
        id: "pic", 
        name: "Pharmaceutical Inorganic Chemistry", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "https://drive.google.com/drive/folders/1i_Vqd-t48ycj-gA5sZoBXPQHR77TRiu9?usp=drive_link", pyq: "", syllabus: "https://drive.google.com/drive/folders/1q0adk4vlxMlpoXcp5NNHvfzGDCXTHos7?usp=drive_link" }
      },
      { 
        id: "cs", 
        name: "Communication Skills", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1q0adk4vlxMlpoXcp5NNHvfzGDCXTHos7?usp=drive_link" }
      },
      { 
        id: "rb", 
        name: "Remedial Biology / Remedial Mathematics", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1q0adk4vlxMlpoXcp5NNHvfzGDCXTHos7?usp=drive_link" }
      }
    ]
  },
  {
    id: "sem-2",
    name: "Semester II",
    subjects: [
      { 
        id: "hap-2", 
        name: "Human Anatomy & Physiology – II", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/19OxEKhF22NcTDVx2qIPtKmVyfUrxvSqk?usp=drive_link" }
      },
      { 
        id: "poc-1", 
        name: "Pharmaceutical Organic Chemistry – I", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/19OxEKhF22NcTDVx2qIPtKmVyfUrxvSqk?usp=drive_link" }
      },
      { 
        id: "bc", 
        name: "Biochemistry", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/19OxEKhF22NcTDVx2qIPtKmVyfUrxvSqk?usp=drive_link" }
      },
      { 
        id: "patho", 
        name: "Pathophysiology", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/19OxEKhF22NcTDVx2qIPtKmVyfUrxvSqk?usp=drive_link" }
      },
      { 
        id: "cap", 
        name: "Computer Applications in Pharmacy", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/19OxEKhF22NcTDVx2qIPtKmVyfUrxvSqk?usp=drive_link" }
      },
      { 
        id: "es", 
        name: "Environmental Sciences", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/19OxEKhF22NcTDVx2qIPtKmVyfUrxvSqk?usp=drive_link" }
      }
    ]
  },
  {
    id: "sem-3",
    name: "Semester III",
    subjects: [
      { 
        id: "poc-2", 
        name: "Pharmaceutical Organic Chemistry – II", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "https://drive.google.com/drive/folders/1O8KJ7ejyNaA6gLiKcWkUn9kQboByQHqz", pyq: "", syllabus: "https://drive.google.com/drive/folders/1TDb_4wYa_vX9cUFO55qqg6kdBbrkP2JL?usp=drive_link" }
      },
      { 
        id: "pp-1", 
        name: "Physical Pharmaceutics – I", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1TDb_4wYa_vX9cUFO55qqg6kdBbrkP2JL?usp=drive_link" }
      },
      { 
        id: "pm", 
        name: "Pharmaceutical Microbiology", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1TDb_4wYa_vX9cUFO55qqg6kdBbrkP2JL?usp=drive_link" }
      },
      { 
        id: "pe", 
        name: "Pharmaceutical Engineering", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1TDb_4wYa_vX9cUFO55qqg6kdBbrkP2JL?usp=drive_link" }
      }
    ]
  },
  {
    id: "sem-4",
    name: "Semester IV",
    subjects: [
      { 
        id: "poc-3", 
        name: "Pharmaceutical Organic Chemistry – III", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1PvoCEwkX9wHdEj0qXRd0xgHQZTeA89vk?usp=drive_link" }
      },
      { 
        id: "mc-1", 
        name: "Medicinal Chemistry – I", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1PvoCEwkX9wHdEj0qXRd0xgHQZTeA89vk?usp=drive_link" }
      },
      { 
        id: "pp-2", 
        name: "Physical Pharmaceutics – II", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1PvoCEwkX9wHdEj0qXRd0xgHQZTeA89vk?usp=drive_link" }
      },
      { 
        id: "pharm-1", 
        name: "Pharmacology – I", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1PvoCEwkX9wHdEj0qXRd0xgHQZTeA89vk?usp=drive_link" }
      },
      { 
        id: "pg-1", 
        name: "Pharmacognosy – I", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1PvoCEwkX9wHdEj0qXRd0xgHQZTeA89vk?usp=drive_link" }
      }
    ]
  },
  {
    id: "sem-5",
    name: "Semester V",
    subjects: [
      { 
        id: "mc-2", 
        name: "Medicinal Chemistry – II", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1MqrWyrEHif3YEGXUI40lsrir2q_o-bGW?usp=drive_link" }
      },
      { 
        id: "ip-1", 
        name: "Industrial Pharmacy – I", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1MqrWyrEHif3YEGXUI40lsrir2q_o-bGW?usp=drive_link" }
      },
      { 
        id: "pharm-2", 
        name: "Pharmacology – II", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1MqrWyrEHif3YEGXUI40lsrir2q_o-bGW?usp=drive_link" }
      },
      { 
        id: "pg-2", 
        name: "Pharmacognosy – II", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1MqrWyrEHif3YEGXUI40lsrir2q_o-bGW?usp=drive_link" }
      },
      { 
        id: "pj", 
        name: "Pharmaceutical Jurisprudence", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1MqrWyrEHif3YEGXUI40lsrir2q_o-bGW?usp=drive_link" }
      }
    ]
  },
  {
    id: "sem-6",
    name: "Semester VI",
    subjects: [
      { 
        id: "mc-3", 
        name: "Medicinal Chemistry – III", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1Wee-pVwFY1tPcs96VzcTffPXDUbRiI1X?usp=drive_link" }
      },
      { 
        id: "pharm-3", 
        name: "Pharmacology – III", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1Wee-pVwFY1tPcs96VzcTffPXDUbRiI1X?usp=drive_link" }
      },
      { 
        id: "hdt", 
        name: "Herbal Drug Technology", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1Wee-pVwFY1tPcs96VzcTffPXDUbRiI1X?usp=drive_link" }
      },
      { 
        id: "bpk", 
        name: "Biopharmaceutics & Pharmacokinetics", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1Wee-pVwFY1tPcs96VzcTffPXDUbRiI1X?usp=drive_link" }
      },
      { 
        id: "pbt", 
        name: "Pharmaceutical Biotechnology", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1Wee-pVwFY1tPcs96VzcTffPXDUbRiI1X?usp=drive_link" }
      },
      { 
        id: "qa", 
        name: "Quality Assurance", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1Wee-pVwFY1tPcs96VzcTffPXDUbRiI1X?usp=drive_link" }
      }
    ]
  },
  {
    id: "sem-7",
    name: "Semester VII",
    subjects: [
      { 
        id: "ima", 
        name: "Instrumental Methods of Analysis", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/17iL0tWjZ6oG2xTmd7GJHqAm3sipGJlwh?usp=drive_link" }
      },
      { 
        id: "ip-2", 
        name: "Industrial Pharmacy – II", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/17iL0tWjZ6oG2xTmd7GJHqAm3sipGJlwh?usp=drive_link" }
      },
      { 
        id: "pp", 
        name: "Pharmacy Practice", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/17iL0tWjZ6oG2xTmd7GJHqAm3sipGJlwh?usp=drive_link" }
      },
      { 
        id: "ndds", 
        name: "Novel Drug Delivery Systems", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/17iL0tWjZ6oG2xTmd7GJHqAm3sipGJlwh?usp=drive_link" }
      },
      { 
        id: "el-1", 
        name: "Elective – I", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/17iL0tWjZ6oG2xTmd7GJHqAm3sipGJlwh?usp=drive_link" }
      },
      { 
        id: "el-2", 
        name: "Elective – II", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/17iL0tWjZ6oG2xTmd7GJHqAm3sipGJlwh?usp=drive_link" }
      }
    ]
  },
  {
    id: "sem-8",
    name: "Semester VIII",
    subjects: [
      { 
        id: "bsrm", 
        name: "Biostatistics & Research Methodology", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1zTd8gaK48I0c2HVPhWnv0zz7Jc-lQsf7?usp=drive_link" }
      },
      { 
        id: "spp", 
        name: "Social & Preventive Pharmacy", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1zTd8gaK48I0c2HVPhWnv0zz7Jc-lQsf7?usp=drive_link" }
      },
      { 
        id: "pmm", 
        name: "Pharma Marketing Management", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1zTd8gaK48I0c2HVPhWnv0zz7Jc-lQsf7?usp=drive_link" }
      },
      { 
        id: "prs", 
        name: "Pharmaceutical Regulatory Science", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1zTd8gaK48I0c2HVPhWnv0zz7Jc-lQsf7?usp=drive_link" }
      },
      { 
        id: "el-3", 
        name: "Elective – III", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1zTd8gaK48I0c2HVPhWnv0zz7Jc-lQsf7?usp=drive_link" }
      },
      { 
        id: "proj", 
        name: "Project Work / Seminar", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/drive/folders/1zTd8gaK48I0c2HVPhWnv0zz7Jc-lQsf7?usp=drive_link" }
      }
    ]
  }
];

const D_PHARM_YEARS = [
  {
    id: "year-1",
    name: "1st Year",
    subjects: [
      { 
        id: "ph", 
        name: "Pharmaceutics", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/file/d/1GkNPpv_LIPY8e-tK1m9irPNjSPgiBnoB/view?usp=drive_link" }
      },
      { 
        id: "pc", 
        name: "Pharmaceutical Chemistry", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/file/d/1GkNPpv_LIPY8e-tK1m9irPNjSPgiBnoB/view?usp=drive_link" }
      },
      { 
        id: "pg", 
        name: "Pharmacognosy", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/file/d/1GkNPpv_LIPY8e-tK1m9irPNjSPgiBnoB/view?usp=drive_link" }
      },
      { 
        id: "hap", 
        name: "Human Anatomy & Physiology", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/file/d/1GkNPpv_LIPY8e-tK1m9irPNjSPgiBnoB/view?usp=drive_link" }
      },
      { 
        id: "sp", 
        name: "Social Pharmacy", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/file/d/1GkNPpv_LIPY8e-tK1m9irPNjSPgiBnoB/view?usp=drive_link" }
      }
    ]
  },
  {
    id: "year-2",
    name: "2nd Year",
    subjects: [
      { 
        id: "pharm", 
        name: "Pharmacology", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/file/d/1a49vGUBjZXmf7ov9OAu6u_FQ5S64rtPj/view?usp=drive_link" }
      },
      { 
        id: "cpm", 
        name: "Community Pharmacy & Management", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/file/d/1a49vGUBjZXmf7ov9OAu6u_FQ5S64rtPj/view?usp=drive_link" }
      },
      { 
        id: "bcp", 
        name: "Biochemistry & Clinical Pathology", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/file/d/1a49vGUBjZXmf7ov9OAu6u_FQ5S64rtPj/view?usp=drive_link" }
      },
      { 
        id: "pt", 
        name: "Pharmacotherapeutics", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/file/d/1a49vGUBjZXmf7ov9OAu6u_FQ5S64rtPj/view?usp=drive_link" }
      },
      { 
        id: "hcp", 
        name: "Hospital & Clinical Pharmacy", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/file/d/1a49vGUBjZXmf7ov9OAu6u_FQ5S64rtPj/view?usp=drive_link" }
      },
      { 
        id: "ple", 
        name: "Pharmacy Law & Ethics", 
        verified: true,
        coming: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "https://drive.google.com/file/d/1a49vGUBjZXmf7ov9OAu6u_FQ5S64rtPj/view?usp=drive_link" }
      }
    ]
  }
];

const mapResources = (years: any[], type: 'notes' | 'questionBank' | 'pyq' | 'syllabus') => {
  return years.map(year => ({
    ...year,
    subjects: year.subjects.map((subject: any) => ({
      ...subject,
      link: subject.links?.[type] || ""
    }))
  }));
};

export const COURSES: Record<string, Course> = {
  "b-pharm": {
    id: "b-pharm",
    name: "B. Pharmacy",
    description: "4-year PCI-based program (8 semesters).",
    resources: {
      notes: {
        id: "notes",
        name: "Verified Notes",
        icon: "edit_note",
        color: "#10B981",
        years: mapResources(B_PHARM_YEARS, 'notes')
      },
      "question-bank": {
        id: "question-bank",
        name: "Question Bank",
        icon: "quiz",
        color: "#8B5CF6",
        years: mapResources(B_PHARM_YEARS, 'questionBank')
      },
      pyq: {
        id: "pyq",
        name: "Previous Papers",
        icon: "history_edu",
        color: "#FF6B6B",
        years: mapResources(B_PHARM_YEARS, 'pyq')
      },
      syllabus: {
        id: "syllabus",
        name: "Official Syllabus",
        icon: "assignment",
        color: "#405cff",
        years: mapResources(B_PHARM_YEARS, 'syllabus')
      },
    }
  },

  "d-pharm": {
    id: "d-pharm",
    name: "D. Pharmacy",
    description: "2-year PCI-approved diploma program.",
    resources: {
      notes: {
        id: "notes",
        name: "Verified Notes",
        icon: "edit_note",
        color: "#10B981",
        years: mapResources(D_PHARM_YEARS, 'notes')
      },
      "question-bank": {
        id: "question-bank",
        name: "Question Bank",
        icon: "quiz",
        color: "#8B5CF6",
        years: mapResources(D_PHARM_YEARS, 'questionBank')
      },
      pyq: {
        id: "pyq",
        name: "Previous Papers",
        icon: "history_edu",
        color: "#FF6B6B",
        years: mapResources(D_PHARM_YEARS, 'pyq')
      },
      syllabus: {
        id: "syllabus",
        name: "Official Syllabus",
        icon: "assignment",
        color: "#405cff",
        years: mapResources(D_PHARM_YEARS, 'syllabus')
      }
    }
  }
};






// // From here below structure is from (Vidyate - Backup)
// // Broader Structure with subject having all common links inside it









// import { Course } from '../types';

// const B_PHARM_YEARS = [
//   {
//     id: "sem-1",
//     name: "Semester I",
//     subjects: [
//       {
//         id: "hap-1",
//         name: "Human Anatomy & Physiology – I",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pa-1",
//         name: "Pharmaceutical Analysis – I",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "ph-1",
//         name: "Pharmaceutics – I",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pic",
//         name: "Pharmaceutical Inorganic Chemistry",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "cs",
//         name: "Communication Skills",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "rb",
//         name: "Remedial Biology / Remedial Mathematics",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       }
//     ]
//   },
//   {
//     id: "sem-2",
//     name: "Semester II",
//     subjects: [
//       {
//         id: "hap-2",
//         name: "Human Anatomy & Physiology – II",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "poc-1",
//         name: "Pharmaceutical Organic Chemistry – I",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "bc",
//         name: "Biochemistry",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "patho",
//         name: "Pathophysiology",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "cap",
//         name: "Computer Applications in Pharmacy",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "es",
//         name: "Environmental Sciences",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       }
//     ]
//   },
//   {
//     id: "sem-3",
//     name: "Semester III",
//     subjects: [
//       {
//         id: "poc-2",
//         name: "Pharmaceutical Organic Chemistry – II",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pp-1",
//         name: "Physical Pharmaceutics – I",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pm",
//         name: "Pharmaceutical Microbiology",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pe",
//         name: "Pharmaceutical Engineering",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       }
//     ]
//   },
//   {
//     id: "sem-4",
//     name: "Semester IV",
//     subjects: [
//       {
//         id: "poc-3",
//         name: "Pharmaceutical Organic Chemistry – III",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "mc-1",
//         name: "Medicinal Chemistry – I",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pp-2",
//         name: "Physical Pharmaceutics – II",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pharm-1",
//         name: "Pharmacology – I",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pg-1",
//         name: "Pharmacognosy – I",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       }
//     ]
//   },
//   {
//     id: "sem-5",
//     name: "Semester V",
//     subjects: [
//       {
//         id: "mc-2",
//         name: "Medicinal Chemistry – II",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "ip-1",
//         name: "Industrial Pharmacy – I",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pharm-2",
//         name: "Pharmacology – II",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pg-2",
//         name: "Pharmacognosy – II",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pj",
//         name: "Pharmaceutical Jurisprudence",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       }
//     ]
//   },
//   {
//     id: "sem-6",
//     name: "Semester VI",
//     subjects: [
//       {
//         id: "mc-3",
//         name: "Medicinal Chemistry – III",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pharm-3",
//         name: "Pharmacology – III",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "hdt",
//         name: "Herbal Drug Technology",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "bpk",
//         name: "Biopharmaceutics & Pharmacokinetics",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pbt",
//         name: "Pharmaceutical Biotechnology",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "qa",
//         name: "Quality Assurance",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       }
//     ]
//   },
//   {
//     id: "sem-7",
//     name: "Semester VII",
//     subjects: [
//       {
//         id: "ima",
//         name: "Instrumental Methods of Analysis",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "ip-2",
//         name: "Industrial Pharmacy – II",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pp",
//         name: "Pharmacy Practice",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "ndds",
//         name: "Novel Drug Delivery Systems",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "el-1",
//         name: "Elective – I",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "el-2",
//         name: "Elective – II",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       }
//     ]
//   },
//   {
//     id: "sem-8",
//     name: "Semester VIII",
//     subjects: [
//       {
//         id: "bsrm",
//         name: "Biostatistics & Research Methodology",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "spp",
//         name: "Social & Preventive Pharmacy",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "pmm",
//         name: "Pharma Marketing Management",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "prs",
//         name: "Pharmaceutical Regulatory Science",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "el-3",
//         name: "Elective – III",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       },
//       {
//         id: "proj",
//         name: "Project Work / Seminar",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/18KrxQWVdFdcW20gddqwA2yoJX9jfikGK?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1Rsf8LVtgY1FfQvI5drpgQBZmOQ_E7GZx?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/1iFWCJzEYYtfsJ09skiu54xU5QmtokPd2?usp=drive_link"
//         }
//       }
//     ]
//   }
// ];

// const D_PHARM_YEARS = [
//   {
//     id: "year-1",
//     name: "1st Year",
//     subjects: [
//       {
//         id: "ph",
//         name: "Pharmaceutics",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/1R-91Kka9GbhqsE7Ft_A80BlJ3iXukRWH?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1LA4NXS3XoKP2o5O5aYsZLojBbRxafSCm?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/13Dorl8STLELe36uBuTSs1xnPmryQv9Cn?usp=drive_link"
//         }
//       },
//       {
//         id: "pc",
//         name: "Pharmaceutical Chemistry",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/1R-91Kka9GbhqsE7Ft_A80BlJ3iXukRWH?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1LA4NXS3XoKP2o5O5aYsZLojBbRxafSCm?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/13Dorl8STLELe36uBuTSs1xnPmryQv9Cn?usp=drive_link"
//         }
//       },
//       {
//         id: "pg",
//         name: "Pharmacognosy",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/1R-91Kka9GbhqsE7Ft_A80BlJ3iXukRWH?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1LA4NXS3XoKP2o5O5aYsZLojBbRxafSCm?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/13Dorl8STLELe36uBuTSs1xnPmryQv9Cn?usp=drive_link"
//         }
//       },
//       {
//         id: "hap",
//         name: "Human Anatomy & Physiology",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/1R-91Kka9GbhqsE7Ft_A80BlJ3iXukRWH?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1LA4NXS3XoKP2o5O5aYsZLojBbRxafSCm?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/13Dorl8STLELe36uBuTSs1xnPmryQv9Cn?usp=drive_link"
//         }
//       },
//       {
//         id: "sp",
//         name: "Social Pharmacy",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/1R-91Kka9GbhqsE7Ft_A80BlJ3iXukRWH?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1LA4NXS3XoKP2o5O5aYsZLojBbRxafSCm?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/13Dorl8STLELe36uBuTSs1xnPmryQv9Cn?usp=drive_link"
//         }
//       }
//     ]
//   },
//   {
//     id: "year-2",
//     name: "2nd Year",
//     subjects: [
//       {
//         id: "pharm",
//         name: "Pharmacology",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/1R-91Kka9GbhqsE7Ft_A80BlJ3iXukRWH?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1LA4NXS3XoKP2o5O5aYsZLojBbRxafSCm?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/13Dorl8STLELe36uBuTSs1xnPmryQv9Cn?usp=drive_link"
//         }
//       },
//       {
//         id: "cpm",
//         name: "Community Pharmacy & Management",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/1R-91Kka9GbhqsE7Ft_A80BlJ3iXukRWH?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1LA4NXS3XoKP2o5O5aYsZLojBbRxafSCm?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/13Dorl8STLELe36uBuTSs1xnPmryQv9Cn?usp=drive_link"
//         }
//       },
//       {
//         id: "bcp",
//         name: "Biochemistry & Clinical Pathology",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/1R-91Kka9GbhqsE7Ft_A80BlJ3iXukRWH?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1LA4NXS3XoKP2o5O5aYsZLojBbRxafSCm?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/13Dorl8STLELe36uBuTSs1xnPmryQv9Cn?usp=drive_link"
//         }
//       },
//       {
//         id: "pt",
//         name: "Pharmacotherapeutics",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/1R-91Kka9GbhqsE7Ft_A80BlJ3iXukRWH?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1LA4NXS3XoKP2o5O5aYsZLojBbRxafSCm?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/13Dorl8STLELe36uBuTSs1xnPmryQv9Cn?usp=drive_link"
//         }
//       },
//       {
//         id: "hcp",
//         name: "Hospital & Clinical Pharmacy",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/1R-91Kka9GbhqsE7Ft_A80BlJ3iXukRWH?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1LA4NXS3XoKP2o5O5aYsZLojBbRxafSCm?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/13Dorl8STLELe36uBuTSs1xnPmryQv9Cn?usp=drive_link"
//         }
//       },
//       {
//         id: "ple",
//         name: "Pharmacy Law & Ethics",
//         verified: true,
//         coming: true,
//         links: {
//           notes: "",
//           questionBank: "https://drive.google.com/drive/folders/1R-91Kka9GbhqsE7Ft_A80BlJ3iXukRWH?usp=drive_link",
//           pyq: "https://drive.google.com/drive/folders/1LA4NXS3XoKP2o5O5aYsZLojBbRxafSCm?usp=drive_link",
//           syllabus: "https://drive.google.com/drive/folders/13Dorl8STLELe36uBuTSs1xnPmryQv9Cn?usp=drive_link"
//         }
//       }
//     ]
//   }
// ];

// const mapResources = (years: any[], type: 'notes' | 'questionBank' | 'pyq' | 'syllabus') => {
//   return years.map(year => ({
//     ...year,
//     subjects: year.subjects.map((subject: any) => ({
//       ...subject,
//       link: subject.links?.[type] || ""
//     }))
//   }));
// };

// export const COURSES: Record<string, Course> = {
//   "b-pharm": {
//     id: "b-pharm",
//     name: "B. Pharmacy",
//     description: "4-year PCI-based program (8 semesters).",
//     resources: {
//       notes: {
//         id: "notes",
//         name: "Verified Notes",
//         icon: "edit_note",
//         color: "#10B981",
//         years: mapResources(B_PHARM_YEARS, 'notes')
//       },
//       "question-bank": {
//         id: "question-bank",
//         name: "Question Bank",
//         icon: "quiz",
//         color: "#8B5CF6",
//         years: mapResources(B_PHARM_YEARS, 'questionBank')
//       },
//       pyq: {
//         id: "pyq",
//         name: "Previous Papers",
//         icon: "history_edu",
//         color: "#FF6B6B",
//         years: mapResources(B_PHARM_YEARS, 'pyq')
//       },
//       syllabus: {
//         id: "syllabus",
//         name: "Official Syllabus",
//         icon: "assignment",
//         color: "#405cff",
//         years: mapResources(B_PHARM_YEARS, 'syllabus')
//       },
//     }
//   },

//   "d-pharm": {
//     id: "d-pharm",
//     name: "D. Pharmacy",
//     description: "2-year PCI-approved diploma program.",
//     resources: {
//       notes: {
//         id: "notes",
//         name: "Verified Notes",
//         icon: "edit_note",
//         color: "#10B981",
//         years: mapResources(D_PHARM_YEARS, 'notes')
//       },
//       "question-bank": {
//         id: "question-bank",
//         name: "Question Bank",
//         icon: "quiz",
//         color: "#8B5CF6",
//         years: mapResources(D_PHARM_YEARS, 'questionBank')
//       },
//       pyq: {
//         id: "pyq",
//         name: "Previous Papers",
//         icon: "history_edu",
//         color: "#FF6B6B",
//         years: mapResources(D_PHARM_YEARS, 'pyq')
//       },
//       syllabus: {
//         id: "syllabus",
//         name: "Official Syllabus",
//         icon: "assignment",
//         color: "#405cff",
//         years: mapResources(D_PHARM_YEARS, 'syllabus')
//       }
//     }
//   }
// };
