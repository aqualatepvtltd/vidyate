
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
              { name: 'Human Anatomy and Physiology I', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Pharmaceutical Analysis I', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Pharmaceutics I', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Pharmaceutical Inorganic Chemistry', link: 'https://g.co/kgs/xw2U5sH' },
            ],
          },
          '2': {
            name: '2nd Year',
            subjects: [
              { name: 'Human Anatomy and Physiology II', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Pharmaceutical Organic Chemistry I', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Biochemistry', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Pathophysiology', link: 'https://g.co/kgs/xw2U5sH' },
            ],
          },
          '3': {
            name: '3rd Year',
            subjects: [
                { name: 'Medicinal Chemistry II', link: 'https://g.co/kgs/xw2U5sH' },
                { name: 'Industrial Pharmacy I', link: 'https://g.co/kgs/xw2U5sH' },
                { name: 'Pharmacology II', link: 'https://g.co/kgs/xw2U5sH' },
                { name: 'Herbal Drug Technology', link: 'https://g.co/kgs/xw2U5sH' },
            ]
          },
          '4': {
            name: '4th Year',
            subjects: [
                { name: 'Instrumental Methods of Analysis', link: 'https://g.co/kgs/xw2U5sH' },
                { name: 'Industrial Pharmacy II', link: 'https://g.co/kgs/xw2U5sH' },
                { name: 'Pharmacy Practice', link: 'https://g.co/kgs/xw2U5sH' },
                { name: 'Novel Drug Delivery Systems', link: 'https://g.co/kgs/xw2U5sH' },
            ]
          }
        },
      },
      syllabus: {
        name: 'Syllabus',
        icon: 'assignment',
        description: 'Official syllabus for all years.',
        years: {
          '1': { name: '1st Year Syllabus', subjects: [{ name: 'Download Full Syllabus (1st Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
          '2': { name: '2nd Year Syllabus', subjects: [{ name: 'Download Full Syllabus (2nd Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
          '3': { name: '3rd Year Syllabus', subjects: [{ name: 'Download Full Syllabus (3rd Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
          '4': { name: '4th Year Syllabus', subjects: [{ name: 'Download Full Syllabus (4th Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
        },
      },
      'question-papers': {
        name: 'Question Papers',
        icon: 'quiz',
        description: 'Previous years question papers.',
        years: {
          '1': { name: '1st Year Papers', subjects: [{ name: 'PYQs Bundle (1st Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
          '2': { name: '2nd Year Papers', subjects: [{ name: 'PYQs Bundle (2nd Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
          '3': { name: '3rd Year Papers', subjects: [{ name: 'PYQs Bundle (3rd Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
          '4': { name: '4th Year Papers', subjects: [{ name: 'PYQs Bundle (4th Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
        },
      },
    },
  },
  'pharm-d': {
    name: 'Pharm. D',
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
              { name: 'Human Anatomy & Physiology', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Pharmaceutics', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Medicinal Biochemistry', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Pharmaceutical Organic Chemistry', link: 'https://g.co/kgs/xw2U5sH' },
            ],
          },
          '2': {
            name: '2nd Year',
            subjects: [
              { name: 'Pathophysiology', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Pharmaceutical Microbiology', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Pharmacognosy & Phytopharmaceuticals', link: 'https://g.co/kgs/xw2U5sH' },
              { name: 'Pharmacology I', link: 'https://g.co/kgs/xw2U5sH' },
            ],
          },
          '3': {
            name: '3rd Year',
            subjects: [
                { name: 'Pharmacology II', link: 'https://g.co/kgs/xw2U5sH' },
                { name: 'Pharmaceutical Analysis', link: 'https://g.co/kgs/xw2U5sH' },
                { name: 'Medicinal Chemistry', link: 'https://g.co/kgs/xw2U5sH' },
                { name: 'Pharmaceutical Jurisprudence', link: 'https://g.co/kgs/xw2U5sH' },
            ]
          },
        },
      },
      syllabus: {
        name: 'Syllabus',
        icon: 'assignment',
        description: 'Official syllabus for all years.',
        years: {
          '1': { name: '1st Year Syllabus', subjects: [{ name: 'Download Full Syllabus (1st Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
          '2': { name: '2nd Year Syllabus', subjects: [{ name: 'Download Full Syllabus (2nd Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
          '3': { name: '3rd Year Syllabus', subjects: [{ name: 'Download Full Syllabus (3rd Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
        },
      },
      'question-papers': {
        name: 'Question Papers',
        icon: 'quiz',
        description: 'Previous years question papers.',
        years: {
          '1': { name: '1st Year Papers', subjects: [{ name: 'PYQs Bundle (1st Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
          '2': { name: '2nd Year Papers', subjects: [{ name: 'PYQs Bundle (2nd Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
          '3': { name: '3rd Year Papers', subjects: [{ name: 'PYQs Bundle (3rd Year)', link: 'https://g.co/kgs/xw2U5sH' }] },
        },
      },
    },
  },
};
