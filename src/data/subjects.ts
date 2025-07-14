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
        title: "Notes & Other Materials", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1bK72DN3Ken15K2Z-H5b2-LcsfkUTxs6b?usp=drive_link"
      }
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/15roxAS5C-oXmWAXkpJnMKe0BaXEAu4ck/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/15SebxXdjK9W6QFB7lUBqozrqqJ377bbE/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2021", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/12OCd56ciOALoOKr73TH1MwvzTegCZAZc/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1VEbUJZGTZI-LLeed2DxPQkW4tukGRJOf/view?usp=drive_link"
      }
    ]
  },
  {
    id: 11,
    name: "INTRODUCTION TO ENGINEERING MATERIALS",
    code: "	MT21107",
    year: "2nd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2015", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1Qo20SCRaeLuwiOxjZKtL3a-2_lX6rjzl/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2016", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1goDDn-DAvALTy6AAmERiWHu4takOJgK1/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2017", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1IWKKwonXrGgOn1udONvDabV4Z5luamUX/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2018", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1-HcsbE_eEY7Gv-VUOxUu7eIsLvHXy7dc/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1pCtcxyj9ptssBIrlbCzFoNmyrC2P-V3b/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1UrtYJFUyLNyLMGTtcyLxgEVXZgA9HNXg/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2015", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1JJ49KKLYtFBCvcuf7pYIgTiDr4TwDoY_/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2016", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1-ZTAraNgyEs2WJ5B-WmRz9BxuBqquGmp/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2017", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1JGHPMVbMS8R8wUSCxMWgHkJC1jkYynvT/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1PfVszPcKJuF_2OZfzUTTbOqmnOhJKQhP/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1JrV86jxQKNjKYGgOaHSsIptM139MnQpc/view?usp=drive_link"
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
        title: "Class Test 2022", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1OAHTK5UWHkhGdxBlLoRx3AN8l8fTmJVn/view?usp=drive_link"
      }
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2016", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1jzxcBKvGT-afOHrLb-L_XzzlC5LAI-Qo/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2017", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1aV08VJRY4VzylfHHlqqdATtJU8dtvnef/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2018", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1-RJYGjzdJYss2xsH_3BAHC4GdqgRxkoD/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1aoC-Ax1DM_2JNlNhXGsYSYl2y6D288eT/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1NtAlRoH06eVdiv4uqNaVjbuqeGhdi0tV/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2015", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1EC2ihEB4nppDegr3-YUZRvAiprRKdK1C/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2016", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1nQNDadiDBUoBrYTlkmbHykMcDEwDi2pU/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2017", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1t6Mv_5d1EXyqBp1XRgRc-aJ3CDI_lZNo/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2018", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1Vfd3n5mvo9xU59Hi1-MGh2JAr2_6zlXo/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/11omslty2uhHKhuteDup4cLRlmDoTiVBt/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/14NIfyvOgPRXtPgM2sdtRY-MO8b6pQkpw/view?usp=drive_link"
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
        title: "Class Test 1", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/14rgYhCSfKqqX_vduXx8-XHw5paXJe9Z-/view?usp=drive_link"
      },
      { 
        title: "Assignment Spring 2020", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1kfL6-yeXqoSHfFtDgB4RXxddXZaO9Tx6/view?usp=drive_link"
      }
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2015", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1ecDm3FW6b-Snmewq_wyFgXVMZlS2rNR6/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2016", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1crxcy6nrC2lmNI08cxEc38TvbgvhwLeG/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2019", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1D7r1wG2zyGY1rBgYC-xK1VfWRsc7q6mi/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2020", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1-TZeq78WKNJdypKJrq2TgauUj_Dyf9Kv/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/19sWI9goZ7_nhW7J3sbaB0Adjua5f8u6s/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1WZPa0M3NcAEHZM0uiQq_aewmP9R9l0GJ/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1HD-xV2fitKXxLfFaWAtFDiD1TtXSlhcW/view?usp=drive_link"
      },
      { 
        title: "Solution 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://docs.google.com/document/d/1cPdLIXiAKRPJQCu-L60xB1PLP0JbNc3h/edit?usp=drive_link&ouid=100294713850971806789&rtpof=true&sd=true"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2018", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1g1U052Tok8Hbt2qmT3O7TG4bMqxDDNRk/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1q_UFLG46uft8fDIvrk59lEhYNaNetSQS/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1TtN1cq1FWHzHoiJm86-J0RvxVIjTiywJ/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1BvEYlk-iafdf_W0dd3veheE-9mqFDqla/view?usp=drive_link"
      },
    ]
  },
  {
    id: 15,
    name: "MACHINE LEARNING METHODS FOR MATERIALS ENGINEERING",
    code: "MT20206",
    year: "2nd Year",
    semester: "Spring Sem",
    studyMaterials: [
      
    ],
    pyqs: [
      
    ]
  },
  {
    id: 16,
    name: "MATERIALS PROCESSING",
    code: "MT20202",
    year: "2nd Year",
    semester: "Spring Sem",
    studyMaterials: [
      
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2015", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1z9HURU30cKQqh21_T3aT6NROzxCGp9MR/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2016", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1279ihidhj-BetIXQBW-MoHSUbSwm2qya/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2017", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1vMrZAK1sqjeu_Rkz_4C7EPednXAoDhyf/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2019", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1DI9rx-u0P3jJ4Ihj06AoPADxSSZLqRo9/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1kHc4EpvqKF0plXzX49FNVrONPPnWq7dX/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2019", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/18zH3ztyW6God-gkvqzwu-jQxxXer6mfr/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1zulWtjCESr6nXb3F8mncMPC0FHehujUv/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1zSiKzpUP3RaBmagbSuli2Vzheqj6-hvb/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1eaIPA7UQtCsDmrQhlWNSUWds4NkCKHuw/view?usp=drive_link"
      },
    ]
  },
  {
    id: 17,
    name: "INTEGRAL TRANSFORMS AND APPLICATIONS",
    code: "MA30210",
    year: "2nd Year",
    semester: "Spring Sem",
    studyMaterials: [
      
    ],
    pyqs: [
      
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
        title: "Assignment 1", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1ZOAJwylMKGKWwNnl_9yuy0vsfiukqlac/view?usp=drive_link"
      },
      { 
        title: "Assignment 2", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1r8EL1or5Dgq4-G4wOXfp7OcozIq_rWHd/view?usp=drive_link"
      },
      { 
        title: "Assignment 3 part-I", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1zDFdxIBYYzzg_A_dXoWtYhuCoUGv0DVi/view?usp=drive_link"
      },
      { 
        title: "Assignment 3 part_II", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1xHef35aTvIAn3SnIwv-TaspCbRH0hHE5/view?usp=drive_link"
      },
      { 
        title: "Assignment 5", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1pYM2nt0BVylgh4Mb-Qu8N651EQs3WqrE/view?usp=drive_link"
      },
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2014", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1bSyMDrDZrGYzGVFrBHaRiJ1BX1QJWvah/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2015", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1QbS_BTNBS90cFO1HKpuU2mpMyt5RC8H-/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2016", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1e4tJmoN894rGqKvOPdFtKB_AOgBGlADh/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1VsGsCRlVfxWELCmz3OpFVRBdGJv3EwR-/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1A3HilKSzoFS578gnzMS63dFJnATMSvE3/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/157NLQkF9VaRK9hzkUeSRYoNgb6itxwrJ/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2018", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1mcGO-ha-ayYpeEwoXH6bPUoAwvQ-5eaL/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1C9AouGb55SevBTaHyl8odnbzxG-aaLXu/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1Gn93dwN_2gw4HrFUhm2sOCsj7pgqwHq7/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1GdWU_tV4y5un3ZEYfR_Nbn5gLnl-baoK/view?usp=drive_link"
      },
    ]
  },
  // 3rd Year  Autumn Sem
  {
    id: 19,
    name: "MECHANICAL TESTING AND WORKING OF MATERIALS",
    code: "MT30201",
    year: "3rd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 20,
    name: "EXTRACTIVE METALLURGY",
    code: "MT30205",
    year: "3rd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 21,
    name: "PHASE TRANSFORMATION AND HEAT TREATMENT OF MATERIALS",
    code: "MT31017",
    year: "3rd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 22,
    name: "CORROSION AND ENVIRONMENTAL DEGRADATION OF MATERIALS",
    code: "MT41013",
    year: "3rd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 23,
    name: "CREEP, FATIGUE AND FRACTURE",
    code: "MT31007",
    year: "3rd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 24,
    name: "MECHANICAL WORKING OF MATERIALS",
    code: "MT31009",
    year: "3rd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 25,
    name: "PRINCIPLES OF EXTRACTIVE METALLURGY",
    code: "MT31015",
    year: "3rd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  // 3rd Year Spring Sem
  {
    id: 26,
    name: "X-RAY DIFFRACTION AND MICROSCOPY",
    code: "MT31202",
    year: "3rd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 27,
    name: "IRON MAKING AND STEELMAKING",
    code: "MT32008",
    year: "3rd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 28,
    name: "ADVANCED MATERIALS",
    code: "MT30204",
    year: "3rd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 29,
    name: "PHYSICS OF MATERIALS",
    code: "MT30202",
    year: "3rd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 30,
    name: "MATERIAL CHARACTERIZATION",
    code: "MT31012",
    year: "3rd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 31,
    name: "X-RAY DIFFRACTION AND TRANSMISSION ELECTRON MICROSCOPY",
    code: "MT31022",
    year: "3rd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
  {
    id: 32,
    name: "EXTRACTIVE METALLURGY OF NON-FERROUS METALS",
    code: "MT41031",
    year: "3rd Year",
    semester: "Spring Sem",
    studyMaterials: [
      { 
        title: "Plastic Deformation Mechanisms", 
        type: "Notes",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_Notes_2023"
      }
    ],
    pyqs: [
      { 
        title: "Mechanical Metallurgy Mid-Sem 2023", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/drive/folders/1MT32002_MidSem_2023"
      }
    ]
  },
];