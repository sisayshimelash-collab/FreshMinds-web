/**
 * FreshMinds Academy — Centralized Site Configuration
 * Update links, stats, and metadata here without editing individual components.
 */

export const siteConfig = {
  name: "FreshMinds Academy",
  shortName: "FreshMinds",
  tagline: "Your Key to Freshman Success!",
  taglineAmharic: "የፍሬሽማን ስኬት መክፈቻ ቁልፍ",
  description:
    "Helping Ethiopian students learn, practice, prepare, and navigate university life with confidence.",
  mission:
    "To make useful, accessible, and practical educational support easier for Ethiopian students to access.",
  vision:
    "A future where every Ethiopian student can find the resources, guidance, and support they need to move forward with confidence.",
  
  // Community Stats & Links
  community: {
    memberCount: "5,000+",
    memberCountLabel: "Community Members",
    reachedCount: "Thousands",
    reachedCountLabel: "Students Reached",
    appCount: "1",
    appCountLabel: "Dedicated Mobile App",
    telegramHandle: "@FreshMinds_Academy",
    telegramUrl: "https://t.me/FreshMinds_Academy",
    description:
      "A vibrant hub for Ethiopian freshmen to access curriculum updates, academic materials, exam tips, and peer encouragement."
  },

  // Mobile App Download Configuration
  app: {
    status: "coming_soon", // Options: "available" | "coming_soon"
    googlePlayUrl: "", // Will activate when published on Play Store
    badgeText: "Coming Soon on Google Play",
    version: "v1.1",
    platforms: ["Android (Expo Native)", "iOS (Upcoming)"],
    features: [
      {
        id: "courses",
        title: "Structured Courses",
        titleAmharic: "የተዋቀሩ ኮርሶች",
        desc: "Curated modules specifically designed for Ethiopian freshman Natural & Social Science curriculums."
      },
      {
        id: "practice",
        title: "Practice Mode",
        titleAmharic: "የልምምድ ሁነታ",
        desc: "Untimed questions with instant explanations, step-by-step solutions, and key formula reviews."
      },
      {
        id: "exam",
        title: "Exam Simulation",
        titleAmharic: "የፈተና ማስመሰል",
        desc: "Real test conditions with countdown timers, question navigation, and thorough performance scoring."
      },
      {
        id: "offline",
        title: "Offline Learning",
        titleAmharic: "ያለ ኢንተርኔት ማጥናት",
        desc: "Download video lectures and study notes directly to your device to study anytime without using data."
      },
      {
        id: "notes",
        title: "Comprehensive Notes",
        titleAmharic: "አጠቃላይ ማስታወሻዎች",
        desc: "Detailed chapter notes and markdown reading materials to quickly summarize core course points."
      }
    ]
  },

  // Official Social Channels
  socials: {
    telegram: "https://t.me/FreshMinds_Academy",
    youtube: "https://youtube.com/@FreshMinds_Academy",
    linkedin: "https://linkedin.com/company/freshminds-academy"
  },

  // Official Contact
  contact: {
    email: "freshmindsacademy@gmail.com",
    telegramSupport: "https://t.me/FreshMinds_Academy",
    location: "Addis Ababa, Ethiopia"
  },

  // Navigation Links
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "The App", path: "/app" },
    { label: "Community", path: "/community" },
    { label: "Contact", path: "/contact" }
  ]
};
