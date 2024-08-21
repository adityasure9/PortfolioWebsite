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
  title: "Hello everyone, I'm Aditya",
  subTitle: emoji(
    "Full Stack Developer with hands-on experience in the MERN stack and cloud technologies (AWS, Azure) ☁️. Proficient in building scalable web applications 🌐, optimizing CI/CD pipelines 🚀, and implementing DevOps practices 🛠️. Eager to contribute to innovative tech projects by applying strong problem-solving skills 🧩 and a passion for continuous learning 📚."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1t4hcDKZU-K6HOl6daOfGkgmSs8Dw9gzl/view?usp=drive_link",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/adityasure9",
  linkedin: "https://www.linkedin.com/in/aditya-sure-406093180/",
  gmail: "adityasure980@gmail.com",
  medium: "https://medium.com/@adityvardan",
  display: true
};

const skillsSection = {
  title: "My Expertise",
  subTitle: "SKILLED SOFTWARE DEVELOPER KEEN ON EXPLORING NEW TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Build highly interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji(
      "⚡ Integrate third-party services such as Azure, AWS, and others"
    )
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Florida",
      logo: require("./public/uflogo.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "CGPA: 3.72/4"
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
  displayCodersrank: false
};

const workExperiences = {
  display: false,
  experience: [
    {
      role: "",
      company: "",
      companylogo: "",
      date: "",
      desc: "",
      descBullets: [
        ""
      ]
    },
    {
      role: "",
      company: "",
      companylogo: "",
      date: "",
      desc: ""
    },
    {
      role: "",
      company: "",
      companylogo: "",
      date: "",
      desc: ""
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  title: "",
  subtitle: "",
  projects: [
    {
      image: "",
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      image: "",
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: false
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
  display: true
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
  display: false
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
