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
        links: { notes: "", questionBank: "https://drive.google.com/drive/folders/1iCiQ2yu5YCSiOXJlW6lw817zqjJQ95YB?usp=sharing", pyq: "", syllabus: "" }
      },
      { 
        id: "pa-1", 
        name: "Pharmaceutical Analysis – I", 
        verified: true,
        links: { notes: "", questionBank: "https://drive.google.com/drive/folders/1HOM5Md0jeB10buQLBCXdSXD7_arub5kL?usp=drive_link", pyq: "", syllabus: "" }
      },
      { 
        id: "ph-1", 
        name: "Pharmaceutics – I", 
        verified: true,
        links: { notes: "", questionBank: "https://drive.google.com/drive/folders/1coEzXQxv4qmD5tGvu3JDfLBlR3oZs0Nk?usp=drive_link", pyq: "", syllabus: "" }
      },
      { 
        id: "pic", 
        name: "Pharmaceutical Inorganic Chemistry", 
        verified: true,
        links: { notes: "", questionBank: "https://drive.google.com/drive/folders/1i_Vqd-t48ycj-gA5sZoBXPQHR77TRiu9?usp=drive_link", pyq: "", syllabus: "" }
      },
      { 
        id: "cs", 
        name: "Communication Skills", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "rb", 
        name: "Remedial Biology / Remedial Mathematics", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
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
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "poc-1", 
        name: "Pharmaceutical Organic Chemistry – I", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "bc", 
        name: "Biochemistry", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "patho", 
        name: "Pathophysiology", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "cap", 
        name: "Computer Applications in Pharmacy", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "es", 
        name: "Environmental Sciences", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
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
        links: { notes: "", questionBank: "https://drive.google.com/drive/folders/1O8KJ7ejyNaA6gLiKcWkUn9kQboByQHqz", pyq: "", syllabus: "" }
      },
      { 
        id: "pp-1", 
        name: "Physical Pharmaceutics – I", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pm", 
        name: "Pharmaceutical Microbiology", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pe", 
        name: "Pharmaceutical Engineering", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
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
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "mc-1", 
        name: "Medicinal Chemistry – I", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pp-2", 
        name: "Physical Pharmaceutics – II", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pharm-1", 
        name: "Pharmacology – I", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pg-1", 
        name: "Pharmacognosy – I", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
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
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "ip-1", 
        name: "Industrial Pharmacy – I", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pharm-2", 
        name: "Pharmacology – II", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pg-2", 
        name: "Pharmacognosy – II", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pj", 
        name: "Pharmaceutical Jurisprudence", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
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
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pharm-3", 
        name: "Pharmacology – III", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "hdt", 
        name: "Herbal Drug Technology", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "bpk", 
        name: "Biopharmaceutics & Pharmacokinetics", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pbt", 
        name: "Pharmaceutical Biotechnology", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "qa", 
        name: "Quality Assurance", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
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
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "ip-2", 
        name: "Industrial Pharmacy – II", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pp", 
        name: "Pharmacy Practice", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "ndds", 
        name: "Novel Drug Delivery Systems", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "el-1", 
        name: "Elective – I", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "el-2", 
        name: "Elective – II", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
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
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "spp", 
        name: "Social & Preventive Pharmacy", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pmm", 
        name: "Pharma Marketing Management", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "prs", 
        name: "Pharmaceutical Regulatory Science", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "el-3", 
        name: "Elective – III", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "proj", 
        name: "Project Work / Seminar", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
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
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pc", 
        name: "Pharmaceutical Chemistry", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pg", 
        name: "Pharmacognosy", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "hap", 
        name: "Human Anatomy & Physiology", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "sp", 
        name: "Social Pharmacy", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
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
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "cpm", 
        name: "Community Pharmacy & Management", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "bcp", 
        name: "Biochemistry & Clinical Pathology", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "pt", 
        name: "Pharmacotherapeutics", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "hcp", 
        name: "Hospital & Clinical Pharmacy", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
      },
      { 
        id: "ple", 
        name: "Pharmacy Law & Ethics", 
        verified: true,
        links: { notes: "", questionBank: "", pyq: "", syllabus: "" }
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
