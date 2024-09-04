import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Aditya Sure",
  title: "Hello, I'm Aditya",
  subTitle: emoji(
    "👋 Welcome to my portfolio! I’m a skilled Software Engineer specializing in Full-Stack Development and Cloud Computing ☁️. From building sleek frontends to designing scalable backends, I’m passionate about crafting impactful digital solutions💼. With a background in Computer Science 🎓 and a drive to tackle complex challenges, I’m always eager to innovate and push boundaries 🚀."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1r_In65hCTrJepJG4ssEUtx-ditoP5oFc/view?usp=drive_link",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/adityasure9",
  linkedin: "https://www.linkedin.com/in/adityasure9",
  gmail: "adityasure980@gmail.com",
  medium: "https://medium.com/@adityvardan",
  display: true
};

const skillsSection = {
  title: "Expertise",
  subTitle: "FULL STACK DEVELOPER WITH A FOCUS ON MODERN TECHNOLOGIES",
  skills: [
    emoji("⚡ Build interactive user interfaces using React.js, Redux, and Angular."),
    emoji("⚡ Design scalable backend services with Node.js, Python (Flask, Django), and Java (Spring Boot)."),
    emoji("⚡ Leverage cloud platforms like AWS, Azure, and GCP for deployment and scalability ☁️."),
  ],
  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SQL/NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Florida",
      logo: `${process.env.PUBLIC_URL}/uflogo.png`,
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "CGPA: 3.6/4",
    },
    {
      schoolName: "Jawaharlal Nehru Technological University, Kakinada (JNTUK)",
      logo: `${process.env.PUBLIC_URL}/Jntuk-logo.png`,
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "August 2018 - May 2022",
      desc: "CGPA: 8.2/10",
    },
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: true
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "One Community Global",
      companylogo: `${process.env.PUBLIC_URL}/ocg.jpg`,
      date: "Jul 2024 - Present",
      desc: "Contributing to a global non-profit organization by developing and maintaining a large-scale open-source project aimed at creating a sustainable future. As a lead developer, I enhanced application scalability, reliability, and user experience.",
      
    },
    {
      role: "Web Developer",
      company: "Indian Servers",
      companylogo: `${process.env.PUBLIC_URL}/isa.png`,
      date: "Feb 2021 - Jul 2021",
      desc: "Worked on a cutting-edge public safety Progressive Web Application (PWA), utilizing machine learning and cloud technologies to enhance public safety measures and user engagement."
    },
    {
      role: "Software Developer Intern (AR Focus)",
      company: "Facebook School of Innovation",
      companylogo: `${process.env.PUBLIC_URL}/siiff.jpg`,
      date: "Feb 2020 - Jul 2020",
      desc: "Developed interactive AR experiences for a leading e-commerce brand, focusing on enhancing user engagement through innovative technology solutions."
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Major Projects",
  subtitle: "Highlighted Projects that Showcase My Skills and Experience",
  projects: [
    {
      image: `${process.env.PUBLIC_URL}/hgn.jpeg`, // Replace with the actual URL of the project image
      projectName: "Highest Good Network (HGNv2) React App",
      projectDesc: "Led the development of key features in the HGNv2 React App, improving user experience and system stability. Managed CI/CD pipelines, resolved critical bugs, and integrated Sentry.io for enhanced error tracking.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/OneCommunityGlobal/HighestGoodNetworkApp" // Replace with the actual URL of the project
        }
      ]
    },
    {
      image: `${process.env.PUBLIC_URL}/e.jpg`, // Replace with the actual URL of the project image
      projectName: "E-commerce Website",
      projectDesc: "Developed a full-stack e-commerce platform with features like user authentication, product listings, shopping cart, and order management. Integrated payment gateways and ensured a responsive design for an optimal user experience across devices.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/adityasure9/Ecommerce" 
        }
      ]
    }
  ],
  display: true
};


const achievementSection = {
  title: emoji(""),
  subtitle: "",
  achievementsCards: [
    {
      title: "",
      subtitle:
        "",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      title: "",
      subtitle:
        "",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      title: "",
      subtitle: "",
      image: "",
      imageAlt: "",
      footerLink: [
        { name: "", url: "" },
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false
};

const talkSection = {
  title: "",
  subtitle: emoji(
    ""
  ),
  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    ""
  ],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "If you need to get in touch, you can contact me here.",
  email_address: "adityasure980@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
