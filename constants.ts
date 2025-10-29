
import { Courses } from './types';

export const COURSES_DATA: Courses = {
  'b-pharm': {
    name: 'B. Pharm',
    description: "Bachelor of Pharmacy is an undergraduate degree course in the field of Pharmacy education.",
    resources: {
      notes: {
        name: 'Notes',
        icon: 'menu_book',
        description: 'Comprehensive subject-wise notes.',
        years: {
          '1': {
            name: '1st Year',
            subjects: [
              { name: 'Human Anatomy and Physiology I', link: '#' },
              { name: 'Pharmaceutical Analysis I', link: '#' },
              { name: 'Pharmaceutics I', link: '#' },
              { name: 'Pharmaceutical Inorganic Chemistry', link: '#' },
            ],
          },
          '2': {
            name: '2nd Year',
            subjects: [
              { name: 'Human Anatomy and Physiology II', link: '#' },
              { name: 'Pharmaceutical Organic Chemistry I', link: '#' },
              { name: 'Biochemistry', link: '#' },
              { name: 'Pathophysiology', link: '#' },
            ],
          },
          '3': {
            name: '3rd Year',
            subjects: [
              { name: 'Medicinal Chemistry II', link: '#' },
              { name: 'Industrial Pharmacy I', link: '#' },
              { name: 'Pharmacology II', link: '#' },
              { name: 'Herbal Drug Technology', link: '#' },
            ]
          },
          '4': {
            name: '4th Year',
            subjects: [
              { name: 'Instrumental Methods of Analysis', link: '#' },
              { name: 'Industrial Pharmacy II', link: '#' },
              { name: 'Pharmacy Practice', link: '#' },
              { name: 'Novel Drug Delivery Systems', link: '#' },
            ]
          }
        },
      },
      syllabus: {
        name: 'Syllabus',
        icon: 'assignment',
        description: 'Official syllabus for all years.',
        years: {
          '1': { name: '1st Year Syllabus', subjects: [{ name: 'Download Full Syllabus (1st Year)', link: '#' }] },
          '2': { name: '2nd Year Syllabus', subjects: [{ name: 'Download Full Syllabus (2nd Year)', link: '#' }] },
          '3': { name: '3rd Year Syllabus', subjects: [{ name: 'Download Full Syllabus (3rd Year)', link: '#' }] },
          '4': { name: '4th Year Syllabus', subjects: [{ name: 'Download Full Syllabus (4th Year)', link: '#' }] },
        },
      },
      'question-papers': {
        name: 'Question Papers',
        icon: 'quiz',
        description: 'Previous years question papers.',
        years: {
          '1': { name: '1st Year Papers', subjects: [{ name: 'PYQs Bundle (1st Year)', link: '#' }] },
          '2': { name: '2nd Year Papers', subjects: [{ name: 'PYQs Bundle (2nd Year)', link: '#' }] },
          '3': { name: '3rd Year Papers', subjects: [{ name: 'PYQs Bundle (3rd Year)', link: '#' }] },
          '4': { name: '4th Year Papers', subjects: [{ name: 'PYQs Bundle (4th Year)', link: '#' }] },
        },
      },
      'practicals': {
        name: 'Practicals',
        icon: 'book_5',
        description: 'Practical manuals and guides.',
        years: {
          '1': {
            name: '1st Year',
            subjects: [
              { name: 'Human Anatomy and Physiology I', link: '#' },
              { name: 'Pharmaceutical Analysis I', link: '#' },
              { name: 'Pharmaceutics I', link: '#' },
              { name: 'Pharmaceutical Inorganic Chemistry', link: '#' },
            ],
          },
          '2': {
            name: '2nd Year',
            subjects: [
              { name: 'Human Anatomy and Physiology II', link: '#' },
              { name: 'Pharmaceutical Organic Chemistry I', link: '#' },
              { name: 'Biochemistry', link: '#' },
              { name: 'Pathophysiology', link: '#' },
            ],
          },
          '3': {
            name: '3rd Year',
            subjects: [
              { name: 'Medicinal Chemistry II', link: '#' },
              { name: 'Industrial Pharmacy I', link: '#' },
              { name: 'Pharmacology II', link: '#' },
              { name: 'Herbal Drug Technology', link: '#' },
            ]
          },
          '4': {
            name: '4th Year',
            subjects: [
              { name: 'Instrumental Methods of Analysis', link: '#' },
              { name: 'Industrial Pharmacy II', link: '#' },
              { name: 'Pharmacy Practice', link: '#' },
              { name: 'Novel Drug Delivery Systems', link: '#' },
            ]
          }
        },
      },
    },
  },
  'd-pharm': {
    name: 'D. Pharm',
    description: "Doctor of Pharmacy is a professional degree in pharmacy.It is an usefull degree.",
    resources: {
      notes: {
        name: 'Notes',
        icon: 'menu_book',
        description: 'Comprehensive subject-wise notes.',
        years: {
          '1': {
            name: '1st Year',
            subjects: [
              { name: 'Human Anatomy & Physiology', link: '#' },
              { name: 'Pharmaceutics', link: '#' },
              { name: 'Medicinal Biochemistry', link: '#' },
              { name: 'Pharmaceutical Organic Chemistry', link: '#' },
            ],
          },
          '2': {
            name: '2nd Year',
            subjects: [
              { name: 'Pathophysiology', link: '#' },
              { name: 'Pharmaceutical Microbiology', link: '#' },
              { name: 'Pharmacognosy & Phytopharmaceuticals', link: '#' },
              { name: 'Pharmacology I', link: '#' },
            ],
          },
        },
      },
      syllabus: {
        name: 'Syllabus',
        icon: 'assignment',
        description: 'Official syllabus for all years.',
        years: {
          '1': {
            name: '1st Year Syllabus', subjects: [
              { name: 'Human Anatomy & Physiology', link: '#' },
              { name: 'Pharmaceutics', link: '#' },
              { name: 'Medicinal Biochemistry', link: '#' },
              { name: 'Pharmaceutical Organic Chemistry', link: '#' },
            ]
          },
          '2': {
            name: '2nd Year Syllabus', subjects: [
              { name: 'Pathophysiology', link: '#' },
              { name: 'Pharmaceutical Microbiology', link: '#' },
              { name: 'Pharmacognosy & Phytopharmaceuticals', link: '#' },
              { name: 'Pharmacology I', link: '#' },
            ]
          },
        },
      },
      'question-papers': {
        name: 'Question Papers',
        icon: 'quiz',
        description: 'Previous years question papers.',
        years: {
          '1': { name: '1st Year Papers', subjects: [{ name: 'PYQs Bundle (1st Year)', link: '#' }] },
          '2': { name: '2nd Year Papers', subjects: [{ name: 'PYQs Bundle (2nd Year)', link: '#' }] },
        },
      },
      'practicals': {
        name: 'Practicals',
        icon: 'book_5',
        description: 'Practical manuals and guides.',
        years: {
          '1': {
            name: '1st Year ', subjects: [
              { name: 'Human Anatomy & Physiology', link: '#' },
              { name: 'Pharmaceutics', link: '#' },
              { name: 'Medicinal Biochemistry', link: '#' },
              { name: 'Pharmaceutical Organic Chemistry', link: '#' },
            ]
          },
          '2': {
            name: '2nd Year', subjects: [
              { name: 'Pathophysiology', link: '#' },
              { name: 'Pharmaceutical Microbiology', link: '#' },
              { name: 'Pharmacognosy & Phytopharmaceuticals', link: '#' },
              { name: 'Pharmacology I', link: '#' },
            ]
          },
        },
      },
    },
  },
};
