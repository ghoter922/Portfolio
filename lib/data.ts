export const NAME = "Eshfaq";
export const FULL_NAME = "Eshfaq Ahmad";
export const EMAIL = "eshfaqahmad33@gmail.com";
export const PHONE = "+92 334 6667631";
export const RESUME = "/Eshfaq-Ahmad-Resume.pdf";
export const TOOLS = ["Figma", "Framer", "Photoshop", "Illustrator", "Miro", "Claude.ai", "Google Stitch", "Jira", "Slack"];
export const NAV = [
  ["Home", "#home"],
  ["About me", "#about"],
  ["Work", "#work"],
  ["Approach", "#approach"],
  ["Resume", "#resume"],
  ["Contact", "#contact"],
];
export const LINKS = [
  "252830071/Track-Log-Mobile-app",
  "255912655/Salon-SaaS-Product-Case-Study",
  "254881337/Hotel-booking-mobile-app-case-study",
  "255251081/Tracking-mobile-app-case-study",
  "255415875/Find-verify-caregiver-mobile-app-case-study",
  "253000453/Jobs-Product-Case-Study-UIUX",
  "252698935/Boat-Controller-Mobile-app",
  "254786937/Empowering-Female-Athletes-Brand-Partnerships",
  "256845549/Private-conversions-product-case-study",
  "255580235/SaaS-Product-Case-Study-for-Music-Industry",
];
export const PROJECTS = [
  ["Track Log Mobile App", "Mobile App UI/UX Design", "Secure mobile app for real-time and background GPS tracking, with encrypted logs, role-based access, and offline-to-online syncing."],
  ["Beauty at your fingertips", "SaaS Mobile UI/UX Design", "GlamBook makes booking easy for local wellness businesses. Customers get a simple, trusted way to book, while independent practitioners get an easy system to manage their work."],
  ["Hotel Booking SaaS Product Design", "SaaS Product UI/UX Design", "Traveller connects guests with high-demand lodging through a fast waitlist and booking app, while giving hotel managers powerful tools to fill vacant rooms instantly."],
  ["Personal Tracking Mobile App Design", "SaaS Product UI/UX Design", "Trouble Cheat is a premium personal safety mobile application crafted for rapid, non-obtrusive security deployment when minutes turn into seconds."],
  ["A safety-first marketplace for teen babysitters", "SaaS Mobile UI/UX Design", "StartSitter connects families with verified, trained teen babysitters (ages 11–17) through an admin-controlled platform. Every interaction—from sign-up to payment—is structured around safety, transparency, and accountability."],
  ["Jobs Product Case Study", "Mobile App UI/UX Design", "A real-time staffing marketplace that connects businesses with nearby workers for short-term and urgent shifts — eliminating last-minute hiring chaos."],
  ["Wireless Boat Controller Mobile App", "Mobile App", "An app that controls a boat’s speed and direction through Bluetooth/WiFi. It offers Manual and GPS Auto modes, live feedback, and emergency controls for safe, fast boat operation."],
  ["Empowering female athlete brand partnership Products Design", "SaaS UI/UX Design", "The platform automates finding athletes, manages legal contracts safely, and tracks marketing campaigns so brands can clearly see their return on investment."],
  ["Private Conversations SaaS Product Design", "SaaS Product UI/UX Design", "A connected mobile and desktop experience for guests, members, and creators — built around private identity, secure communication, and sustainable creator subscriptions."],
  ["Mobile app where creators find events", "SaaS Product UI/UX Design", "OnlyGigz is a comprehensive three-sided marketplace built to manage performance lifecycles seamlessly across different stakeholder requirements."],
].map(([name, tags, desc], i) => ({ name, tags, desc, link: "https://www.behance.net/gallery/" + LINKS[i], img: i === 6 ? "/projects/boat-controller.jpg" : `/projects/project-${i + 1}.jpg` }));

export const STEPS = [
  {
    key: "Discover and Research",
    title: "Understand before designing.",
    desc: "I explore the problem, users, and goals to find the right direction.",
    acts: ["User Research", "User Needs", "Context Analysis", "Defining Goals"],
  },
  {
    key: "Define and Structure",
    title: "Give ideas a clear direction.",
    desc: "I organize insights, map user flows, and plan how the content fits together.",
    acts: ["Problem Framing", "User Flows", "Content Structure", "Wireframes"],
  },
  {
    key: "Design",
    title: "Turn ideas into clear screens.",
    desc: "I design simple, attractive screens that match the brand and meet user needs.",
    acts: ["UI Design", "Colors & Fonts", "Components", "Visual Style"],
  },
  {
    key: "Prototype",
    title: "Bring the experience to life.",
    desc: "I connect screens to show how users will move through and interact with the design.",
    acts: ["Clickable Prototype", "Interactions", "Screen Flows", "Transitions"],
  },
  {
    key: "Test",
    title: "Learn, refine, and improve.",
    desc: "I test the design with users, gather feedback, and make it easier to use.",
    acts: ["Usability Testing", "User Feedback", "Refinements", "Validation"],
  },
];
export const JOURNEY = [
  ["Nov 2024 — Present", "Product Designer", "Slicon Systems", "Design web and mobile interfaces from early concepts to polished UI. Create wireframes, user flows, and high-fidelity Figma designs; collaborate with clients, developers, and cross-functional teams; build accessible, scalable design systems; and improve existing products through clearer navigation and usability. Manage multiple projects and adopt AI workflows and modern design frameworks."],
  ["Jan 2023 — Nov 2024", "Product Designer", "Avialdo Solutions", "Redesigned web and mobile products to make them easier to use, built consistent design systems, and applied accessibility best practices. Partnered with cross-functional teams to onboard 100+ clients and support revenue growth through improved UX. Also contributed to product branding and visual design."],
  ["Mar 2025 — Apr 2025", "User Interface Design", "California Institute of the Arts", "Completed a specialized program in interface craft."],
  ["Aug 2024 — Jan 2025", "User Interface Design", "Memorisely", "Studied prototyping, typography, and Miro interaction design."],
  ["2019 — 2021", "Associate Degree in Computer Science", "University of Central Punjab, Lahore", "Completed an associate degree in computer science."],
];

export const TESTIMONIALS = [
  ["Client Name", "Founder, Company One", "Working with " + NAME + " transformed our product. Every screen felt intentional, and our users noticed the difference right away.", "from-lime-400 to-green-800"],
  ["Client Name", "Product Manager, Company Two", "Clear thinking, beautiful execution. " + NAME + " turned a messy set of requirements into a simple, scalable design system.", "from-amber-400 to-rose-700"],
  ["Client Name", "Co-Founder, Company Three", "Fast, thoughtful and easy to collaborate with. The research-driven approach helped us make confident product decisions.", "from-emerald-400 to-teal-800"],
  ["Client Name", "CEO, Company Four", "From wireframes to final UI, the attention to detail was outstanding. Our conversion improved after the redesign.", "from-fuchsia-500 to-purple-900"],
];
