export const director: {
  full_title: string;
  first_name: string;
  full_name: string;
  email: string;
} = {
  full_title: "Dr. Farhana H. Zulkernine",
  first_name: "Farhana",
  full_name: "Farhana H. Zulkernine",
  email: "farhana.zulkernine@queensu.ca",
};

export const directorAwards: { year: number; name: string }[] = [
  {
    year: 2021,
    name: "Best Paper Award, IEEE International Conference on Big Data Computing Service and Applications (BigDataService)",
  },
  {
    year: 2021,
    name: "Best Paper Award, International Workshop on Mining and Learning in the Legal Domain (MLLD)",
  },
  {
    year: 2021,
    name: "Best Student Paper Award, IEEE International Conference on Cognitive Machine Intelligence (CogMI)",
  },
  {
    year: 2020,
    name: "Best Student Paper Award, IEEE International Conference on Pervasive and Intelligent Computation (PICom)",
  },
  {
    year: 2020,
    name: "Best Paper Award, IEEE Information Technology, Electronics and Mobile Communication Conference (IEMCON)",
  },
  {
    year: 2014,
    name: "Queen's University Faculty Association Award for Scholarly Research and Professional Development",
  },
  {
    year: 2012,
    name: "NSERC Postdoctoral Fellowship Award",
  },
  {
    year: 2010,
    name: "Mitacs Elevate Industrial Postdoctoral Fellowship",
  },
  {
    year: 2007,
    name: "Best Paper Award, IEEE Workshop on Service Oriented Architectures in Converging Networked Environments (SOCNE)",
  },
];

interface Education {
  degree: string;
  institution: string;
  year: number;
  thesis: string;
}
export const directorEducation: Education[] = [
  {
    degree: "PhD, Computing",
    institution:
      "School of Computing, Queen's University, Kingston, ON, Canada",
    year: 2009,
    thesis:
      "A Comprehensive Service Management Middleware for Autonomic Management of Composite Web Services-based Processes",
  },
  {
    degree: "MSc (Eng.), Computer Science and Engineering",
    institution:
      "Bangladesh University of Engineering and Technology, Dhaka, Bangladesh",
    year: 1997,
    thesis:
      "Computer Aided Testing and Tutoring System Using Multiple Choice Questions",
  },
  {
    degree: "BSc (Eng.), Computer Science and Engineering",
    institution:
      "Bangladesh University of Engineering and Technology, Dhaka, Bangladesh",
    year: 1993,
    thesis:
      "Computerization of the Registration, Examination and Tabulation System of a University",
  },
];

interface Course {
  code: string;
  name: string;
  url?: string; // Course page in /public/courses
}
export const directorTeaching: { term: string; courses: Course[] }[] = [
  {
    term: "Winter 2027",
    courses: [
      {
        code: "COGS 100",
        name: "Introduction to Cognitive Science",
        url: "/courses/cogs-100.html",
      },
      {
        code: "CISC 874",
        name: "Neural and Cognitive Computing",
        url: "/courses/cisc-874.html",
      },
    ],
  },
  {
    term: "Fall 2026",
    courses: [
      {
        code: "COGS 100",
        name: "Introduction to Cognitive Science",
        url: "/courses/cogs-100.html",
      },
    ],
  },
];

export const directorPreviousCourses: Course[] = [
  { code: "COGS 100", name: "Introduction to Cognitive Science" },
  { code: "COGS 201", name: "Cognition and Computation" },
  { code: "COGS 300", name: "Programming Cognitive Models" },
  { code: "COGS 499", name: "Advanced Undergraduate Project" },
  {
    code: "COGS 400/CISC/CMPE 452",
    name: "Neural and Genetic Cognitive Models",
  },
  { code: "CISC 874", name: "Neural and Genetic Computing" },
  { code: "CISC 432/832", name: "Advanced Database Management Systems" },
];

interface Conferences {
  title: string;
  workshop?: string;
  workshop_url?: string;
  conference: string;
  conference_url: string;
  date: string;
  location: string;
}
export const directorConferences: Conferences[] = [
  {
    title: "Symposium Co-chair",
    workshop: "Cognitive Robotic Systems",
    conference:
      "IEEE Computers, Software, and Applications Conference (COMPSAC)",
    conference_url: "https://ieeecompsac.computer.org/2026/",
    date: "July 7-10, 2026",
    location: "Madrid, Spain",
  },
  {
    title: "Workshop Vice Chair & Track Chair",
    workshop: "Big Data and Analytics",
    conference:
      "International Conference on Ambient Systems, Networks and Technologies (ANT)",
    conference_url: "https://cs-conferences.acadiau.ca/ant-26/",
    date: "April 14-16, 2026",
    location: "Istanbul, Türkiye",
  },
  {
    title: "Workshop Chair",
    workshop: "Internet of Things in Healthcare Data Analytics (IoTHDA)",
    workshop_url: "https://cs-conferences.acadiau.ca/icth-25/workshops.html",
    conference:
      "International Conference on Current and Future Trends in Information and Communication Technologies in Healthcare (ICTH)",
    conference_url: "https://cs-conferences.acadiau.ca/icth-25/",
    date: "October 28-30, 2025",
    location: "Istanbul, Türkiye",
  },
  {
    title: "Workshop Vice Chair & Track Chair",
    workshop: "Big Data and Analytics",
    workshop_url: "https://cs-conferences.acadiau.ca/ant-25/#workshop_approved",
    conference:
      "International Conference on Ambient Systems, Networks and Technologies (ANT)",
    conference_url: "https://cs-conferences.acadiau.ca/ant-25/",
    date: "April 22-24, 2025",
    location: "Patras, Greece",
  },
  {
    title: "Program Chair",
    conference:
      "Canadian Artificial Intelligence Association (CAIAC) Conference",
    conference_url: "https://www.caiac.ca/en/conferences/canadianai-2023/home",
    date: "June 5-9, 2023",
    location: "Montréal, Canada",
  },
  {
    title: "Program Chair",
    conference: "IEEE International Conference on Digital Health (ICDH)",
    conference_url: "https://conferences.computer.org/icdh/2022/",
    date: "July 11-15, 2022",
    location: "Barcelona, Spain",
  },
  {
    title: "Program Chair",
    conference: "IEEE International Conference on Digital Health (ICDH)",
    conference_url: "https://conferences.computer.org/icdh/2021/",
    date: "September 5-11, 2021",
    location: "Virtual",
  },
  {
    title: "Program Chair",
    conference: "IBM International Conference CASCON X EVOKE",
    conference_url:
      "https://www-40.ibm.com/ibm/cas/canada/newsletter/202201.pdf",
    date: "November 22-25, 2021",
    location: "Virtual",
  },
];

export const directorInterests = [
  "Big and Streaming Data Management and Analytics",
  "Artificial Intelligence",
  "Deep Learning",
  "Decision Support Systems (DSS)",
  "Cognitive Computing",
  "Knowledge Management Systems",
  "Cloud and Services Computing",
];

export const directorApplications = [
  "Medical/Health",
  "Biology",
  "Smart Cities",
  "Autonomous Vehicles",
  "Engineering",
  "Environment",
  "Internet of Things",
  "Law",
  "Business",
];

export const directorMembership = [
  "CAIAC",
  "SOSCIP Scientific Committee ",
  "PEO",
  "Queen's Conflicts Analytics Lab",
  "IEEE Computer Society",
  "ACM",
  "INSTICC",
];
