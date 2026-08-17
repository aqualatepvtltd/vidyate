export interface CertificationCourse {
  id: string;
  name: string;
  materialLink: string;
  testLink: string;
  quiz?: boolean;
  isPaid?: boolean;
}

export const certificationCourses: CertificationCourse[] = [
  {
    id: 'national-pharmacology-day-quiz',
    name: 'National Pharmacology Day Quiz Contest',
    materialLink: '#',
    testLink: 'https://forms.gle/c2nGEFF8DrFZnhiJ7',
    quiz: true,
  },
    {
    id: '80th-independence-day-quiz',
    name: '80th Independence Day Quiz',
    materialLink: '#',
    testLink: 'https://forms.gle/Z3f8fLR3biPfsg41A',
    quiz: true,
  },
  {
    id: 'patent-drafting-expert-program',
    name: 'Patent Drafting Expert Program for Pharmaceutical Sciences',
    materialLink: 'https://drive.google.com/drive/folders/17irTKN1SRTJ_g3j3m1SqkEabvu3bQgpK?usp=drive_link',
    testLink: 'https://forms.gle/kduUuHbawQQArrje9',
    isPaid: true,
  },
  {
    id: 'ai-for-pharma-manufacturing',
    name: 'AI for Pharmaceutical Manufacturing Industry 4.0',
    materialLink: 'https://drive.google.com/drive/folders/113ETMGOrRss9pSayHgthaB72LE3pAnRa?usp=drive_link',
    testLink: 'https://forms.gle/RFs477ErpVrAHjHJ7',
    isPaid: true,
  },
  {
    id: 'pharmaceutical-regulatory-affairs-masterclass',
    name: 'Pharmaceutical Regulatory Affairs Masterclass Global Regulations, CTDeCTD Documentation & Regulatory Submission',
    materialLink: 'https://drive.google.com/drive/folders/1g_z53DW390rwC1-exHSCdD8tktnJFMHe?usp=drive_link',
    testLink: 'https://forms.gle/i734fY97uuWHYSdv9',
    isPaid: true,
  },
  {
    id: 'bioinformatics-excellence-program',
    name: 'Bioinformatics Excellence Program Modern Tools for Research, Biotechnology & Pharmaceutical Innovation',
    materialLink: 'https://drive.google.com/drive/folders/1iqqw50q6QShZWmggP9Pn4ma2pyP3FnjB?usp=drive_link',
    testLink: 'https://forms.gle/BQen6U3KXWwo6fqf6',
    isPaid: true,
  },
  {
    id: 'pharmaceutical-quality-assurance-masterclass',
    name: 'Pharmaceutical Quality Assurance Masterclass GMP, Validation, and Executive Skills',
    materialLink: 'https://drive.google.com/drive/folders/1ykrG0jFdMvRJ8r4sJ2xdtr-FKiZkX5tA?usp=drive_link',
    testLink: 'https://forms.gle/guK5eFywtFd9mCQx7',
    isPaid: true,
  },
  {
    id: 'pharma-quality-control-analyst-accelerator',
    name: 'Pharma quality control Analyst Accelerator Core Lab Skills & Compliance',
    materialLink: 'https://drive.google.com/drive/folders/1_uiCnF6VgO5CFIQi0d9Q-nxgFlHokjlZ?usp=drive_link',
    testLink: 'https://forms.gle/VQp73Mm3cLXtNapCA',
    isPaid: true,
  },
  {
    id: 'clinical-data-analyst-masterclass',
    name: 'Clinical Data Analyst Masterclass Mastering Bioinformatics, Patient Outcomes, and Statistical Modeling in Pharmacy Research',
    materialLink: 'https://drive.google.com/drive/folders/1gBS2QqVJDYgpdSO4Kcj5zdcsBkaV5P2b?usp=drive_link',
    testLink: 'https://forms.gle/6cvYFMVF16MZsbik6',
    isPaid: true,
  },
  {
    id: 'next-generation-pharmacovigilance',
    name: 'Next-Generation Pharmacovigilance: AI, Automation, and Global Drug Safety',
    materialLink: 'https://drive.google.com/drive/folders/1kwlcZV9ZTkGOIWuJ4X8SWn7PJ2GwZRfJ?usp=drive_link',
    testLink: 'https://forms.gle/CimeeGkYENSsMcVDA',
    isPaid: true,
  },
  {
    id: 'ai-powered-medical-writing',
    name: 'Masterclass in AI-Powered Medical Writing, Research Publication & Scientific Communication',
    materialLink: 'https://drive.google.com/drive/folders/1CZCoFBPBrWYABFsTcEWvMjxB1In5gQH9?usp=drive_link',
    testLink: 'https://forms.gle/A8wHrAHLTV4uQ4jg8',
    isPaid: true,
  },
  {
    id: 'ai-driven-clinical-data-management',
    name: 'AI-Driven Clinical Data Management: Automation, Quality, and Insights',
    materialLink: 'https://drive.google.com/drive/folders/1tGrWAnTeXVvs5DKPT-r41puNpyAAmeDA?usp=drive_link',
    testLink: 'https://forms.gle/8dwyZLce7GyUdbwQA',
    isPaid: true,
  },
  {
    id: 'artificial-intelligence-pharmacovigilance',
    name: 'Artificial Intelligence in Pharmacovigilance Enhancing Drug Safety Monitoring - Basic (Ch. 1 to 5)',
    materialLink: 'https://drive.google.com/file/d/1YeE6AZpxNhEwYaNoE-Q1eoUgk4gpT99a/view?usp=drive_link',
    testLink: 'https://forms.gle/zXbWvdjMzUzmptNZ8',
    quiz: false,
  },
  {
    id: 'intelligent-dispensing-ai-pharmacy',
    name: 'Intelligent Dispensing The Role of Artificial Intelligence in Modern Pharmacy Practice - Basic (Ch. 1 to 4)',
    materialLink: 'https://drive.google.com/file/d/1i7WIqyXsn4BR86lu9PAGuhIvvGsT1WBt/view?usp=sharing',
    testLink: 'https://forms.gle/c3ieoeq6BSQjZFx58',
    quiz: false,
  },
  {
    id: 'world-hypertension-day-quiz-2026',
    name: 'World Hypertension Day Quiz 2026',
    materialLink: 'https://www.instagram.com/p/DVigIDnGZdD/',
    testLink: 'https://forms.gle/siM4yEwz9HAMTDE47',
    quiz: true
  },
  {
    id: 'pharmacovigilance',
    name: 'Pharmacovigilance',
    materialLink: 'https://drive.google.com/file/d/1_MvJlV-oam8NWXHkpqlqe4aPl67X7g_S/view?usp=drive_link',
    testLink: 'https://forms.gle/X4bdtCADUiizSiTq7'
  },
  {
    id: 'ipr',
    name: 'Intellectual Property Rights (IPR)',
    materialLink: 'https://drive.google.com/file/d/1tNBpe-Bfg_JAJJcheb-lCT4YT-HHLNAx/view?usp=drive_link',
    testLink: 'https://forms.gle/18iveUh2RfEafTaX8'
  },
  {
    id: 'bls',
    name: 'BLS & Emergency Care',
    materialLink: 'https://drive.google.com/file/d/1b7mvuUFMciexqHSpsO1I7pg5qI8g-XG8/view?usp=drive_link',
    testLink: 'https://forms.gle/tP2rShD76VfGf36r9'
  },
  {
    id: 'hplc',
    name: 'HPL Chromatography',
    materialLink: 'https://drive.google.com/file/d/19rZFmblhpbPDtOjVI1JBhzllXYg_s2HS/view?usp=drive_link',
    testLink: 'https://forms.gle/afAvnEfT4wdaGJRCA',
  },
  {
    id: 'nped-quiz-contest-2026',
    name: 'NPED Quiz Contest 2026',
    materialLink: 'https://www.instagram.com/p/DVigIDnGZdD/',
    testLink: 'https://forms.gle/JLhUCHe7mo917BV88',
    quiz: true
  },
];
