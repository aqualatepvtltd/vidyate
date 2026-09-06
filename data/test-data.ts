export interface TestQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number; // 0-based index of correct option
}

export const testQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "Which of the following receptors is an example of a G-protein-coupled receptor (GPCR)?",
    options: [
      "Nicotinic acetylcholine receptor",
      "Muscarinic acetylcholine receptor",
      "GABA-A receptor",
      "Insulin tyrosine kinase receptor"
    ],
    answer: 1,
  },
 ];

export default testQuestions;
