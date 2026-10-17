/**
 * FreshMinds Academy — Centralized Site Configuration
 * Single source of truth for branding, verified links, metrics, and app configuration.
 */

export const siteConfig = {
  name: "FreshMinds Academy",
  shortName: "FreshMinds",
  logo: "/app-icon.png",
  tagline: "Your Key to Freshman Success!",
  taglineAmharic: "የፍሬሽማን ስኬት መክፈቻ ቁልፍ",
  description:
    "Helping Ethiopian university students learn, practice, prepare, and excel with confidence through curated courses, untimed practice, and exam simulations.",
  mission:
    "To make useful, accessible, and practical educational support easier for every Ethiopian university student to access.",
  vision:
    "A future where every Ethiopian student can find the resources, guidance, and community they need to achieve academic excellence.",
  
  // Community Stats & Verified Channels
  community: {
    telegramMembers: "6,000+",
    telegramMembersShort: "6K+",
    telegramHandle: "@FreshMinds_Academy",
    telegramUrl: "https://t.me/FreshMinds_Academy",
    youtubeSubscribers: "5,000+",
    youtubeSubscribersShort: "5K+",
    youtubeUrl: "http://www.youtube.com/@FreshMindsAcademy-c8x",
    memberCount: "6,000+",
    memberCountLabel: "Telegram Community",
    youtubeCount: "5,000+",
    youtubeCountLabel: "YouTube Learners",
    reachedCount: "15,000+",
    reachedCountLabel: "Students Reached",
    appCount: "1",
    appCountLabel: "Dedicated Mobile App",
    description:
      "A vibrant hub for Ethiopian freshmen to access curriculum updates, academic materials, exam tips, and peer encouragement."
  },

  // Mobile App Download Configuration
  app: {
    status: "available", // Options: "available" | "coming_soon"
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.freshminds.mobile",
    badgeText: "Get it on Google Play",
    packageName: "com.freshminds.mobile",
    version: "v2.0",
    rating: "4.9",
    reviewsCount: "500+",
    downloadsCount: "10,000+",
    platforms: ["Android (Google Play)", "iOS (Upcoming)"],
    features: [
      {
        id: "courses",
        title: "Chapter-Based Courses",
        titleAmharic: "የተዋቀሩ ኮርሶች",
        desc: "Curated modules with video lectures and study notes specifically designed for Ethiopian freshman Natural & Social Science curriculums."
      },
      {
        id: "practice",
        title: "Practice Mode",
        titleAmharic: "የልምምድ ሁነታ",
        desc: "Untimed questions with instant explanations, step-by-step solutions, and key formula reviews."
      },
      {
        id: "exam",
        title: "Timed Exam Simulation",
        titleAmharic: "የፈተና ማስመሰል",
        desc: "Real test conditions with countdown timers, question navigation grids, and thorough performance scoring."
      },
      {
        id: "offline",
        title: "100% Offline Learning",
        titleAmharic: "ያለ ኢንተርኔት ማጥናት",
        desc: "Download video lectures and study notes directly to your device via SQLite cache to study anytime without mobile data."
      },
      {
        id: "competitions",
        title: "Live Competitions",
        titleAmharic: "የውድድር ፈተናዎች",
        desc: "Compete with thousands of freshman peers nationwide, climb weekly leaderboards, and test your readiness under pressure."
      },
      {
        id: "notes",
        title: "Comprehensive Notes",
        titleAmharic: "አጠቃላይ ማስታወሻዎች",
        desc: "Rich chapter notes and markdown reading materials to quickly summarize core course points."
      }
    ]
  },

  // Founder Profile & CEO Diary
  founder: {
    name: "Sisay Shimelash",
    role: "Full-Stack Developer & Founder",
    title: "Full-Stack Developer & Founder",
    location: "Kombolcha / Addis Ababa, Ethiopia",
    linkedin: "https://www.linkedin.com/in/sisay-shimelash-2b6732379/",
    diaryStory: {
      title: "From a Student Filming on a Phone to a Learning Platform",
      quote: "I started FreshMinds Academy as a student filming explanations on my phone. No team. No platform. Just a university student who loves teaching and helping others.",
      fullStory: "I remembered how overwhelming freshman year felt: new courses, scattered study materials, exam pressure. I've always enjoyed explaining things to others, so I started sharing what I knew. I created a Telegram channel and a YouTube channel, filming tutorials on my phone, explaining every topic step by step in Amharic, and pairing each video with notes and exam resources for Ethiopian university freshmen. Then students started writing to me. Some shared their first-semester results and told me my videos helped them join medicine. Others wrote that in the middle of exam stress, the materials gave them hope and reassurance. But students were hunting through scattered Telegram messages just to find what they needed. 'What if everything lived in one place?' That question became the FreshMinds Academy mobile app."
    }
  },

  // Supported Universities across Ethiopia
  targetUniversities: [
    "Addis Ababa University (AAU)",
    "Adama Science and Technology University (ASTU)",
    "Addis Ababa Science and Technology University (AASTU)",
    "Jimma University (JU)",
    "Hawassa University (HU)",
    "Bahir Dar University (BDU)",
    "Wollo University (WU)",
    "Haramaya University",
    "University of Gondar",
    "Arba Minch University"
  ],

  // Targeted Freshman Curriculums
  freshmanPrograms: [
    {
      name: "Natural Science Freshman",
      courses: ["General Physics", "Mathematics for Natural Science (Calculus I)", "General Chemistry", "Communicative English Language Skills", "Critical Thinking & Logic", "Introduction to Emerging Technologies", "General Biology", "Physical Geography"]
    },
    {
      name: "Social Science Freshman",
      courses: ["Mathematics for Social Science", "Communicative English Language Skills", "Critical Thinking & Logic", "General Psychology", "Economics", "History of Ethiopia & the Horn", "Social Anthropology", "Geography of Ethiopia"]
    },
    {
      name: "Freshman Remedial Program",
      courses: ["Remedial English", "Remedial Mathematics", "Remedial Physics", "Remedial Chemistry", "Remedial Biology"]
    }
  ],

  // Centralized SEO Configuration
  seo: {
    siteUrl: "https://freshmindsacademy.com",
    siteName: "FreshMinds Academy",
    titleTemplate: "%s | FreshMinds Academy",
    defaultTitle: "FreshMinds Academy | Ethiopian University Freshman Courses, Past Exams & App",
    defaultDescription: "The premier learning platform for Ethiopian university freshman students. Access General Physics, Calculus, Logic, and English curriculum notes, past exam questions with step-by-step solutions, and offline Android app study.",
    defaultKeywords: [
      "FreshMinds Academy",
      "Ethiopian university freshman",
      "Ethiopian freshman courses",
      "Freshman past exams with answers Ethiopia",
      "Freshman natural science courses Ethiopia",
      "Freshman social science courses Ethiopia",
      "General Physics freshman Ethiopian curriculum",
      "Calculus I freshman Ethiopia",
      "Logic and Critical Thinking freshman Ethiopia",
      "Communicative English freshman university",
      "Freshman exam questions and answers pdf",
      "Ethiopian university remedial program",
      "FreshMinds mobile app",
      "Offline study app Ethiopian university",
      "How to score 4.0 GPA in freshman year Ethiopia",
      "How to join medicine in Ethiopia freshman",
      "AAU freshman past exams",
      "ASTU freshman exams",
      "Jimma University freshman",
      "Hawassa University freshman",
      "Wollo University",
      "Sisay Shimelash",
      "የፍሬሽማን ኮርሶች",
      "የዩኒቨርሲቲ ፍሬሽማን ፈተናዎች እና መልሶች",
      "የፍሬሽማን ፊዚክስ",
      "የፍሬሽማን ካልኩለስ",
      "የፍሬሽማን ሎጂክ",
      "የኢትዮጵያ ዩኒቨርሲቲ ፍሬሽማን መማሪያ መተግበሪያ"
    ].join(", ")
  },

  // Official Social Channels
  socials: {
    telegram: "https://t.me/FreshMinds_Academy",
    youtube: "http://www.youtube.com/@FreshMindsAcademy-c8x",
    linkedin: "https://linkedin.com/company/freshminds-academy"
  },

  // Official Contact
  contact: {
    email: "Freshmindssupport@gmail.com",
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
