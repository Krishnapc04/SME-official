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
  // 1st Year Autumn
  {
    id: 1,
    name: "Engineering Mathematics I",
    code: "MA11001",
    year: "1st Year",
    semester: "Autumn",
    studyMaterials: [
      { 
        title: "Calculus and Differential Equations Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MA11001_Notes_2023"
      },
      { 
        title: "Linear Algebra Reference Guide", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MA11001_Ref_2023"
      },
      { 
        title: "Practice Problem Sets", 
        type: "Assignment",
        driveLink: "https://drive.google.com/drive/folders/1MA11001_Assign_2023"
      }
    ],
    pyqs: [
      { 
        title: "Engineering Mathematics I Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MA11001_MidSem_2023"
      },
      { 
        title: "Engineering Mathematics I End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MA11001_EndSem_2023"
      },
      { 
        title: "Engineering Mathematics I Mid-Sem 2022", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MA11001_MidSem_2022"
      }
    ]
  },
  {
    id: 2,
    name: "Physics",
    code: "PH11001",
    year: "1st Year",
    semester: "Autumn",
    studyMaterials: [
      { 
        title: "Mechanics and Thermodynamics Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_Notes_2023"
      },
      { 
        title: "Physics Laboratory Manual", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_Lab_2023"
      },
      { 
        title: "Wave Optics Slides", 
        type: "Slides",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_Slides_2023"
      }
    ],
    pyqs: [
      { 
        title: "Physics Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_MidSem_2023"
      },
      { 
        title: "Physics End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_EndSem_2023"
      },
      { 
        title: "Physics Quiz 2023", 
        year: "2023", 
        type: "Quiz",
        driveLink: "https://drive.google.com/drive/folders/1PH11001_Quiz_2023"
      }
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
    id: 4,
    name: "Chemistry",
    code: "CY11001",
    year: "1st Year",
    semester: "Spring",
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
  // 2nd Year Autumn
  {
    id: 5,
    name: "Materials Science",
    code: "MT21001",
    year: "2nd Year",
    semester: "Autumn",
    studyMaterials: [
      { 
        title: "Crystal Structure and Defects", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT21001_Notes_2023"
      },
      { 
        title: "Phase Diagrams Comprehensive Guide", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MT21001_Ref_2023"
      },
      { 
        title: "Materials Characterization Slides", 
        type: "Slides",
        driveLink: "https://drive.google.com/drive/folders/1MT21001_Slides_2023"
      },
      { 
        title: "Structure-Property Assignments", 
        type: "Assignment",
        driveLink: "https://drive.google.com/drive/folders/1MT21001_Assign_2023"
      }
    ],
    pyqs: [
      { 
        title: "Materials Science Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT21001_MidSem_2023"
      },
      { 
        title: "Materials Science End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT21001_EndSem_2023"
      },
      { 
        title: "Materials Science Mid-Sem 2022", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT21001_MidSem_2022"
      },
      { 
        title: "Materials Science End-Sem 2022", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT21001_EndSem_2022"
      }
    ]
  },
  {
    id: 6,
    name: "Thermodynamics",
    code: "MT21002",
    year: "2nd Year",
    semester: "Autumn",
    studyMaterials: [
      { 
        title: "Classical Thermodynamics Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT21002_Notes_2023"
      },
      { 
        title: "Statistical Thermodynamics Reference", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MT21002_Ref_2023"
      },
      { 
        title: "Problem Solving Techniques", 
        type: "Assignment",
        driveLink: "https://drive.google.com/drive/folders/1MT21002_Assign_2023"
      }
    ],
    pyqs: [
      { 
        title: "Thermodynamics Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT21002_MidSem_2023"
      },
      { 
        title: "Thermodynamics End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT21002_EndSem_2023"
      }
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
      { 
        title: "Phase Transformations in Metals", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT22001_Notes_2023"
      },
      { 
        title: "Mechanical Properties Guide", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MT22001_Ref_2023"
      },
      { 
        title: "Microstructure Analysis Slides", 
        type: "Slides",
        driveLink: "https://drive.google.com/drive/folders/1MT22001_Slides_2023"
      }
    ],
    pyqs: [
      { 
        title: "Physical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT22001_MidSem_2023"
      },
      { 
        title: "Physical Metallurgy End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT22001_EndSem_2023"
      }
    ]
  },
  {
    id: 8,
    name: "Transport Phenomena",
    code: "MT22002",
    year: "2nd Year",
    semester: "Spring",
    studyMaterials: [
      { 
        title: "Heat and Mass Transfer Notes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT22002_Notes_2023"
      },
      { 
        title: "Fluid Mechanics Applications", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MT22002_Ref_2023"
      },
      { 
        title: "Numerical Methods in Transport", 
        type: "Assignment",
        driveLink: "https://drive.google.com/drive/folders/1MT22002_Assign_2023"
      }
    ],
    pyqs: [
      { 
        title: "Transport Phenomena Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT22002_MidSem_2023"
      },
      { 
        title: "Transport Phenomena End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT22002_EndSem_2023"
      }
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
      { 
        title: "Hydrometallurgy Processes", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT31001_Notes_2023"
      },
      { 
        title: "Pyrometallurgy Reference Manual", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MT31001_Ref_2023"
      },
      { 
        title: "Electrometallurgy Slides", 
        type: "Slides",
        driveLink: "https://drive.google.com/drive/folders/1MT31001_Slides_2023"
      },
      { 
        title: "Process Design Assignments", 
        type: "Assignment",
        driveLink: "https://drive.google.com/drive/folders/1MT31001_Assign_2023"
      }
    ],
    pyqs: [
      { 
        title: "Extractive Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT31001_MidSem_2023"
      },
      { 
        title: "Extractive Metallurgy End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT31001_EndSem_2023"
      },
      { 
        title: "Extractive Metallurgy Quiz 2023", 
        year: "2023", 
        type: "Quiz",
        driveLink: "https://drive.google.com/drive/folders/1MT31001_Quiz_2023"
      }
    ]
  },
  {
    id: 10,
    name: "Materials Characterization",
    code: "MT31002",
    year: "3rd Year",
    semester: "Autumn",
    studyMaterials: [
      { 
        title: "X-Ray Diffraction Techniques", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT31002_Notes_2023"
      },
      { 
        title: "Electron Microscopy Guide", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MT31002_Ref_2023"
      },
      { 
        title: "Spectroscopy Methods Slides", 
        type: "Slides",
        driveLink: "https://drive.google.com/drive/folders/1MT31002_Slides_2023"
      }
    ],
    pyqs: [
      { 
        title: "Materials Characterization Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT31002_MidSem_2023"
      },
      { 
        title: "Materials Characterization End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT31002_EndSem_2023"
      }
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
      { 
        title: "Blast Furnace Technology", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32001_Notes_2023"
      },
      { 
        title: "Steel Making Processes", 
        type: "Reference",
        driveLink: "https://drive.google.com/drive/folders/1MT32001_Ref_2023"
      },
      { 
        title: "Secondary Refining Slides", 
        type: "Slides",
        driveLink: "https://drive.google.com/drive/folders/1MT32001_Slides_2023"
      }
    ],
    pyqs: [
      { 
        title: "Iron and Steel Making Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32001_MidSem_2023"
      },
      { 
        title: "Iron and Steel Making End-Sem 2023", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32001_EndSem_2023"
      }
    ]
  },
  {
    id: 12,
    name: "Mechanical Metallurgy",
    code: "MT32002",
    year: "3rd Year",
    semester: "Spring",
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
  // 4th Year Autumn
  {
    id: 13,
    name: "Advanced Materials",
    code: "MT41001",
    year: "4th Year",
    semester: "Autumn",
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
    id: 14,
    name: "Corrosion Engineering",
    code: "MT41002",
    year: "4th Year",
    semester: "Autumn",
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
  // 4th Year Spring
  {
    id: 15,
    name: "Project Management",
    code: "MT42001",
    year: "4th Year",
    semester: "Spring",
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