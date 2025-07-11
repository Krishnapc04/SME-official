export interface StudyMaterial {
  title: string;
  type: 'Notes' | 'Slides' | 'Reference' | 'Assignment';
  driveLink: string;
}

export interface PYQ {
  title: string;
  year: string;
  type: 'Mid-Sem' | 'End-Sem' | 'Quiz';
  driveLink: string;
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
  // 1st Year Autumn Sem
  {
    id: 1,
    name: "	ADVANCED CALCULUS",
    code: "MA11003",
    year: "1st Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Calculus and Differential Equations Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MA11001_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Engineering Mathematics I Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MA11001_MidSem_2023"
      }
    ]
  },
  {
    id: 2,
    name: "BASIC ELECTRONICS",
    code: "	EC21201",
    year: "1st Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Mechanics and Thermodynamics Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Physics Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_MidSem_2023"
      }
    ]
  },
  {
    id: 3,
    name: "BASIC ENGINEERING MECHANICS",
    code: "ME11003",
    year: "1st Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Mechanics and Thermodynamics Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Physics Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_MidSem_2023"
      }
    ]
  },
  {
    id: 4,
    name: "CHEMISTRY",
    code: "CY11003",
    year: "1st Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Mechanics and Thermodynamics Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Physics Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_MidSem_2023"
      }
    ]
  },
  {
    id: 5,
    name: "ENGINEERING DRAWING AND COMPUTER GRAPHICS",
    code: "CE13003",
    year: "1st Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Mechanics and Thermodynamics Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Physics Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_MidSem_2023"
      }
    ]
  },
  // 1st Year  Spring Sem
  {
    id: 6,
    name: "LINEAR ALGEBRA, NUMERICAL AND COMPLEX ANALYSIS",
    code: "MA11004",
    year: "1st Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Vector Calculus and Complex Analysis", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MA11002_Notes_2023"
      },
      { 
        title: "Fourier Series and Transforms", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MA11002_Ref_2023"
      },
      { 
        title: "Mathematical Methods Slides", 
        type: "Slides",
        driveLink: "https://drive.google.com/drive/folders/1MA11002_Slides_2023"
      }
    ],
    pyqs: [
      { 
        title: "Engineering Mathematics II Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MA11002_MidSem_2023"
      },
      { 
        title: "Engineering Mathematics II End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MA11002_EndSem_2023"
      }
    ]
  },
  {
    id: 7,
    name: "PROGRAMMING AND DATA STRUCTURES",
    code: "CS10003",
    year: "1st Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Organic Chemistry Fundamentals", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_Notes_2023"
      },
      { 
        title: "Chemical Bonding and Structure", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_Ref_2023"
      },
      { 
        title: "Laboratory Experiments Guide", 
        type: "Assignment",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_Lab_2023"
      }
    ],
    pyqs: [
      { 
        title: "Chemistry Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_MidSem_2023"
      },
      { 
        title: "Chemistry End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_EndSem_2023"
      }
    ]
  },
  {
    id: 8,
    name: "ELECTRICAL TECHNOLOGY",
    code: "EE11003",
    year: "1st Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Organic Chemistry Fundamentals", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_Notes_2023"
      },
      { 
        title: "Chemical Bonding and Structure", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_Ref_2023"
      },
      { 
        title: "Laboratory Experiments Guide", 
        type: "Assignment",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_Lab_2023"
      }
    ],
    pyqs: [
      { 
        title: "Chemistry Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_MidSem_2023"
      },
      { 
        title: "Chemistry End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_EndSem_2023"
      }
    ]
  },
  {
    id: 9,
    name: "PHYSICS OF WAVES",
    code: "PH11003",
    year: "1st Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Organic Chemistry Fundamentals", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_Notes_2023"
      },
      { 
        title: "Chemical Bonding and Structure", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_Ref_2023"
      },
      { 
        title: "Laboratory Experiments Guide", 
        type: "Assignment",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_Lab_2023"
      }
    ],
    pyqs: [
      { 
        title: "Chemistry Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_MidSem_2023"
      },
      { 
        title: "Chemistry End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1CY11001_EndSem_2023"
      }
    ]
  },
  // 2nd Year Autumn Sem
  {
    id: 10,
    name: "PROBABILITY AND STATISTICS",
    code: "MA20205",
    year: "2nd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Crystal Structure and Defects", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT21001_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Materials Science Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT21001_MidSem_2023"
      }
    ]
  },
  {
    id: 11,
    name: "NTRODUCTION TO ENGINEERING MATERIALS",
    code: "	MT21107",
    year: "2nd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Classical Thermodynamics Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT21002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Thermodynamics Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT21002_MidSem_2023"
      }
    ]
  },
  {
    id: 12,
    name: "METALLURGICAL THERMODYNAMICS AND KINETICS",
    code: "MT21105",
    year: "2nd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Classical Thermodynamics Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT21002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Thermodynamics Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT21002_MidSem_2023"
      }
    ]
  },
  {
    id: 13,
    name: "INTRODUCTORY SCIENTIFIC COMPUTING FOR MATERIALS SCIENCE",
    code: "MT20201",
    year: "2nd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Classical Thermodynamics Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT21002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Thermodynamics Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT21002_MidSem_2023"
      }
    ]
  },
  // 2nd Year  Spring Sem
  {
    id: 14,
    name: "DEFORMATION BEHAVIOUR OF MATERIALS",
    code: "MT21202",
    year: "2nd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Phase Transformations in Metals", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT22001_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Physical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT22001_MidSem_2023"
      }
    ]
  },
  {
    id: 15,
    name: "TRANSFORM CALCULUS",
    code: "MA20202",
    year: "2nd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Heat and Mass Transfer Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT22002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Transport Phenomena Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT22002_MidSem_2023"
      }
    ]
  },
  {
    id: 16,
    name: "MATERIALS PROCESSING",
    code: "MT20202",
    year: "2nd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Hydrometallurgy Processes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT31001_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Extractive Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT31001_MidSem_2023"
      }
    ]
  },
  {
    id: 17,
    name: "COMPUTER APPLICATIONS IN METALLURGICAL PROCESSES",
    code: "MT20204",
    year: "2nd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT31002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Materials Characterization Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT31002_MidSem_2023"
      }
    ]
  },
  {
    id: 18,
    name: "TRANSPORT PHENOMENA IN METALLURGICAL PROCESSES",
    code: "MT21204",
    year: "2nd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT31002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Materials Characterization Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT31002_MidSem_2023"
      }
    ]
  },
  // 3rd Year  Autumn Sem
  {
    id: 20,
    name: "Mechanical Metallurgy",
    code: "MT32002",
    year: "3rd Year",
    semester: " Spring Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      },
      { 
        title: "Fracture Mechanics Reference", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Ref_2023"
      },
      { 
        title: "Fatigue and Creep Analysis", 
        type: "Assignment",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Assign_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      },
      { 
        title: "Mechanical Metallurgy End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_EndSem_2023"
      }
    ]
  },
  // 4th Year Autumn Sem
  {
    id: 21,
    name: "Advanced Materials",
    code: "MT41001",
    year: "4th Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Nanomaterials and Applications", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT41001_Notes_2023"
      },
      { 
        title: "Smart Materials Reference", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MT41001_Ref_2023"
      },
      { 
        title: "Composite Materials Slides", 
        type: "Slides",
        driveLink: "https://drive.google.com/drive/folders/1MT41001_Slides_2023"
      },
      { 
        title: "Research Project Guidelines", 
        type: "Assignment",
        driveLink: "https://drive.google.com/drive/folders/1MT41001_Assign_2023"
      }
    ],
    pyqs: [
      { 
        title: "Advanced Materials Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT41001_MidSem_2023"
      },
      { 
        title: "Advanced Materials End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT41001_EndSem_2023"
      }
    ]
  },
  {
    id: 22,
    name: "Corrosion Engineering",
    code: "MT41002",
    year: "4th Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Electrochemical Corrosion Theory", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT41002_Notes_2023"
      },
      { 
        title: "Corrosion Protection Methods", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MT41002_Ref_2023"
      },
      { 
        title: "Case Studies in Corrosion", 
        type: "Assignment",
        driveLink: "https://drive.google.com/drive/folders/1MT41002_Assign_2023"
      }
    ],
    pyqs: [
      { 
        title: "Corrosion Engineering Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT41002_MidSem_2023"
      },
      { 
        title: "Corrosion Engineering End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT41002_EndSem_2023"
      }
    ]
  },
  // 4th Year  Spring Sem
  {
    id: 23,
    name: "Project Management",
    code: "MT42001",
    year: "4th Year",
    semester: " Spring Sem",
    studyMaterials: [
      { 
        title: "Project Planning and Control", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT42001_Notes_2023"
      },
      { 
        title: "Risk Management in Projects", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MT42001_Ref_2023"
      },
      { 
        title: "Case Study Presentations", 
        type: "Slides",
        driveLink: "https://drive.google.com/drive/folders/1MT42001_Slides_2023"
      }
    ],
    pyqs: [
      { 
        title: "Project Management Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT42001_MidSem_2023"
      },
      { 
        title: "Project Management End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT42001_EndSem_2023"
      }
    ]
  }
];