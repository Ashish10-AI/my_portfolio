/**
 * ─── PROJECT DATA ──────────────────────────────────────────
 * Add new projects here. Duplicate an object and change values.
 * The template will auto-render everything from this data.
 * ──────────────────────────────────────────────────────────── */

const PROJECTS_DATA = {

  /* ── PROJECT 1 ────────────────────────────────────────────── */
  "saas-platform-redesign": {
    id: "saas-platform-redesign",
    num: "01",
    category: "Web Design",
    categoryColor: "purple",    // purple | pink | blue | green
    title: "SaaS Platform — Complete UI Overhaul",
    tagline: "Turning a 78% bounce rate into a conversion machine through design-driven strategy.",
    coverEmoji: "🖥️",
    techStack: ["Figma", "Webflow", "CSS", "JavaScript", "Responsive Design"],
    problem: {
      heading: "The Problem",
      text: "The client's SaaS landing page was bleeding users. With a 78% bounce rate, visitors were leaving without taking any meaningful action. The existing design felt outdated, lacked visual hierarchy, and had zero trust signals. Mobile experience was especially poor — over 60% of traffic came from mobile but the conversion rate there was almost non-existent."
    },
    solution: {
      heading: "The Solution",
      text: "I performed a complete UI/UX audit, rebuilt the information architecture, and designed a modern, conversion-focused landing page in Figma. The final build was done in Webflow with custom CSS animations, micro-interactions, and a mobile-first approach. Key changes included adding social proof sections, restructuring the hero with a clear CTA hierarchy, implementing a sticky navigation for easy access, and adding interactive pricing comparison tables."
    },
    tools: [
      { name: "Figma", desc: "Design & Prototyping" },
      { name: "Webflow", desc: "No-code Development" },
      { name: "CSS3", desc: "Custom Animations" },
      { name: "Google Analytics", desc: "Conversion Tracking" },
      { name: "Hotjar", desc: "Heatmap Analysis" },
      { name: "Lottie", desc: "Micro-animations" }
    ],
    results: [
      { metric: "Bounce Rate", before: "78%", after: "34%", icon: "📉" },
      { metric: "Conversions", before: "1×", after: "3.2×", icon: "📈" },
      { metric: "Avg Session", before: "0:42", after: "3:15", icon: "⏱️" },
      { metric: "Mobile Conv.", before: "0.3%", after: "4.8%", icon: "📱" }
    ],
    screenshots: [],    // add image paths later
    liveDemo: "#",
    github: "https://github.com/Ashish10-AI",  // set null if not a web project
    isWebProject: true,
    prevProject: "ecommerce-price-bot",
    nextProject: "youtube-growth-system"
  },

  /* ── PROJECT 2 ────────────────────────────────────────────── */
  "youtube-growth-system": {
    id: "youtube-growth-system",
    num: "02",
    category: "Video Editing",
    categoryColor: "pink",
    title: "Tech Creator — 0 to 45K Subs in 6 Months",
    tagline: "A complete video editing system that transformed raw footage into viral content.",
    coverEmoji: "🎬",
    techStack: ["Premiere Pro", "DaVinci Resolve", "CapCut", "After Effects", "Photoshop"],
    problem: {
      heading: "The Problem",
      text: "The creator had passion and great knowledge but zero visual identity. Videos were uploaded with raw, uncut footage — no hooks, no branding, no retention strategy. Average watch time was 1 minute 20 seconds on 10-minute videos, and the channel was stuck at under 300 views per upload with 2K subscribers."
    },
    solution: {
      heading: "The Solution",
      text: "I built a complete editing pipeline: hook structure for the first 5 seconds, dynamic captions, branded lower thirds, custom motion graphics package, color grading presets, and a thumbnail system. Each video followed a proven retention framework — pattern interrupts every 30 seconds, B-roll overlays, sound design, and end-screen CTAs. I also designed a consistent brand identity across thumbnails and channel art."
    },
    tools: [
      { name: "Premiere Pro", desc: "Primary Editing" },
      { name: "DaVinci Resolve", desc: "Color Grading" },
      { name: "After Effects", desc: "Motion Graphics" },
      { name: "CapCut", desc: "Short-form Content" },
      { name: "Photoshop", desc: "Thumbnails" },
      { name: "Canva", desc: "Channel Art" }
    ],
    results: [
      { metric: "Subscribers", before: "2K", after: "45K", icon: "👥" },
      { metric: "Watch Time", before: "1:20", after: "6:40", icon: "⏱️" },
      { metric: "Total Views", before: "15K", after: "2M+", icon: "👁️" },
      { metric: "Avg. Views", before: "300", after: "50K+", icon: "📈" }
    ],
    screenshots: [],
    liveDemo: "#",
    github: null,
    isWebProject: false,
    prevProject: "saas-platform-redesign",
    nextProject: "lifestyle-brand-identity"
  },

  /* ── PROJECT 3 ────────────────────────────────────────────── */
  "lifestyle-brand-identity": {
    id: "lifestyle-brand-identity",
    num: "03",
    category: "Brand Identity",
    categoryColor: "blue",
    title: "Lifestyle Brand — Identity System from Scratch",
    tagline: "From zero brand presence to 18K followers in 3 months with a complete visual identity.",
    coverEmoji: "✦",
    techStack: ["Figma", "Canva", "Illustrator", "Photoshop", "Brand Strategy"],
    problem: {
      heading: "The Problem",
      text: "A wellness startup needed a full brand identity — logo, color palette, typography, social media templates — for their Instagram and TikTok launch. They had no visual direction, no templates, and no brand guidelines. Every post was designed from scratch, consuming hours and producing inconsistent results."
    },
    solution: {
      heading: "The Solution",
      text: "I designed a comprehensive brand identity system: primary & secondary logo variations, a carefully curated color palette with usage rules, typography hierarchy, 20+ reusable social media templates in Canva, a thumbnail library for different content types, story templates, and a complete brand guidelines document. Everything was organized in a shared Figma workspace for easy team access."
    },
    tools: [
      { name: "Figma", desc: "Brand System Design" },
      { name: "Canva", desc: "Template Creation" },
      { name: "Illustrator", desc: "Logo Design" },
      { name: "Photoshop", desc: "Visual Assets" },
      { name: "Notion", desc: "Brand Guidelines" },
      { name: "Coolors", desc: "Palette Generation" }
    ],
    results: [
      { metric: "Followers", before: "0", after: "18K", icon: "👥" },
      { metric: "First Reel", before: "—", after: "250K+", icon: "🎥" },
      { metric: "Templates", before: "0", after: "20+", icon: "📋" },
      { metric: "Design Time", before: "4h/post", after: "15min", icon: "⚡" }
    ],
    screenshots: [],
    liveDemo: "#",
    github: null,
    isWebProject: false,
    prevProject: "youtube-growth-system",
    nextProject: "ecommerce-price-bot"
  },

  /* ── PROJECT 4 ────────────────────────────────────────────── */
  "ecommerce-price-bot": {
    id: "ecommerce-price-bot",
    num: "04",
    category: "Python Automation",
    categoryColor: "green",
    title: "E-Commerce Intel — Price Monitor & Alert Bot",
    tagline: "Automated competitor price tracking that saved 100+ hours/month and generated $12K extra revenue.",
    coverEmoji: "🐍",
    techStack: ["Python", "Selenium", "BeautifulSoup", "Google Sheets API", "Telegram Bot"],
    problem: {
      heading: "The Problem",
      text: "The client was manually tracking 500+ competitor prices across 8 different e-commerce sites every single morning. This process took 4 hours daily, was error-prone, and by the time pricing decisions were made, competitors had already changed their prices again. The manual approach couldn't scale as the product catalog grew."
    },
    solution: {
      heading: "The Solution",
      text: "I built a Python-based automated scraping system using Selenium for JavaScript-heavy sites and BeautifulSoup for static pages. Data was automatically organized and pushed to Google Sheets via their API for the team to review. A Telegram bot was integrated to send instant price-drop alerts when competitors lowered prices below configurable thresholds. The system runs on a scheduled cron job overnight and produces a formatted morning report."
    },
    tools: [
      { name: "Python", desc: "Core Language" },
      { name: "Selenium", desc: "Dynamic Scraping" },
      { name: "BeautifulSoup", desc: "HTML Parsing" },
      { name: "Sheets API", desc: "Data Reporting" },
      { name: "Telegram API", desc: "Alert Bot" },
      { name: "Cron", desc: "Task Scheduling" }
    ],
    results: [
      { metric: "Hours Saved", before: "120h/mo", after: "0h/mo", icon: "⏱️" },
      { metric: "Revenue Impact", before: "—", after: "$12K Q1", icon: "💰" },
      { metric: "Products Tracked", before: "500", after: "2,000+", icon: "📦" },
      { metric: "Alert Speed", before: "Next day", after: "Instant", icon: "⚡" }
    ],
    screenshots: [],
    liveDemo: "#",
    github: "https://github.com/Ashish10-AI",
    isWebProject: true,
    prevProject: "lifestyle-brand-identity",
    nextProject: "saas-platform-redesign"
  }
};
