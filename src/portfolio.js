/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Igwe Uchenna Felix",
  title: "Hi all, I'm igweKodes",
  subTitle: emoji(
    "A Software engineer with two years of knowledge of software design, development, and testing. Utilizing my broad educational background in engineering with excellent analytical, technical, experience, and programming skills to build products and thrive as a software developer."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kQOlLLNn9Qj8CMgGifn1s8btQcXmn3LL/view?usp=sharing",
  workresumeLink:
    "https://drive.google.com/file/d/1detckV0_1O9mLyfQBwNN7ZWGRFgwXK7D/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/fesimaxu",
  linkedin: "https://www.linkedin.com/in/uchennaigwe",
  gmail: "igweuchennafelix@gmail.com",
  //twitter: "http://twitter.com/fesimaxu",
  medium: "https://medium.com/@codinguchenna",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "SOFTWARE ENGINEERING, BLOCKCHAIN APPLICATION DEVELOPMENT AND RESEARCH",
  skills: [
    emoji("⚡ Create scalable products leveraging cutting edge backend tools"),
    emoji(
      "⚡ Develop highly efficient web and blockchain applications with well optimized algorithm"
    ),
    emoji("⚡ Deployment and scaling of RESTFUL API's using nodejs and java"),
    emoji("⚡ Building Test driven applications"),
    emoji("⚡ Building application microservices"),
    emoji("⚡ Data analyst with python"),
    emoji("⚡ Technical writing on building software and blockchain products"),
    emoji("⚡ Product research, development and documentation"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "typeScript",
      fontAwesomeClassname: "fab fa-ts",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "bitcoin open source",
      fontAwesomeClassname: "fa-brands fa-bitcoin",
    },
    {
      skillName: "ethereum",
      fontAwesomeClassname: "fa-brands fa-ethereum",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fa-brands fa-java",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fa-brands fa-linux",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "MongoDb",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Cassandra",
      fontAwesomeClassname: "fas fa-server",
    },
    {
      skillName: "Graphql",
      fontAwesomeClassname: "fas fa-project-diagram",
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fa-brands fa-jira",
    }
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "60%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",
      progressPercentage: "60%"
    }
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer, Backend",
      company: "Decagon",
      companylogo: require("./assets/images/decagon.png"),
      date: "April 2023 – Present",
      desc:
      "An Edutech company mentoring young african developers on software development and also build software solutions for their clients.",
      descBullets: [
        "Interact with product owners, partners and business stakeholders to understand and build software solutions.",
        "Design, Build and Expand micro-services architecture.",
        "Review and debug code.",
        "Build test driven applications and implementing security best practices.",
        "Performed on-site software maintenance for end-users."
      ],
    },
    {
      role: "Software Engineer, Backend",
      company: "Huawei Technologies Inc, Lagos",
      companylogo: require("./assets/images/huawei.jpeg"),
      date: "Dec 2020 – Dec 2022",
      desc:
        "Huawei Technologies is a software techology company provides telecommunication services for network services provides, financial institutions and tech compaines",
      descBullets: [
        "Design and implement new features and enhancements of existing software using nodejs.",
        "Debugging and improvement of existing system.",
        "Document development phases and monitor system dashboard for optimization.",
        "Design, innovate and solve complex algorithm problems to improve legacies source codes.",
        "Collaborate with internal quality assurance and testers to fix and improve existing software."
      ],
    },
    {
      role: "Software Engineer, Solidity",
      company: "Web3bridge Africa",
      companylogo: require("./assets/images/web3bridge.png"),
      date: "Sept 2022 – April 2023",
      desc:
        "Web3bridge is an Edutech company training aspiring blockchain developers and also build blockchain solutions for their clients in the web3 space:",
      descBullets: [
        "Participated in building a Decentralized Autonomous Organization(DAO) which controls creating of proposals, voting for proposals, earning of DAO tokens by DAO members and seasonal equity given to DAO members.",
        "Built a staking contract that allows users with a specified NFT to stake specific tokens in contract.",
        "Created an upgradable ERC20 and ERC721 token using Diamond standard EIP-2535 and Proxy EIP-1822.",
        "Designed a blockchain solution for pharmaceutical supply chain using QR-code verification integration method."
      ],
    },
    {
      role: "Data Analysis",
      company: "Scholar Nurture",
      companylogo: require("./assets/images/scholarNurture.jpeg"),
      date: "April 2021 – Oct 2021",
      desc:
        "Scholar Nurture Nigeria is a non-profit. Its vision is to develop Nigeria’s AI ecosystem and position the country as a world-class AI skill, research and outsourcing destination. As a Data Analyst at SN, I worked on the following",
      descBullets: [
        "Analysis of Sport data telling the history of olympics.",
        "Data cleansing, and sorting using data analytical tools like beautiful soap.",
        "Data sourcing and webscrapping of website and analysis of data to improve end user experience.",
      ],
    }
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_PERSONAL_WEBSITE_TOKEN,
  githubUserName: "@fesimaxu", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

// const bigProjects = {
//   title: "Publications and Preprints",
//   subtitle: "A COUPLE OF RESEARCH PROJECTS I HAVE WORKED ON",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       link: "http://saayahealth.com/"
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       link: "http://nextu.se/"
//     }
//   ]
// };

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Qala Bitcoin Protocol Development Course",
      subtitle:
        "By completing this course, learners have demonstrated dedicated effort towards acquiring a comprehensive understanding of Bitcoin and its technical functionalities.",
      image: require("./assets/images/qala1.png"),
      footerLink: [
        {
          name: "Recognition Link",
          url:
            "https://verified.sertifier.com/en/verify/24062150200509/?ref=email",
        },
      ],
    },
    {
      title: "Qala Mastering Bitcoin Course",
      subtitle:
        "Qala Mastering Bitcoin Course and have gained a technical mastery of Bitcoin's underlying concepts. The course is a virtual study group of the bestselling book Mastering Bitcoin: Programing the Open Blockchain by Andreas M. Antonopoulos. ",
      image: require("./assets/images/qala1.png"),
      footerLink: [
        {
          name: "Recognition Link",
          url:
            "https://verified.sertifier.com/en/verify/62667079707694/?ref=email",
        },
      ],
    },
    {
      title: "Graduate Member Nigerian Society of Engineers",
      subtitle:
        "A professional certification as a graduate member of Nigerian Society of Engineers.",
      image: require("./assets/images/nse.jpg"),
      footerLink: [
        {
          name: "Certification Link",
          url:
            "https://drive.google.com/file/d/1Y-ZNlzQ8ZkeugcwoDpeGQQKE8bV9Q8Qp/view?usp=drive_link",
        },
      ],
    },
    {
      title: "Scholar Nurture Data Analysis Program",
      subtitle:
        "A professional, 6 course, hands-on approach to data analysis with Python",
      image: require("./assets/images/scholarNurture.jpeg"),
      footerLink: [
        {
          name: "Certification Link",
          url:
            "https://drive.google.com/file/d/1HWVyT9B0JonnFH8Kshq_iAUTEgIy2CLA/view?usp=drive_link",
        },
      ],
    },
    {
      title: "Third Position Polygon African Hackathon 2022",
      subtitle:
        "Polygon Africa Bootcamp Certificate of Participation",
      image: require("./assets/images/polygon.png"),
      footerLink: [
        {
          name: "Certification Liink",
          url: 
            "https://drive.google.com/file/d/1M3g5OgLQ6wzjK9EyYD_2OJ7yGnLbSNEY/view?usp=drive_link"
        }
      ],
    }
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write technical articles and teach others what I have learnt. Find some of my recent articles below:",

  blogs: [
    {
      url:
        "https://medium.com/coinsbench/implementing-universal-upgradeable-proxy-standard-uups-a23772c66d68",
      title:
        "Implementing Universal Upgradeable Proxy Standard",
      description:
        "A technical article on how to implement UUPs EIP-1822 on ethereum blockchain",
    },
    {
      url:
        "https://medium.com/@codinguchenna/difference-between-web-2-0-and-web-3-0-2a2f05ece7f5",
      title:
        "The difference between web2 and web3 technology",
      description:
        "A clear description between web2 and the emerging web3 technology trend in the eco system",
    }
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I love to have discussions on software technology, emerging new technologies and open source projects😅"
  ),

  talks: [
    // event talks
  ],
};

const paperSection = {
  title: "Research Papers",
  subtitle: "I have carried out and been involved in a couple of research",

  blogs: [
    // paper publications
    // 
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast🎙️"),
  subtitle: "I haven't appeared on any Podcast but hopefully soon.",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // podcast information
  ],
};

const contactInfo = {
  title: emoji("Contact Me☎️"),
  subtitle:
    "Want to say hi? My Inbox is open for all.",
  email_address: "igweuchennafelix@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "fesimaxu", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  paperSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
