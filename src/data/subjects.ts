export interface StudyMaterial {
  title: string;
  type: 'Notes' | 'Slides' | 'Reference' | 'Assignment';
}

export interface PYQ {
  title: string;
  year: string;
  type: 'Mid-Sem' | 'End-Sem' | 'Quiz';
}

export interface Subject {
  id: number;
  name: string;
  code: string;
  year: string;
  semester: string;
  studyMaterials: StudyMaterial[];
  pyqs: PYQ[];
}

export const subjects: Subject[] = [
  // 1st Year Autumn
  {
    id: 1,
    name: "Engineering Mathematics I",
    code: "MA11001",
    year: "1st Year",
    semester: "Autumn",
    studyMaterials: [
      { title: "Calculus and Differential Equations Notes", type: "Notes" },
      { title: "Linear Algebra Reference Guide", type: "Reference" },
      { title: "Practice Problem Sets", type: "Assignment" }
    ],
    pyqs: [
      { title: "Engineering Mathematics I Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Engineering Mathematics I End-Sem 2023", year: "2023", type: "End-Sem" },
      { title: "Engineering Mathematics I Mid-Sem 2022", year: "2022", type: "Mid-Sem" }
    ]
  },
  {
    id: 2,
    name: "Physics",
    code: "PH11001",
    year: "1st Year",
    semester: "Autumn",
    studyMaterials: [
      { title: "Mechanics and Thermodynamics Notes", type: "Notes" },
      { title: "Physics Laboratory Manual", type: "Reference" },
      { title: "Wave Optics Slides", type: "Slides" }
    ],
    pyqs: [
      { title: "Physics Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Physics End-Sem 2023", year: "2023", type: "End-Sem" },
      { title: "Physics Quiz 2023", year: "2023", type: "Quiz" }
    ]
  },
  // 1st Year Spring
  {
    id: 3,
    name: "Engineering Mathematics II",
    code: "MA11002",
    year: "1st Year",
    semester: "Spring",
    studyMaterials: [
      { title: "Vector Calculus and Complex Analysis", type: "Notes" },
      { title: "Fourier Series and Transforms", type: "Reference" },
      { title: "Mathematical Methods Slides", type: "Slides" }
    ],
    pyqs: [
      { title: "Engineering Mathematics II Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Engineering Mathematics II End-Sem 2023", year: "2023", type: "End-Sem" }
    ]
  },
  {
    id: 4,
    name: "Chemistry",
    code: "CY11001",
    year: "1st Year",
    semester: "Spring",
    studyMaterials: [
      { title: "Organic Chemistry Fundamentals", type: "Notes" },
      { title: "Chemical Bonding and Structure", type: "Reference" },
      { title: "Laboratory Experiments Guide", type: "Assignment" }
    ],
    pyqs: [
      { title: "Chemistry Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Chemistry End-Sem 2023", year: "2023", type: "End-Sem" }
    ]
  },
  // 2nd Year Autumn
  {
    id: 5,
    name: "Materials Science",
    code: "MT21001",
    year: "2nd Year",
    semester: "Autumn",
    studyMaterials: [
      { title: "Crystal Structure and Defects", type: "Notes" },
      { title: "Phase Diagrams Comprehensive Guide", type: "Reference" },
      { title: "Materials Characterization Slides", type: "Slides" },
      { title: "Structure-Property Assignments", type: "Assignment" }
    ],
    pyqs: [
      { title: "Materials Science Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Materials Science End-Sem 2023", year: "2023", type: "End-Sem" },
      { title: "Materials Science Mid-Sem 2022", year: "2022", type: "Mid-Sem" },
      { title: "Materials Science End-Sem 2022", year: "2022", type: "End-Sem" }
    ]
  },
  {
    id: 6,
    name: "Thermodynamics",
    code: "MT21002",
    year: "2nd Year",
    semester: "Autumn",
    studyMaterials: [
      { title: "Classical Thermodynamics Notes", type: "Notes" },
      { title: "Statistical Thermodynamics Reference", type: "Reference" },
      { title: "Problem Solving Techniques", type: "Assignment" }
    ],
    pyqs: [
      { title: "Thermodynamics Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Thermodynamics End-Sem 2023", year: "2023", type: "End-Sem" }
    ]
  },
  // 2nd Year Spring
  {
    id: 7,
    name: "Physical Metallurgy",
    code: "MT22001",
    year: "2nd Year",
    semester: "Spring",
    studyMaterials: [
      { title: "Phase Transformations in Metals", type: "Notes" },
      { title: "Mechanical Properties Guide", type: "Reference" },
      { title: "Microstructure Analysis Slides", type: "Slides" }
    ],
    pyqs: [
      { title: "Physical Metallurgy Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Physical Metallurgy End-Sem 2023", year: "2023", type: "End-Sem" }
    ]
  },
  {
    id: 8,
    name: "Transport Phenomena",
    code: "MT22002",
    year: "2nd Year",
    semester: "Spring",
    studyMaterials: [
      { title: "Heat and Mass Transfer Notes", type: "Notes" },
      { title: "Fluid Mechanics Applications", type: "Reference" },
      { title: "Numerical Methods in Transport", type: "Assignment" }
    ],
    pyqs: [
      { title: "Transport Phenomena Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Transport Phenomena End-Sem 2023", year: "2023", type: "End-Sem" }
    ]
  },
  // 3rd Year Autumn
  {
    id: 9,
    name: "Extractive Metallurgy",
    code: "MT31001",
    year: "3rd Year",
    semester: "Autumn",
    studyMaterials: [
      { title: "Hydrometallurgy Processes", type: "Notes" },
      { title: "Pyrometallurgy Reference Manual", type: "Reference" },
      { title: "Electrometallurgy Slides", type: "Slides" },
      { title: "Process Design Assignments", type: "Assignment" }
    ],
    pyqs: [
      { title: "Extractive Metallurgy Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Extractive Metallurgy End-Sem 2023", year: "2023", type: "End-Sem" },
      { title: "Extractive Metallurgy Quiz 2023", year: "2023", type: "Quiz" }
    ]
  },
  {
    id: 10,
    name: "Materials Characterization",
    code: "MT31002",
    year: "3rd Year",
    semester: "Autumn",
    studyMaterials: [
      { title: "X-Ray Diffraction Techniques", type: "Notes" },
      { title: "Electron Microscopy Guide", type: "Reference" },
      { title: "Spectroscopy Methods Slides", type: "Slides" }
    ],
    pyqs: [
      { title: "Materials Characterization Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Materials Characterization End-Sem 2023", year: "2023", type: "End-Sem" }
    ]
  },
  // 3rd Year Spring
  {
    id: 11,
    name: "Iron and Steel Making",
    code: "MT32001",
    year: "3rd Year",
    semester: "Spring",
    studyMaterials: [
      { title: "Blast Furnace Technology", type: "Notes" },
      { title: "Steel Making Processes", type: "Reference" },
      { title: "Secondary Refining Slides", type: "Slides" }
    ],
    pyqs: [
      { title: "Iron and Steel Making Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Iron and Steel Making End-Sem 2023", year: "2023", type: "End-Sem" }
    ]
  },
  {
    id: 12,
    name: "Mechanical Metallurgy",
    code: "MT32002",
    year: "3rd Year",
    semester: "Spring",
    studyMaterials: [
      { title: "Plastic Deformation Mechanisms", type: "Notes" },
      { title: "Fracture Mechanics Reference", type: "Reference" },
      { title: "Fatigue and Creep Analysis", type: "Assignment" }
    ],
    pyqs: [
      { title: "Mechanical Metallurgy Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Mechanical Metallurgy End-Sem 2023", year: "2023", type: "End-Sem" }
    ]
  },
  // 4th Year Autumn
  {
    id: 13,
    name: "Advanced Materials",
    code: "MT41001",
    year: "4th Year",
    semester: "Autumn",
    studyMaterials: [
      { title: "Nanomaterials and Applications", type: "Notes" },
      { title: "Smart Materials Reference", type: "Reference" },
      { title: "Composite Materials Slides", type: "Slides" },
      { title: "Research Project Guidelines", type: "Assignment" }
    ],
    pyqs: [
      { title: "Advanced Materials Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Advanced Materials End-Sem 2023", year: "2023", type: "End-Sem" }
    ]
  },
  {
    id: 14,
    name: "Corrosion Engineering",
    code: "MT41002",
    year: "4th Year",
    semester: "Autumn",
    studyMaterials: [
      { title: "Electrochemical Corrosion Theory", type: "Notes" },
      { title: "Corrosion Protection Methods", type: "Reference" },
      { title: "Case Studies in Corrosion", type: "Assignment" }
    ],
    pyqs: [
      { title: "Corrosion Engineering Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Corrosion Engineering End-Sem 2023", year: "2023", type: "End-Sem" }
    ]
  },
  // 4th Year Spring
  {
    id: 15,
    name: "Project Management",
    code: "MT42001",
    year: "4th Year",
    semester: "Spring",
    studyMaterials: [
      { title: "Project Planning and Control", type: "Notes" },
      { title: "Risk Management in Projects", type: "Reference" },
      { title: "Case Study Presentations", type: "Slides" }
    ],
    pyqs: [
      { title: "Project Management Mid-Sem 2023", year: "2023", type: "Mid-Sem" },
      { title: "Project Management End-Sem 2023", year: "2023", type: "End-Sem" }
    ]
  }
];