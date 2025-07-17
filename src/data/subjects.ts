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
      
    ],
    pyqs: [
      
    ]
  },
  {
    id: 2,
    name: "BASIC ELECTRONICS",
    code: "	EC21201",
    year: "1st Year",
    semester: "Autumn Sem",
    studyMaterials: [
     
    ],
    pyqs: [
      
    ]
  },
  {
    id: 3,
    name: "BASIC ENGINEERING MECHANICS",
    code: "ME11003",
    year: "1st Year",
    semester: "Autumn Sem",
    studyMaterials: [
      
    ],
    pyqs: [
      
    ]
  },
  {
    id: 4,
    name: "CHEMISTRY",
    code: "CY11003",
    year: "1st Year",
    semester: "Autumn Sem",
    studyMaterials: [
      
    ],
    pyqs: [
      
    ]
  },
  {
    id: 5,
    name: "ENGINEERING DRAWING AND COMPUTER GRAPHICS",
    code: "CE13003",
    year: "1st Year",
    semester: "Autumn Sem",
    studyMaterials: [
      
    ],
    pyqs: [
      
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
      
    ],
    pyqs: [
      
    ]
  },
  {
    id: 7,
    name: "PROGRAMMING AND DATA STRUCTURES",
    code: "CS10003",
    year: "1st Year",
    semester: "Spring Sem",
    studyMaterials: [
      
    ],
    pyqs: [
      
    ]
  },
  {
    id: 8,
    name: "ELECTRICAL TECHNOLOGY",
    code: "EE11003",
    year: "1st Year",
    semester: "Spring Sem",
    studyMaterials: [
      
    ],
    pyqs: [
     
    ]
  },
  {
    id: 9,
    name: "PHYSICS OF WAVES",
    code: "PH11003",
    year: "1st Year",
    semester: "Spring Sem",
    studyMaterials: [
      
    ],
    pyqs: [
      
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
      
    ],
    pyqs: [
      
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
      
    ],
    pyqs: [
      
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
        title: "Class Test", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/15YcQ4VxtS51pG2SvPUOIxqHTdVNBvgap/view?usp=drive_link"
      },
      { 
        title: "Class Test", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1EXV_fZADfJOtJe8IIaIjN9m-CEepZ0BO/view?usp=drive_link"
      }
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2012", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1JSkj4V6tyAgUv7pZNHksFMSiv1gV08_1/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2013", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1AByHIL6_bq3h1szzR7lrwuRIF_cUp0DM/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2014", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1ou117g49tpt78jGKRpTWzlyla2vqSPe5/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2015", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1vMagtqF3a76Ago4M5SqHS0smGAxLveHg/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2016", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1MZqbuHk0TOESVAnrmE48f_-t2LbJuigq/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2017", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/12HFPnnReEMdr4mQ0qAhr6yi3zkhdwubI/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1YJI7l8f07tiIENvbRimy1CeYVw8wV9_7/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/13YA6_UZZe0F8hKQIe2lKeSSNjkMFbQ_r/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1N9VWEOg-qOid8wJzKfAxCIoYqn7294mU/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2013", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1r6oRdoZtSYugMOaDt6Mxzirl-2mryq1Z/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2014", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1LtJ0cBX_RpZu3Ildw612HnmSBFtu88Oi/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2015", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1Y2YSvnAWDA5u-eAk3XEUzkxeTdUnuHP7/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2016", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1Qs67xLSb_Zjrd72VZB4Jn9efLoLLu0mA/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2017", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1mvFu4JesLmNFixSIjXcx9_d1HBmXGf0e/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2018", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1CmvMECyN8pKZujSW7SRciNFBMHDAP3EX/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1Lc1VjnXEWlr2tHTzOlE21jiq8kMBPHz3/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1H41SpdBaSpgpkMRgr09y4QfzJU1Dobhg/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/11xn7EINnKrFVWNFsbSb9myKfozPsUP45/view?usp=drive_link"
      },
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
        title: "Class Test 1 (2020-2021)", 
        type: "Notes",
        driveLink: "https://docs.google.com/document/d/1iH_vxtg2sBCkkz09YlZeuWQDijb5XZGI/edit?usp=drive_link&ouid=100294713850971806789&rtpof=true&sd=true"
      },
      { 
        title: "Class Test 2 (2020-2021)", 
        type: "Notes",
        driveLink: "https://docs.google.com/document/d/1ZlDKGKkUD3HJ0Kdi8dQey3xmGP96Z9wZ/edit?usp=drive_link&ouid=100294713850971806789&rtpof=true&sd=true"
      },
      { 
        title: "Class Test 3 (2020-2021)", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1Yoll8ZioEGW0cUNxFtU7m6a9NCqbx1zb/view?usp=drive_link"
      },
      { 
        title: "Class Test (2023-2024)", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1BiA_oEn5DdYK9rB_p2Z5O1XpcyuBAnwB/view?usp=drive_link"
      },
      { 
        title: "Class Test (2024-2025)", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1mnIJeN_khpOikU8JIf5qKjAMoA373KSv/view?usp=drive_link"
      },
      { 
        title: "Lab Test (2024-2025)", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1AO4pJVAjAPxCSaVWbToIqHk_OFRob94N/view?usp=drive_link"
      },
      { 
        title: "Class Test", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1u9COWVXgj2xjJPFBr6MvF1qhJ0MCXMIb/view?usp=drive_link"
      },
      { 
        title: "Problem set 1 UG 2024", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1nNgDT3S48Basjvifotbd9kqO4XMdo9dV/view?usp=drive_link"
      }
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2012", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1m9yRPSTxVTloRs-axM8xjD7rgYqbPwko/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2013", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1Tft-Rd_68PfN2SQ9U_7s5hXJbKWV6S0b/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2014", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1jVHkzNk-iQrEmHIgG-mmDXLhz8A5QCez/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2015", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1Vh70CfbAJcEupqiJim5PvORQ3BfW2-yE/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2016", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1aXoJa8kC-OAh_QFe3epRtsEeiavPbW0g/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2017", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/14u6geF0buKsJohpKnF3tmRjULxsWH8WE/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1i1JdKuJK2fERCgHEdhHuljksCYj9yHQr/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/18BRvyPJpwRL6x8VNjt84LS6lQFb348hg/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1ZfYGrmUJDYtTiXp85dEGps8wJVG4jIpi/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2013", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/18uJIV_Rf2joUMG15ZUyKD7L2ZumVZ9NO/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2014", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1lOXrf8YuWKF47IPX3YlkePdUPPcE0xuI/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2015", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1EAkSp8R9IsZsCvIIo1sasBHKK1CnTQFa/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2016", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1IzSqQJaHKY9-yA4qfQurcByz8KGuHPaD/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2017", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1BpkVh22xg1E0GgdbrGf6drwONME8xmPr/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2018", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1sJO-g3seD5J0xkPaLgEjZj_KC7o5XL1j/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1zmEFFTkhob2dfjPs1lxv7EIev-O678vo/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/12_ZC_s_qLcqk8428pSv8ue9muJMjgWtW/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1x5vO-o6O0LgVWr-pwRmb3L3pZB8y4Ce8/view?usp=drive_link"
      },
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
        title: "Quize 1 2022", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1bqcnA3-UeI8kRe8Cac_fhsFaIuMqFo9-/view?usp=drive_link"
      },
      { 
        title: "Quize 1 2023", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1yz5GuxMMDPwjHhRL4c8eAqf6_EAtWuym/view?usp=drive_link"
      },
      { 
        title: "Quize 1 2024", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1ya5QyFTrhcuNSjo3eczo5SJm2tnAZILB/view?usp=drive_link"
      },
      { 
        title: "Quize 2", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1tYx3cBHImVH_eXFsNTcIYZIb4AhDoS9B/view?usp=drive_link"
      },
      { 
        title: "Quize 2 Solution", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1_FlUU7P8HBpPPxCgJDy32M32_a7uhnhs/view?usp=drive_link"
      },
      { 
        title: "Quize 3", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1yVxfinzyATDOwOUyms122hKjG_4w_1P3/view?usp=drive_link"
      },
      { 
        title: "Quize 3 Solution", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1xFOO2Dxcd2JkwHQQo0Rs3rHIJPT1aqj7/view?usp=drive_link"
      }
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/18BbQlk1lehcqh-j8m0RPJ8W4MzgY8eJV/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1mPirVhNd8An02vNHzC6tpckUjeFWwXS8/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1n_QG99b1LVziA7dyzOGemGiGPGbNURSU/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2018", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1NU8HulA8rrYWHTvEnWAtw-dTfNYqxQZK/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2019", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1wGdLKBmPCqFM3MYOtOvrsCrHsqChTtbe/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1n_EHhAIqrV5G6CaV2UkDYSeUE52gKyfi/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1YhL85lpekbaFfq_qCIul25fPQBNtuAxY/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1icrPcYf-IC48bYOHmCUikIBI5W9Cj-Gr/view?usp=drive_link"
      },
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
        title: "Assignment 1", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1mfLklw5IPVWXwAt_g1C1VrSGPM9ryjdr/view?usp=drive_link"
      },
      { 
        title: "Assignment 1 Solution", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1PUyzrEnzPKCJ3K4vWMrnHsx-lN6A8bij/view?usp=drive_link"
      },
      { 
        title: "Assignment 2", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1iHdRjmqjG7N_38ORk5hMhJbOyrNp-4gP/view?usp=drive_link"
      },
      { 
        title: "Assignment 2 Solution", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1iHdRjmqjG7N_38ORk5hMhJbOyrNp-4gP/view?usp=drive_link"
      },
      { 
        title: "Assignment 2 (2024-2025)", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1oVA6NWYVOX7EacJHsmfgpDii1srBUQlQ/view?usp=drive_link"
      },
      { 
        title: "Assignment 3", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1RtW-kX0JxrMjLtjog3-HbKclzEe1qvBF/view?usp=drive_link"
      },
      { 
        title: "Assignment 3 Solution", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1zAtL-iDHmd9ryFEgF7BzUWn4Z8QQBoWF/view?usp=drive_link"
      },
      { 
        title: "Assignment QN", 
        type: "Notes",
        driveLink: "https://docs.google.com/spreadsheets/d/1uB5z0k_4SWejqPlmWkTpuXhdhqOlyGPp/edit?usp=drive_link&ouid=100294713850971806789&rtpof=true&sd=true"
      },
      { 
        title: "Assignment 3 (2024-2025)", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1laxAzsDjIj_e3BdltZ22WBnoQ_EQ6qei/view?usp=drive_link"
      },
      { 
        title: "Assignment 4 (2024-2025)", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1rt650GyLgRajDmNYBR9RXCNKFZlX1F76/view?usp=drive_link"
      },
      { 
        title: "Assignment 4 (2023-2024)", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1DIaQSUd7j23eHnuU4j5L0RmuB1ZQxn7p/view?usp=drive_link"
      },
      { 
        title: "Class Test 2022", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1tjNpuL26dqFBkNopbVHPzGpz6FT_Xf8r/view?usp=drive_link"
      },
      { 
        title: "Class Test 2023", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1ElE1yPkCKtKB6Lt8FD2nkEbbxvOWYQ2B/view?usp=drive_link"
      },
      { 
        title: "Class Test-I 2024", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1j4Jy3T0aytBL4usQy9lgvEHmicQhYy7-/view?usp=drive_link"
      },
      { 
        title: "Class Test-II 2024", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1waLaIorPFMzoGZZIsmKYEwLJXJ6oFF8h/view?usp=drive_link"
      },
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2017", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1qOJdvARrg7WwAkKK4ICwen1rETSFjhSz/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2018", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1xMto6i2sKbOyXIpMYKTOeIRi5AQAnrOl/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/14wZ6OMR2tNFZzWG3ISvubTJ6aHJuO2VN/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/11rXldu0Jk1n2PPkibGsAFC68we1egkDU/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1rjsBTL4RPBUj65Tdshgy468we2ylh0mm/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2013", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1lqUyriNumN4KS403poi_YX669wM7LikY/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2014", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1oHQSNF-bcW1rndSSSyhb_tDCz1ygiHdF/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2015", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1R2EubF9huZDM6W59usMl3mGNkpvpM-R-/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2016", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1OEKBOXfUMRtB7rLfsEggTt3HReBKXjlx/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2017", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1CNb6alpw8nQnxcz4nWR7W4eojzOm97RG/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2018", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1AN2BKTbtOYRCj9d5PaB1CLL-iXJF7KXZ/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1SLe3jEFIVNHhu1P8hjhHVQLf8xeryAv9/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1NmaLjmhLKbbRuOWSLZRH3yaK4-u943AJ/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1y-LEleQtFfNik0zn0vOUl73WBdKaiQHc/view?usp=drive_link"
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
        title: "Sever plastic deformation", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1H256cp4Eihfa3zFbpR_Go77Pko_b4bxf/view?usp=drive_link"
      },
      { 
        title: "Class Test (2020)", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1LFbLYFuncU2aH1o3WH20dkvILFnddo_k/view?usp=drive_link"
      },
      { 
        title: "Class Test (2024)", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1u-qsP08QD7gF7-w1bRFEI6quMOs3pnz7/view?usp=drive_link"
      },
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2014", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1d-aNWXHioiyoHjd2_OSStHDBmRsHrCXi/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2015", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/16Vk4bb2hqm8eeqtiUIDdD7hLOGUZR_Xv/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2016", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1kGjPk3aKiGKXX48OiU0pZc0xdlXKIP-d/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2017", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1cGOyJgewPrva-vcbB2EgRM-APbrewNt9/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/12ogUEAIAANn8K9KCbdO65g-EARixlqjd/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1ofZhT8chizAq3t3XAK7fRkLna9lU0D1Z/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/12C5Vc45aUGSAaRLODQhciW_EpA8Kmzho/view?usp=drive_link"
      },
      { 
        title: "Mid-Sem-MWoM", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/10GyQpzHYqaU-VmBiFZqHdL4ck-pPso5R/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2013", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/10y60EJWaML_LVJ2RbJNnHFWG-iclLRcD/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2014", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1EwrjdZXXt_A4nLff0KkWmlXU8p0mfN_Q/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2015", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1dyx1FL6pFiTlzAb-vXfKRFcXDPzuVujs/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2016", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/16eb5mJ98y89awy5KugDqk8A4KrGt1EgS/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2017", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1ZOyoFBOxdN6K7l7GB1eWCahz1CZwJSbM/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2018", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/123SmaBYiXiVT1q3dxG3m9TVCQnZZPi98/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1tJD2Njwb1uq-fEFHjgwTu569CZCtU892/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1Nuva9yZOS-m3gV0lN_vzWKzbGlEqo5rk/view?usp=drive_link"
      },
    ]
  },
  {
    id: 25,
    name: "PRINCIPLES OF EXTRACTIVE METALLURGY",
    code: "MT31015",
    year: "3rd Year",
    semester: "Autumn Sem",
    studyMaterials: [
      
    ],
    pyqs: [
      
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
        title: "Assignment 1, XRD", 
        type: "Notes",
        driveLink: "https://docs.google.com/document/d/1LSyAnDcpftHtoparc5p5SvNtROnsvSAl/edit?usp=drive_link&ouid=100294713850971806789&rtpof=true&sd=true"
      },{ 
        title: "Assignment 2, XRD", 
        type: "Notes",
        driveLink: "https://docs.google.com/document/d/17Azd5WHLPHJwQp6VODgDLfEzyyycgkhk/edit?usp=drive_link&ouid=100294713850971806789&rtpof=true&sd=true"
      },{ 
        title: "Assignment 2", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1RMhjjVZrDgNzd9HqFyzV7oZutKkJfFFY/view?usp=drive_link"
      },{ 
        title: "2023-2024 CT-I", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1HI-Q1EwUoq7xWLjDrVW06_rkNOVX4plW/view?usp=drive_link"
      },{ 
        title: "2023-2024 CT-II", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1_mfAL_T2LDyuStV5h-8fIwtEpesW1rVF/view?usp=drive_link"
      },{ 
        title: "2024-2025 CT-I", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1jqtBqkDpTHZ8fh-9q-MG8xlgd4psIG7b/view?usp=drive_link"
      },{ 
        title: "2024-2025 CT-II", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1PhfS5AvAzRQKkelmso0f5686GhADHlvT/view?usp=drive_link"
      },{ 
        title: "2024-2025 Lab Test", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/10M3KYG4u0yDcEUAIG-dekJzZWkWZfo2Q/view?usp=drive_link"
      },
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2017", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1ckkUmL4O8tDuHEwlJYjiETXxD0Fra4Zg/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2019", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1v-TYrtaJWqvw7_43sfe4Lvnm1ycyevE0/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/18fyaYO7v-h0yPaUcvGldgo0MZ_vN4QkH/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1VNfi76bEuJDIltXfQvKjjSddzHjSMfRS/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/18oj6VCqWsXwH9lAq2PvBKLMI_dPZbX2A/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2024 Compensatory", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1dCh4SnIb4refy3lKS5L4Oed1hWpzWCKP/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2016", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1HxX8d5O-m_pGPjo00PjVgEcNOHTusK2D/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2017", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/12fLgcnAGGA8n3UoiaP70uoSXmtM7SNfX/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2018", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1PJSFvSqcXxFm1rDxHT5J907aLZlVEK2f/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1m3H45wkyS9Y_NtIazwrgE3MM-PmuXygH/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1CRRt29j0vjBUFXCRMamx5nrZUAacv4Z7/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/11-qirpAh8COA1sf0phew1h_dYHzFrYbs/view?usp=drive_link "
      },
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
        title: "Assignment 1", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1-r0Z5TG6RE5koewmNFO-v6rerAr9wvNp/view?usp=drive_link"
      },
      { 
        title: "Assignment 1-Sol", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1vdqUMxCexSOlDkcIUk_0_MehPrkQqHIt/view?usp=drive_link"
      },
      { 
        title: "Assignment 2", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1C7JXgaVbyLYpzYo-mG3X9tu-cgIQFySS/view?usp=drive_link"
      },
      { 
        title: "Assignment 2-Sol", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1wzIuh2z_OKxJiK1BALS0LZBY1rKjh5aa/view?usp=drive_link"
      },
      { 
        title: "Assignment 3", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1c-fKKmObpwaOTD6XxeFhrGRd0FKKilyf/view?usp=drive_link"
      },
      { 
        title: "Assignment 3-sOL", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1YYbZrzHbNm_6n3jLsjkOY4B7FYIufknc/view?usp=drive_link"
      },
      { 
        title: "Assignment 4", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/15E5iL-5JE6FXQCpGeBh6V9qdl_ZT9KFz/view?usp=drive_link"
      },{ 
        title: "Assignment 4-Sol", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1RH-yNjjD0eXjqcndRu3mkjj_nuRBE-lb/view?usp=drive_link"
      },{ 
        title: "Assignment 5", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/11funWZSxcEbzrDfLdYVkM3cInb6ZgmNZ/view?usp=drive_link"
      },{ 
        title: "Assignment 5-Sol", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1Qm6MwFoTrJqdqU59RjeIKQPG79n3mcO2/view?usp=drive_link"
      },{ 
        title: "Assignment 6", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1Dw5XXL2qJ3B6fj2d4IdpSoezlCBTqIGL/view?usp=drive_link"
      },{ 
        title: "Assignment 6-Sol", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1rNApGZYrIGraQ8mwWXSIlaf1DYuKLteP/view?usp=drive_link"
      },{ 
        title: "Assignment 7", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/16VjtNgIe4PfsdM0Y2cWE8Vu9A1PvuIdT/view?usp=drive_link"
      },{ 
        title: "Assignment 7-Sol", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1z2iT2kXYBQ7k3jTci0opEodFifuSs814/view?usp=drive_link"
      },{ 
        title: "Assignment 8", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1aW9ePYg8IhlNbQ4lAN46GY6YwsX0mAM1/view?usp=drive_link"
      },{ 
        title: "Assignment 8-Sol", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1ldM48pALuu0t36ZysQG140w0ZascusWe/view?usp=drive_link"
      },{ 
        title: "Assignment 9", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1Q2yjr0unHmzwNUwc7_mmPEbbGV_F0kBB/view?usp=drive_link"
      },{ 
        title: "Assignment 9-Sol", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1dHK9XgFgdf7L37ZYuxLeOczfHLirdySF/view?usp=drive_link"
      },{ 
        title: "Assignment 10", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1S63GmtgkNiM13rypjCGmAjyyGTwxG1IU/view?usp=drive_link"
      },{ 
        title: "Assignment 10-Sol", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1S7bsMy0CDXvhUZ-Yry37eAN2PPpE9CCP/view?usp=drive_link"
      },{ 
        title: "Tutorial Assignment 1", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1w-80vPxj0rvYUGOktEGwoIuRwJgMABEe/view?usp=drive_link"
      },{ 
        title: "Tutorial Assignment 2", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1ol_qW7IWi1Rw-IH0TwgHtv2jPtBtlhJv/view?usp=drive_link"
      },
      { 
        title: "2023-2024 CT-1", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1evKCfqptPCvshh8mJiLnLhuYrjDgQIvV/view?usp=drive_link"
      },
      { 
        title: "2023-2024 CT-II", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1z8tT_yYjegoi9QdD17hP6qIosNRmKNqf/view?usp=drive_link"
      },
      { 
        title: "2024-2025 CT-I", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1vO7tZQsNF6Qk2pcbvVw4w1juBGC5Kdt6/view?usp=drive_link"
      },
      { 
        title: "2024-2025 CT-II", 
        type: "Notes",
        driveLink: "https://drive.google.com/file/d/1jyQ81379lSqhgcXLLDWkf5RNiEsT8yW5/view?usp=drive_link"
      }
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2017", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1Z_qsy-lled8rCJGbOCeTIsueTu4UIogo/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2019", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1VcTCfBBqIGwvNu_L5z49Ozl3U15Ags5j/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1xK3_PlRam412jW2BX-kFAGluokzWws_y/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1Eh_dVASxL2DQw3TBwCFFAtHRYW7iYeco/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1lMzu9N5UDdqTqdY9n_8n_3ZENcNLW8ce/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1d896PkqCX2DtbwO5TaSANp6UUPCMb2ld/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1ena7DQo92CZWpfmzoSknHeNgmrMcYGz8/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1XD-JtNi_UNlwfglXpU0RO02b4AAOMVnL/view?usp=drive_link"
      },
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
      
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/13qq8EIjv65QnQh8PswDk0w1hV8R5Kf7b/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1MoRoghA6cI-EYd18imcuaZYydhmmcdmd/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1nziVO2nhGP5ZMLEE08t4N9Z0RP4rI1Vk/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1_Lykis_azuHkXUbm9ytcfzjEdzYHy31g/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1RUUOIkCDBsMSm0Ekl7O4P8Pz3uUkQnAU/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1REB0mvVBNQt8tqMRroxzJ_G0u5XLGxTa/view?usp=drive_link"
      },
    ]
  },
  {
    id: 30,
    name: "MATERIAL CHARACTERIZATION",
    code: "MT31012",
    year: "3rd Year",
    semester: "Spring Sem",
    studyMaterials: [
      
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2017", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1xvqBA3EIXVWJw1JlF-7PdZPm7-mVDTtH/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2019", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1x4fCqo3gqG1xvMQ4_qQxBghofUX3aJJ6/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/17trpn9jI-th4ZJ_fwsrkVy7O_4b43u3G/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1d10JFgtNzmTYx9NXcI56UwmAHt_9o8_B/view?usp=drive_link"
      },{ 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1PfDdBtV3YdnMyHuatCTibzfms8CBLplH/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1RyivsHo0E0RGVNqkBhPc0Io9mcVfX-Fy/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1kvqP8EeRsHyl5LU7Y4Rd4XYltj46B4G4/view?usp=drive_link"
      },{ 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/112-glypiXYBviF8Klb2jaVSEik2ub2ZV/view?usp=drive_link"
      },
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
      
    ],
    pyqs: [
      { 
        title: "PYQ Mid-Sem", 
        year: "2022", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1graG-Ci9pgU8KsjOJT8kcJqLJAXTHeQ5/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2023", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1RixhglUZP9bfR1dlZ85jERgbObTkp0Um/view?usp=drive_link"
      },
      { 
        title: "PYQ Mid-Sem", 
        year: "2024", 
        type: "Mid-Sem",
        driveLink: "https://drive.google.com/file/d/1graG-Ci9pgU8KsjOJT8kcJqLJAXTHeQ5/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2022", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1uvQE3V1fYlHpvJWfQyElYJg-DbRklHjC/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2023", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1WESJyl9HnEqK023jnYCEsZUK2qr2beh3/view?usp=drive_link"
      },
      { 
        title: "PYQ End-Sem", 
        year: "2024", 
        type: "End-Sem",
        driveLink: "https://drive.google.com/file/d/1F9CcMakog3DbCdyIMjCNnA5qT7xzVT-y/view?usp=drive_link"
      }, 
    ]
  },
];