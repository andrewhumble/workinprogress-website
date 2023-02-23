const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Work In Progress",
    image: "/wip_logo.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "CSCI 4800 Spring 2023 Project",
    bio: "Strengthening access to education through design changes to the MIT OpenCourseWare website.",
    email: "morethanmin.dev@gmail.com",
    linkedin_andrew: "morethanmin",
    linkedin_ella: "",
    linkedin_steven: "",
    linkedin_darius: "",
    linkedin: "morethanmin",
    github: "morethanmin",
    instagram: "",
  },
  projects: [
    {
      name: `csci4800-website`,
      href: "https://michaelcotterell.com/hci/2023sp/html/index.html",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Work In Progress",
    description: "CSCI 4800 Spring 2023 Group Project",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://workinprogress.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    // pageId: process.env.NOTION_PAGE_ID,
    pageId: 'bc54b448f2df4527892745dae6dcb24c',
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
