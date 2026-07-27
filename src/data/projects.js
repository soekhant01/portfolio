export const projects = [
  {
  id: 'lets-buy',
  title: "Let's Buy",
  coverImage: '/portfolio/projects/lets-buy/buy-now.png',
  description:
    'A native Android e-commerce app with product browsing, cart management, and checkout. Built with Kotlin, Jetpack Compose, and Firebase.',
  summary:
    "Let's Buy is a full-featured shopping app built natively for Android. It follows an MVVM architecture with a Compose-based UI, letting users browse categorized products, manage a cart, checkout with a live order summary, and maintain a personal profile — all backed by Firebase.",
  tags: ['Kotlin', 'Jetpack Compose', 'Firebase'],
  thumbClass: 'from-[#2a3a5a] to-bg',
  role: 'Android Developer',
  timeline: '2026',
  status: 'Actively Maintained',
  links: {
    github: "https://github.com/soekhant01/LetsBuy",
    demo: null,
    store: null,
  },
  highlights: [
    'Category-based product browsing with a home feed of latest items',
    'Favorites, cart, and checkout flow with discount and tax breakdown',
    'Firebase authentication with persistent user sessions via SharedPreferences',
    'MVVM Ui Base architecture, reactive Compose UI',
  ],
  features: [
    {
      title: 'Product Catalog',
      description: 'Browsable categories, carousel banners, and a latest-items feed on the home screen.',
    },
    {
      title: 'Cart & Checkout',
      description: 'Quantity controls, item removal, and a checkout summary with subtotal, discount, and tax.',
    },
    {
      title: 'Favorites',
      description: 'Save products for later and quickly add them back to the cart.',
    },
    {
      title: 'User Profile',
      description: 'Manage delivery address, view account details, toggle dark mode, and sign out or delete account.',
    },
  ],
  techStack: ['Kotlin', 'Jetpack Compose', 'Firebase Auth', 'Cloud Firestore', 'SharedPreferences', 'MVVM'],
  screenshots: [
    '/portfolio/projects/lets-buy/LB_1.png',
    '/portfolio/projects/lets-buy/LB_2.png',
    '/portfolio/projects/lets-buy/LB_3.png',
    '/portfolio/projects/lets-buy/LB_4.png',
    '/portfolio/projects/lets-buy/LB_5.png',
    '/portfolio/projects/lets-buy/LB_6.png',
    '/portfolio/projects/lets-buy/LB_7.png',
  ],
},
  {
  id: 'habit-tracker',
  title: 'HabitTracker',
  coverImage: '/portfolio/projects/habit-tracker/habit.png',
  description:
    'A minimalist habit-tracking app with daily streaks, completion stats, and a clean dark UI. Built with Flutter using an AI-assisted "vibe coding" workflow.',
  summary:
    'HabitTracker helps users build consistency by tracking daily habits, streaks, and completion rates. It features a Today view for daily check-ins, a Habits manager for creating and editing routines, and a Stats dashboard with weekly and monthly trend charts. The app was built with Flutter, using an AI-assisted development workflow combining Stitch for UI design, Antigravity, and MCP servers.',
  tags: ['Flutter', 'Dart', 'AI-Assisted Dev'],
  thumbClass: 'from-[#1a2a3a] to-bg',
  role: 'Mobile Developer',
  timeline: '2026',
  status: 'Completed',
  links: {
    github: "https://github.com/soekhant01/habit-tracker-by-antigravity",
    demo: null,
    store: null,
  },
  highlights: [
    'Daily habit check-ins with streak tracking',
    'Progress dashboard with success rate and weekly/monthly trends',
    'Habit management with completion-rate history per habit',
    'Dark-mode UI with customizable profile and daily reset preferences',
    'Built with an AI-assisted workflow using Stitch, Antigravity, and MCP servers',
  ],
  features: [
    {
      title: 'Daily Routine Tracking',
      description: 'A daily progress ring and checklist show how many habits are completed today.',
    },
    {
      title: 'Habit Management',
      description: 'Create, edit, and delete habits with reminders and per-habit completion rates.',
    },
    {
      title: 'Progress Statistics',
      description: 'Success rate, best streak, and weekly/monthly activity charts at a glance.',
    },
  ],
  techStack: ['Flutter', 'Dart','Sqlite','Provider', 'Stitch', 'Antigravity', 'MCP'],
  screenshots: [
    '/portfolio/projects/habit-tracker/HT_1.png',
    '/portfolio/projects/habit-tracker/HT_2.png',
    '/portfolio/projects/habit-tracker/HT_3.png',
    '/portfolio/projects/habit-tracker/HT_4.png',
    '/portfolio/projects/habit-tracker/HT_5.png',
  ],
},
  {
    id: 'engineering-dictionary',
    title: 'Engineering Dictionary',
    coverImage: '/portfolio/projects/engineering-dictionary/cover.png',
    description:
      'A bilingual (English–Myanmar) engineering glossary app covering civil, electrical, and IT terms, with fast search and favorites.',
    summary:
      'Engineering Dictionary is a Flutter mobile app that helps students and professionals quickly look up engineering terminology, with definitions provided in both English and Myanmar. It supports fast keyword search and lets users save terms as favorites for quick reference.',
    tags: ['Flutter', 'Dart', 'Local Database'],
    thumbClass: 'from-[#2a2a2a] to-bg',
    role: 'Mobile Developer',
    timeline: 'Early 2026',
    status: 'Completed',
    links: {
      github: "https://github.com/soekhant01/Engineering-Dictionary-App", // paste your repo link here
      demo: null,
      store: null,
    },
    highlights: [
      'Bilingual English–Myanmar term definitions',
      'Instant search across engineering categories',
      'Favorites system for quick access to saved terms',
      'Clean, native-feeling iOS interface',
    ],
    features: [
      {
        title: 'Smart Search',
        description: 'Real-time filtering across hundreds of engineering terms as you type.',
      },
      {
        title: 'Bilingual Definitions',
        description: 'Every entry includes a Myanmar-language explanation alongside English.',
      },
      {
        title: 'Favorites',
        description: 'Save frequently referenced terms for one-tap access later.',
      },
    ],
    techStack: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    screenshots: [
      '/portfolio/projects/engineering-dictionary/ED_1.png',
      '/portfolio/projects/engineering-dictionary/ED_2.png',
      '/portfolio/projects/engineering-dictionary/ED_3.png',
    ],
  },
]

export function getProjectById(id) {
  return projects.find((project) => project.id === id)
}

export function getAdjacentProjects(id) {
  const index = projects.findIndex((project) => project.id === id)
  if (index === -1) return { prev: null, next: null }

  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
