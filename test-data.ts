export interface TestQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number; // 0-based index of correct option
  category?: string;
  explanation?: string;
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
    category: "Pharmacology",
    explanation: "Muscarinic acetylcholine receptors belong to the 7-transmembrane GPCR superfamily, whereas Nicotinic is a ligand-gated ion channel."
  },
  {
    id: 2,
    question: "What is the primary mechanism of action of Omeprazole?",
    options: [
      "H2 histamine receptor blockade",
      "Irreversible inhibition of H+/K+ ATPase proton pump",
      "Neutralization of gastric hydrochloric acid",
      "Prostaglandin E1 analogue cytoprotection"
    ],
    answer: 1,
    category: "Pharmacology",
    explanation: "Omeprazole is a prodrug that irreversibly inhibits the H+/K+ ATPase pump in gastric parietal cells."
  },
  {
    id: 3,
    question: "In tablet compression, the term 'Capping' refers to:",
    options: [
      "The partial or complete separation of the top or bottom crowns of a tablet",
      "Unequal distribution of color on a tablet surface",
      "Adhesion of tablet material to the die wall",
      "Formation of crystals on the tablet surface"
    ],
    answer: 0,
    category: "Pharmaceutics",
    explanation: "Capping is the partial or complete separation of the top or bottom crowns from the main body of a tablet due to air entrapment."
  },
  {
    id: 4,
    question: "Which equation governs the rate of dissolution of a solid drug in a solvent?",
    options: [
      "Henderson-Hasselbalch equation",
      "Noyes-Whitney equation",
      "Michaelis-Menten equation",
      "Arrhenius equation"
    ],
    answer: 1,
    category: "Biopharmaceutics",
    explanation: "The Noyes-Whitney equation dC/dt = (D*A/h)*(Cs - C) calculates the dissolution rate of solid dosage forms."
  },
  {
    id: 5,
    question: "Which of the following is the specific antidote for Paracetamol (Acetaminophen) toxicity?",
    options: [
      "N-Acetylcysteine",
      "Flumazenil",
      "Atropine sulfate",
      "Pralidoxime"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "N-Acetylcysteine restores glutathione stores in the liver, binding the toxic metabolite NAPQI."
  },
  {
    id: 6,
    question: "In UV-Visible spectroscopy, a shift of absorption maximum (λmax) towards a longer wavelength is known as:",
    options: [
      "Hypsochromic shift",
      "Bathochromic shift (Red shift)",
      "Hyperchromic effect",
      "Hypochromic effect"
    ],
    answer: 1,
    category: "Pharmaceutical Analysis",
    explanation: "Bathochromic shift (or Red Shift) is an absorption shift towards longer wavelengths (lower energy)."
  },
  {
    id: 7,
    question: "Which antibiotic acts by binding to the 50S ribosomal subunit to inhibit bacterial protein synthesis?",
    options: [
      "Azithromycin",
      "Gentamicin",
      "Doxycycline",
      "Amoxicillin"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Macrolides like Azithromycin bind to the 50S ribosomal subunit, while aminoglycosides and tetracyclines bind the 30S subunit."
  },
  {
    id: 8,
    question: "What is the official temperature range for storage under 'Cold' conditions according to the Indian Pharmacopoeia (IP)?",
    options: [
      "Between 2°C and 8°C",
      "Below 0°C",
      "Between 8°C and 25°C",
      "Room temperature (20°C - 30°C)"
    ],
    answer: 0,
    category: "Pharmaceutics",
    explanation: "Cold is defined as any temperature between 2°C and 8°C."
  },
  {
    id: 9,
    question: "Which heterocyclic ring is present in the nucleus of Penicillin antibiotics?",
    options: [
      "Thiazolidine ring fused with beta-lactam ring",
      "Dihydrothiazine ring fused with beta-lactam ring",
      "Piperazine ring fused with imidazole ring",
      "Oxazolidinedione ring"
    ],
    answer: 0,
    category: "Medicinal Chemistry",
    explanation: "Penicillins consist of a beta-lactam ring fused to a five-membered thiazolidine ring."
  },
  {
    id: 10,
    question: "The presence of 'Kellar-Kiliani' test is diagnostic for which phytochemical class?",
    options: [
      "Cardiac glycosides (Digitoxose sugar)",
      "Tropane alkaloids",
      "Flavonoids",
      "Anthraquinone glycosides"
    ],
    answer: 0,
    category: "Pharmacognosy",
    explanation: "Keller-Kiliani test detects digitoxose (deoxysugar) present in digitalis cardiac glycosides."
  },
  {
    id: 11,
    question: "Which of the following is an ultra-short-acting barbiturate used for induction of general anesthesia?",
    options: [
      "Thiopental sodium",
      "Phenobarbital",
      "Amobarbital",
      "Secobarbital"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Thiopental sodium has rapid onset and ultra-short duration of action due to rapid redistribution into skeletal muscle and adipose tissue."
  },
  {
    id: 12,
    question: "What type of flow behavior is characterized by an increase in viscosity with increasing shear rate?",
    options: [
      "Dilatant flow (Shear-thickening)",
      "Pseudoplastic flow (Shear-thinning)",
      "Plastic flow (Bingham bodies)",
      "Newtonian flow"
    ],
    answer: 0,
    category: "Physical Pharmacy",
    explanation: "Dilatant materials show increasing resistance to flow and increased viscosity as shear rate increases."
  },
  {
    id: 13,
    question: "Which reagent is used in the limit test for Iron according to the Indian Pharmacopoeia?",
    options: [
      "Thioglycolic acid and citric acid in ammoniacal medium",
      "Barium chloride with potassium sulfate",
      "Silver nitrate and dilute nitric acid",
      "Gutzeit apparatus with mercuric chloride paper"
    ],
    answer: 0,
    category: "Pharmaceutical Analysis",
    explanation: "Thioglycolic acid reacts with iron in the presence of citric acid and ammonia to form a pale pink to deep reddish-purple coordination complex."
  },
  {
    id: 14,
    question: "Which of the following antihypertensive drugs is an Angiotensin Receptor Blocker (ARB)?",
    options: [
      "Losartan",
      "Enalapril",
      "Amlodipine",
      "Atenolol"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Losartan is a selective AT1 angiotensin II receptor antagonist."
  },
  {
    id: 15,
    question: "In gas chromatography, the retention time of an analyte is primarily determined by:",
    options: [
      "Partition coefficient and volatility between stationary and mobile gas phases",
      "Electric field strength and charge density",
      "Diffraction angle of X-rays",
      "Refractive index of the carrier gas"
    ],
    answer: 0,
    category: "Pharmaceutical Analysis",
    explanation: "Retention time depends on the analyte's boiling point, vapor pressure, and affinity for the stationary phase."
  },
  {
    id: 16,
    question: "Which schedule under the Drugs and Cosmetics Act of India lists standards for patent or proprietary medicines?",
    options: [
      "Schedule V",
      "Schedule M",
      "Schedule H",
      "Schedule Y"
    ],
    answer: 0,
    category: "Jurisprudence",
    explanation: "Schedule V prescribes standards for patent or proprietary medicines containing vitamins or other active substances."
  },
  {
    id: 17,
    question: "Which excipient is commonly incorporated in tablet formulation as a 'Superdisintegrant'?",
    options: [
      "Croscarmellose sodium",
      "Magnesium stearate",
      "Lactose monohydrate",
      "Talc"
    ],
    answer: 0,
    category: "Pharmaceutics",
    explanation: "Croscarmellose sodium, sodium starch glycolate, and crospovidone are known as superdisintegrants because of rapid swelling and wicking."
  },
  {
    id: 18,
    question: "A drug that exhibits zero-order elimination kinetics:",
    options: [
      "Clears a constant amount of drug per unit time regardless of plasma concentration",
      "Clears a constant fraction of drug per unit time",
      "Has a constant half-life independent of dose",
      "Follows passive non-saturable renal filtration only"
    ],
    answer: 0,
    category: "Biopharmaceutics",
    explanation: "In zero-order kinetics, metabolic pathways are saturated, eliminating a fixed absolute quantity per unit time."
  },
  {
    id: 19,
    question: "Which drug is considered the first-line oral hypoglycemic biguanide for type 2 diabetes mellitus?",
    options: [
      "Metformin",
      "Glibenclamide",
      "Pioglitazone",
      "Sitagliptin"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Metformin decreases hepatic gluconeogenesis and improves peripheral insulin sensitivity without causing hypoglycemia."
  },
  {
    id: 20,
    question: "In lyophilization (freeze-drying), the primary drying stage operates by:",
    options: [
      "Sublimation of ice under high vacuum",
      "Desorption of bound moisture at atmospheric pressure",
      "Centrifugal spray evaporation",
      "Microwave dielectric heating"
    ],
    answer: 0,
    category: "Pharmaceutics",
    explanation: "Primary drying removes frozen water via direct sublimation from solid ice to water vapor at reduced pressure."
  },
  {
    id: 21,
    question: "The biological source of Quinine is the dried bark of:",
    options: [
      "Cinchona calisaya or Cinchona succirubra",
      "Rauwolfia serpentina",
      "Atropa belladonna",
      "Strychnos nux-vomica"
    ],
    answer: 0,
    category: "Pharmacognosy",
    explanation: "Quinine is an antimalarial quinoline alkaloid isolated from Cinchona bark (Rubiaceae family)."
  },
  {
    id: 22,
    question: "Which enzyme is selectively inhibited by Methotrexate?",
    options: [
      "Dihydrofolate reductase (DHFR)",
      "DNA topoisomerase II",
      "Ribonucleotide reductase",
      "Thymidylate synthase"
    ],
    answer: 0,
    category: "Medicinal Chemistry",
    explanation: "Methotrexate is a structural folate analogue that competitive inhibits dihydrofolate reductase."
  },
  {
    id: 23,
    question: "What is the biological indicator commonly used to validate ethylene oxide gas sterilization?",
    options: [
      "Bacillus atrophaeus (Bacillus subtilis var. niger)",
      "Geobacillus stearothermophilus",
      "Clostridium sporogenes",
      "Pseudomonas aeruginosa"
    ],
    answer: 0,
    category: "Microbiology",
    explanation: "Bacillus atrophaeus spores validate ethylene oxide and dry heat sterilization, whereas Geobacillus stearothermophilus is used for moist heat (autoclaving)."
  },
  {
    id: 24,
    question: "Which law states that the mass of a substance deposited at an electrode is proportional to the quantity of electricity passed?",
    options: [
      "Faraday's first law of electrolysis",
      "Lambert-Beer law",
      "Raoult's law",
      "Henry's law"
    ],
    answer: 0,
    category: "Physical Pharmacy",
    explanation: "Faraday's first law states m = Z * I * t."
  },
  {
    id: 25,
    question: "Which loop diuretic is renowned for inhibiting the Na+/K+/2Cl- symporter in the thick ascending limb of Henle?",
    options: [
      "Furosemide",
      "Hydrochlorothiazide",
      "Spironolactone",
      "Acetazolamide"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Furosemide blocks the luminal Na+/K+/2Cl- cotransporter in the thick ascending limb."
  },
  {
    id: 26,
    question: "Which of the following describes the HLB (Hydrophile-Lipophile Balance) range typical for water-in-oil (W/O) emulsifying agents?",
    options: [
      "3 to 6",
      "8 to 16",
      "13 to 15",
      "16 to 18"
    ],
    answer: 0,
    category: "Pharmaceutics",
    explanation: "Lipophilic emulsifiers favoring W/O emulsions possess low HLB values between 3 and 6 on Griffin's scale."
  },
  {
    id: 27,
    question: "The presence of which functional group in chloramphenicol contributes to its rare but severe bone marrow toxicity?",
    options: [
      "Aromatic nitro group",
      "Dichloroacetamide group",
      "Propanediol moiety",
      "Carboxylic acid group"
    ],
    answer: 0,
    category: "Medicinal Chemistry",
    explanation: "The p-nitrophenyl group of chloramphenicol is implicated in idiosyncratic aplastic anemia."
  },
  {
    id: 28,
    question: "In High-Performance Liquid Chromatography (HPLC), Reverse Phase chromatography utilizes:",
    options: [
      "Non-polar stationary phase (e.g. C18) with a polar mobile phase",
      "Polar stationary phase (e.g. Silica) with a non-polar organic solvent",
      "Ion-exchange resin with an aqueous buffer",
      "Polyacrylamide gel with molecular sieve filtration"
    ],
    answer: 0,
    category: "Pharmaceutical Analysis",
    explanation: "Reversed-phase HPLC uses a hydrophobic stationary phase like octadecylsilane (C18) and a polar mobile phase (water/methanol/acetonitrile)."
  },
  {
    id: 29,
    question: "Which schedule under the Indian Drugs and Cosmetics Act governs Good Manufacturing Practices (GMP) for pharmaceutical manufacturing?",
    options: [
      "Schedule M",
      "Schedule X",
      "Schedule H",
      "Schedule C"
    ],
    answer: 0,
    category: "Jurisprudence",
    explanation: "Schedule M provides guidelines and requirements for factory premises, plants, and GMP standards."
  },
  {
    id: 30,
    question: "Which antiarrhythmic drug causes adverse effects including pulmonary fibrosis, thyroid abnormalities, and corneal microdeposits?",
    options: [
      "Amiodarone",
      "Lidocaine",
      "Verapamil",
      "Adenosine"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Amiodarone contains iodine, leading to thyroid dysfunction, lung fibrosis, and skin discoloration."
  },
  {
    id: 31,
    question: "Which test organism is used for the microbiological assay of Streptomycin according to the IP?",
    options: [
      "Bacillus subtilis",
      "Micrococcus luteus",
      "Staphylococcus aureus",
      "Saccharomyces cerevisiae"
    ],
    answer: 0,
    category: "Microbiology",
    explanation: "Bacillus subtilis (ATCC 6633) is the official test microorganism for microbiological assay of Streptomycin."
  },
  {
    id: 32,
    question: "In tablet evaluation, the Roche Friabilator operates at what rotational speed and total revolutions?",
    options: [
      "25 rpm for 4 minutes (100 revolutions)",
      "50 rpm for 2 minutes (100 revolutions)",
      "20 rpm for 10 minutes (200 revolutions)",
      "10 rpm for 5 minutes (50 revolutions)"
    ],
    answer: 0,
    category: "Pharmaceutics",
    explanation: "The USP/IP standard friabilator rotates at 25 rpm for 4 minutes, subjecting tablets to 100 drops of 6 inches."
  },
  {
    id: 33,
    question: "Which of the following is a competitive neuromuscular blocker that is reversed by Neostigmine?",
    options: [
      "Vecuronium",
      "Succinylcholine",
      "Dantrolene",
      "Botulinum toxin"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Non-depolarizing blockers like Vecuronium compete with acetylcholine and are reversed by anticholinesterases like Neostigmine."
  },
  {
    id: 34,
    question: "The Carr's Compressibility Index of a powder blend is calculated as:",
    options: [
      "[(Tapped Density - Bulk Density) / Tapped Density] × 100",
      "[(Bulk Density - Tapped Density) / Bulk Density] × 100",
      "[Tapped Density / Bulk Density] × 100",
      "[Bulk Density / True Density] × 100"
    ],
    answer: 0,
    category: "Pharmaceutics",
    explanation: "Carr's index evaluates powder flowability: (Tapped - Bulk)/Tapped * 100."
  },
  {
    id: 35,
    question: "Which of the following NSAIDs is a selective Cyclooxygenase-2 (COX-2) inhibitor?",
    options: [
      "Celecoxib",
      "Ibuprofen",
      "Aspirin",
      "Indomethacin"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Celecoxib selectively blocks COX-2, minimizing gastrointestinal ulceration associated with non-selective NSAIDs."
  },
  {
    id: 36,
    question: "In nuclear magnetic resonance (NMR) spectroscopy, what is the internal standard universally used for zero chemical shift?",
    options: [
      "Tetramethylsilane (TMS)",
      "Deuterated chloroform (CDCl3)",
      "Dimethyl sulfoxide (DMSO-d6)",
      "Sodium chloride"
    ],
    answer: 0,
    category: "Pharmaceutical Analysis",
    explanation: "Tetramethylsilane (Si(CH3)4) provides a single sharp reference peak defined at 0.0 ppm."
  },
  {
    id: 37,
    question: "Which natural product is chemically an indole alkaloid used in the treatment of hypertension and psychosis?",
    options: [
      "Reserpine",
      "Morphine",
      "Atropine",
      "Emetine"
    ],
    answer: 0,
    category: "Pharmacognosy",
    explanation: "Reserpine, isolated from Rauwolfia serpentina, depletes vesicular monoamines in catecholaminergic neurons."
  },
  {
    id: 38,
    question: "The therapeutic index of a drug is mathematically expressed as the ratio of:",
    options: [
      "TD50 / ED50 (Median Toxic Dose / Median Effective Dose)",
      "ED50 / TD50",
      "LD50 × ED50",
      "Cmax / AUC"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Therapeutic Index = TD50 (or LD50) / ED50. A higher ratio indicates a broader margin of safety."
  },
  {
    id: 39,
    question: "What is the maximum limit of friability permissible for compressed uncoated pharmaceutical tablets?",
    options: [
      "Not more than 1.0%",
      "Not more than 3.0%",
      "Not more than 0.1%",
      "Not more than 5.0%"
    ],
    answer: 0,
    category: "Pharmaceutics",
    explanation: "According to pharmacopoeial standards, weight loss during friability testing must not exceed 1.0% (and no cracked/broken tablets)."
  },
  {
    id: 40,
    question: "Which antifungal agent works by selectively inhibiting the fungal CYP51 enzyme (14-alpha-demethylase)?",
    options: [
      "Fluconazole",
      "Amphotericin B",
      "Nystatin",
      "Caspofungin"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Azole antifungals like Fluconazole inhibit lanosterol 14-alpha-demethylase, preventing ergosterol synthesis."
  },
  {
    id: 41,
    question: "In infrared (IR) spectroscopy, the characteristic carbonyl (C=O) stretching absorption appears around:",
    options: [
      "1680 - 1750 cm⁻¹",
      "3200 - 3600 cm⁻¹",
      "2200 - 2260 cm⁻¹",
      "1000 - 1100 cm⁻¹"
    ],
    answer: 0,
    category: "Pharmaceutical Analysis",
    explanation: "The carbonyl group exhibits a strong, sharp stretching absorption band between 1680 and 1750 cm⁻¹."
  },
  {
    id: 42,
    question: "Which of the following is an example of an enteric polymer insoluble in acidic gastric fluids but soluble in intestinal pH (> 5.5)?",
    options: [
      "Cellulose acetate phthalate (CAP)",
      "Hydroxypropyl methylcellulose (HPMC)",
      "Ethyl cellulose",
      "Polyvinylpyrrolidone (PVP)"
    ],
    answer: 0,
    category: "Pharmaceutics",
    explanation: "Cellulose acetate phthalate contains free carboxylic acid groups that ionize and dissolve only in alkaline intestinal conditions."
  },
  {
    id: 43,
    question: "Under the Pharmacy Act of 1948, the Pharmacy Council of India (PCI) is reconstituted every:",
    options: [
      "5 years",
      "3 years",
      "2 years",
      "7 years"
    ],
    answer: 0,
    category: "Jurisprudence",
    explanation: "The Central Council (PCI) is reconstituted every 5 years under Section 3 of the Pharmacy Act, 1948."
  },
  {
    id: 44,
    question: "Which clotting factor pathway is directly targeted and inhibited by Warfarin?",
    options: [
      "Vitamin K epoxide reductase (Factors II, VII, IX, X)",
      "Direct Thrombin factor IIa inhibition",
      "Factor Xa inhibition only",
      "Platelet ADP P2Y12 receptor antagonism"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Warfarin inhibits vitamin K epoxide reductase, depleting reduced vitamin K needed for gamma-carboxylation of factors II, VII, IX, and X."
  },
  {
    id: 45,
    question: "The sedimentation volume (F) of an ideal deflocculated suspension is typically:",
    options: [
      "F < 1 (sediment settles to a hard, compact cake)",
      "F = 1 (clear supernatant instantly)",
      "F > 1 always",
      "F is infinite"
    ],
    answer: 0,
    category: "Pharmaceutics",
    explanation: "In deflocculated suspensions, particles settle individually forming a dense cake with low sedimentation volume F << 1 that is hard to redisperse."
  },
  {
    id: 46,
    question: "Which of the following is a direct-acting dopamine receptor agonist used in Parkinson's disease?",
    options: [
      "Pramipexole",
      "Selegiline",
      "Entacapone",
      "Benztropine"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Pramipexole directly stimulates D2 and D3 dopamine receptors in the striatum."
  },
  {
    id: 47,
    question: "The Borntrager's test is specific for the identification of:",
    options: [
      "Anthraquinone glycosides (e.g. Senna, Cascara)",
      "Saponin glycosides",
      "Cyanogenetic glycosides",
      "Flavonoid glycosides"
    ],
    answer: 0,
    category: "Pharmacognosy",
    explanation: "Borntrager's test yields a rose-pink or cherry-red color in the ammoniacal layer in the presence of free anthraquinones."
  },
  {
    id: 48,
    question: "What is the primary function of Benzalkonium chloride when added to ophthalmic solutions?",
    options: [
      "Antimicrobial preservative",
      "Tonicity adjusting agent",
      "Buffering agent",
      "Viscosity building polymer"
    ],
    answer: 0,
    category: "Pharmaceutics",
    explanation: "Benzalkonium chloride is a widely used cationic surfactant serving as a broad-spectrum antimicrobial preservative in eye drops."
  },
  {
    id: 49,
    question: "Which of the following is an irreversible organophosphate cholinesterase inhibitor antidote?",
    options: [
      "Pralidoxime (2-PAM)",
      "Naloxone",
      "Deferoxamine",
      "Dimercaprol"
    ],
    answer: 0,
    category: "Pharmacology",
    explanation: "Pralidoxime reactivates phosphorylated acetylcholinesterase before the aging process occurs."
  },
  {
    id: 50,
    question: "In Phase I metabolic drug reactions, which enzyme superfamily is primarily responsible for oxidative transformations?",
    options: [
      "Cytochrome P450 (CYP450) monooxygenases",
      "UDP-glucuronosyltransferases (UGT)",
      "N-acetyltransferases (NAT)",
      "Glutathione S-transferases (GST)"
    ],
    answer: 0,
    category: "Pharmacokinetics",
    explanation: "The Cytochrome P450 superfamily in hepatic endoplasmic reticulum catalyzes the majority of Phase I oxidative drug biotransformations."
  }
];

export default testQuestions;
