
import { Course } from '../types';

const VERIFIED_DRIVE_LINK = "https://drive.google.com/file/d/18cpd_3kqi6SPsIVMKklmd3EGgE_sDFFC/view";

export const COURSES: Record<string, Course> = {
  "b-pharm": {
    id: "b-pharm",
    name: "B.Pharmacy",
    description: "4-year PCI-based program following syllabus with semester-wise structure.",
    resources: {
      "notes": {
        id: "notes",
        name: "Verified Notes",
        icon: "edit_note",
        color: "#10B981",
        years: [
          {
            id: "year-1",
            name: "1st Year (Sem I-II)",
            subjects: [
              { id: "hap-1", name: "Human Anatomy & Physiology I", verified: true, description: "Cellular organization, tissues, skeletal, muscular systems." },
              { id: "pa-1", name: "Pharmaceutical Analysis I", verified: true, description: "Acid-base, precipitation, complexometric titrations." },
              { id: "ph-1", name: "Pharmaceutics I", verified: true, description: "Dosage forms, prescriptions, posology, powders." },
              { id: "pic", name: "Pharmaceutical Inorganic Chemistry", verified: true, description: "Impurities, acids, buffers, GI agents." },
              { id: "hap-2", name: "Human Anatomy & Physiology II", verified: true, description: "Nervous, cardiovascular, special senses systems." },
              { id: "poc-1", name: "Pharmaceutical Organic Chemistry I", verified: true, description: "Organic reactions, stereochemistry basics." }
            ]
          },
          {
            id: "year-2",
            name: "2nd Year (Sem III-IV)",
            subjects: [
              { id: "poc-2", name: "Pharmaceutical Organic Chemistry II", verified: true, description: "Heterocyclic compounds, synthesis." },
              { id: "pp-1", name: "Physical Pharmaceutics I", verified: true, description: "Solubility, states of matter, interfaces." },
              { id: "pm", name: "Pharmaceutical Microbiology", verified: true, description: "Sterility, microbial control, immunology." },
              { id: "pe", name: "Pharmaceutical Engineering", verified: true, description: "Unit operations, heat/mass transfer." },
              { id: "mc-1", name: "Medicinal Chemistry I", verified: true, description: "Drug design, SAR of drugs." },
              { id: "pg-1", name: "Pharmacognosy I", verified: true, description: "Crude drugs, cultivation, microscopy." }
            ]
          },
          {
            id: "year-3",
            name: "3rd Year (Sem V-VI)",
            subjects: [
              { id: "ip-1", name: "Industrial Pharmacy I", verified: true, description: "Preformulation, tablets, capsules." },
              { id: "pharm-2", name: "Pharmacology II", verified: true, description: "ANS, CVS, CNS drugs." },
              { id: "mc-2", name: "Medicinal Chemistry II", verified: true },
              { id: "pg-2", name: "Pharmacognosy & Phytochemistry II", verified: true }
            ]
          }
        ]
      },
      "syllabus": {
        id: "syllabus",
        name: "AKTU Syllabus",
        icon: "list_alt",
        color: "#405cff",
        years: [
          {
            id: "year-1",
            name: "1st Year Syllabus",
            subjects: [
              { id: "syl-bpharm-y1", name: "AKTU B.Pharm Year 1 Syllabus", link: VERIFIED_DRIVE_LINK, verified: true, description: "PCI approved curriculum for Sem I-II." }
            ]
          },
          {
            id: "year-2", 
            name: "2nd Year Syllabus",
            subjects: [
              { id: "syl-bpharm-y2", name: "AKTU B.Pharm Year 2 Syllabus", link: VERIFIED_DRIVE_LINK, verified: true }
            ]
          }
        ]
      },
      "pyqs": {
        id: "pyqs",
        name: "Past Year Papers",
        icon: "history_edu",
        color: "#FF6B6B",
        years: [
          {
            id: "year-1",
            name: "1st Year",
            subjects: [
              { id: "q-hap-1", name: "HAP-I AKTU Papers", link: VERIFIED_DRIVE_LINK, verified: true },
              { id: "q-pa-1", name: "Pharm Analysis Papers", link: VERIFIED_DRIVE_LINK, verified: true },
              { id: "q-ph-1", name: "Pharmaceutics-I Papers", link: VERIFIED_DRIVE_LINK, verified: true }
            ]
          }
        ]
      }
    }
  },
  "d-pharm": {
    id: "d-pharm",
    name: "D.Pharmacy",
    description: "2-year PCI-approved diploma program with practical training focus.",
    resources: {
      "notes": {
        id: "notes",
        name: "Verified Notes",
        icon: "edit_note",
        color: "#10B981",
        years: [
          {
            id: "year-1",
            name: "1st Year",
            subjects: [
              { id: "hap-d1", name: "Human Anatomy & Physiology", verified: true, description: "Body systems, physiological functions." },
              { id: "ph-d1", name: "Pharmaceutics", verified: true, description: "Dosage forms, compounding." },
              { id: "pc-i", name: "Pharmaceutical Chemistry-I", verified: true, description: "Inorganic medicinal compounds." },
              { id: "poc-d", name: "Pharmaceutical Organic Chemistry", verified: true },
              { id: "mb", name: "Medicinal Biochemistry", verified: true }
            ]
          },
          {
            id: "year-2",
            name: "2nd Year",
            subjects: [
              { id: "pg", name: "Pharmacognosy", verified: true, description: "Natural drugs, plant sources." },
              { id: "patho", name: "Pathophysiology", verified: true },
              { id: "pharm-m", name: "Pharmaceutical Microbiology", verified: true },
              { id: "pharm-1", name: "Pharmacology I", verified: true },
              { id: "hcp", name: "Hospital & Clinical Pharmacy", verified: true }
            ]
          }
        ]
      },
      "syllabus": {
        id: "syllabus",
        name: "Syllabus",
        icon: "list_alt",
        color: "#405cff",
        years: [
          {
            id: "year-1",
            name: "1st Year",
            subjects: [
              { id: "syl-dpharm-y1", name: "AKTU D.Pharm Year 1 Syllabus", link: VERIFIED_DRIVE_LINK, verified: true, description: "PCI standard Year 1 curriculum." }
            ]
          },
          {
            id: "year-2",
            name: "2nd Year",
            subjects: [
              { id: "syl-dpharm-y2", name: "AKTU D.Pharm Year 2 Syllabus", link: VERIFIED_DRIVE_LINK, verified: true }
            ]
          }
        ]
      }
    }
  }
};
