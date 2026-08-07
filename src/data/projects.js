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
  id: 'drms',
  title: "Disaster Relief Management System",
  coverImage: '/portfolio/projects/drms/disaster-management.png',
  description:
    'A Field Staff Android app for an NGO disaster relief system — register beneficiaries, record relief distributions, and view assigned tasks. Built with Kotlin, Jetpack Compose, and Retrofit.',
  summary:
    "Disaster Relief Management System (DRMS) is an internal platform built for an NGO to coordinate disaster response — from beneficiary registration to relief distribution and reporting. As part of a 6-person university team project, I was responsible for the Field Staff role and built its native Android app: field workers can register affected households, record relief distributions against them, track distribution history, and view distribution tasks assigned to them by the Project Officer.",
  tags: ['Kotlin', 'Jetpack Compose'],
  thumbClass: 'from-[#2a3a5a] to-bg',
  role: 'Field Staff App Developer',
  timeline: '2025 - 2026',
  status: 'Completed',
  links: {
    github: 'https://github.com/soekhant01/DRMS-FieldStaff',
    demo: null,
    store: null,
  },
  highlights: [
    'Beneficiary registration with duplicate-contact prevention',
    'Relief distribution recording tied to registered beneficiaries',
    'Distribution history with edit and delete support',
    'View-only screen for daily distribution tasks assigned by the Project Officer',
  ],
  features: [
    {
      title: 'Beneficiary Registration',
      description: 'Register, view, update, and delete affected households with name, father\'s name, and phone number.',
    },
    {
      title: 'Record Distribution',
      description: 'Log relief distributions per beneficiary, capturing household size, dependents, and items distributed.',
    },
    {
      title: 'Distribution History',
      description: 'Browse past distribution records with edit and delete actions and confirmation dialogs.',
    },
    {
      title: 'Assigned Distribution',
      description: 'View-only list of daily distribution tasks assigned to the logged-in field staff.',
    },
  ],
  techStack: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'MVVM'],
  screenshots: [
    '/portfolio/projects/drms/drms-1.png',
    '/portfolio/projects/drms/drms-2.png',
    '/portfolio/projects/drms/drms-3.png',
    '/portfolio/projects/drms/drms-4.png',
    '/portfolio/projects/drms/drms-5.png',
    '/portfolio/projects/drms/drms-6.png',
    '/portfolio/projects/drms/drms-7.png',
    '/portfolio/projects/drms/drms-8.png',
    '/portfolio/projects/drms/drms-9.png',

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
    timeline: 'Mid 2026',
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


  {
  id: 'book-lab',
  title: 'Book Lab',
  coverImage: '/portfolio/projects/book-lab/book.png',
  description:
    'A modern book management app to organize books and authors, featuring favorites, local storage, and clean UI with light/dark themes.',
  summary:
    'Book Lab is a Flutter mobile application designed to help users manage their personal book collection and author records. Users can add books and authors, attach images, write descriptions, and mark favorites for quick access. The app uses a local database for offline-first functionality and includes a polished UI with dark mode support and smooth interactions.',
  tags: ['Flutter', 'Dart', 'Local Database'],
  thumbClass: 'from-[#6a11cb] to-[#ff3d6e]',
  role: 'Mobile Developer',
  timeline: '2026',
  status: 'Completed',
  links: {
    github: "https://github.com/soekhant01/BookLab", 
    demo: null,
    store: null,
  },
  highlights: [
    'Create and manage books and authors with images',
    'Favorite system for quick access to important items',
    'Clean and modern UI with light & dark theme support',
    'Offline-first app using local database',
  ],
  features: [
    {
      title: 'Book & Author Management',
      description: 'Add, edit,delete, and store detailed information about books and authors including descriptions and images.',
    },
    {
      title: 'Favorites System',
      description: 'Mark books or authors as favorites for quick access and better organization.',
    },
    {
      title: 'Image Upload',
      description: 'Attach cover images or author photos stored locally on the device.',
    },
    {
      title: 'Dark Mode',
      description: 'Switch between light and dark themes for better user experience.',
    },
  ],
  techStack: ['Flutter', 'Dart', 'SQLite', 'Provider'],
  screenshots: [
    '/portfolio/projects/book-lab/book_lab_1.png',
    '/portfolio/projects/book-lab/book_lab_2.png',
    '/portfolio/projects/book-lab/book_lab_3.png',
    '/portfolio/projects/book-lab/book_lab_4.png',
    '/portfolio/projects/book-lab/book_lab_5.png',
    '/portfolio/projects/book-lab/book_lab_6.png',
    '/portfolio/projects/book-lab/book_lab_7.png',
    '/portfolio/projects/book-lab/book_lab_8.png'
  ],
},

{
  id: 'book-lab',
  title: 'Book Lab',
  coverImage: '/portfolio/projects/book-lab/book.png',
  description:
    'A modern book management app to organize books and authors, featuring favorites, local storage, and clean UI with light/dark themes.',
  summary:
    'Book Lab is a Flutter mobile application designed to help users manage their personal book collection and author records. Users can add books and authors, attach images, write descriptions, and mark favorites for quick access. The app uses a local database for offline-first functionality and includes a polished UI with dark mode support and smooth interactions.',
  tags: ['Flutter', 'Dart', 'Local Database'],
  thumbClass: 'from-[#6a11cb] to-[#ff3d6e]',
  role: 'Mobile Developer',
  timeline: '2026',
  status: 'Completed',
  links: {
    github: "https://github.com/soekhant01/BookLab", 
    demo: null,
    store: null,
  },
  highlights: [
    'Create and manage books and authors with images',
    'Favorite system for quick access to important items',
    'Clean and modern UI with light & dark theme support',
    'Offline-first app using local database',
  ],
  features: [
    {
      title: 'Book & Author Management',
      description: 'Add, edit,delete, and store detailed information about books and authors including descriptions and images.',
    },
    {
      title: 'Favorites System',
      description: 'Mark books or authors as favorites for quick access and better organization.',
    },
    {
      title: 'Image Upload',
      description: 'Attach cover images or author photos stored locally on the device.',
    },
    {
      title: 'Dark Mode',
      description: 'Switch between light and dark themes for better user experience.',
    },
  ],
  techStack: ['Flutter', 'Dart', 'SQLite', 'Provider'],
  screenshots: [
    '/portfolio/projects/book-lab/book_lab_1.png',
    '/portfolio/projects/book-lab/book_lab_2.png',
    '/portfolio/projects/book-lab/book_lab_3.png',
    '/portfolio/projects/book-lab/book_lab_4.png',
    '/portfolio/projects/book-lab/book_lab_5.png',
    '/portfolio/projects/book-lab/book_lab_6.png',
    '/portfolio/projects/book-lab/book_lab_7.png',
    '/portfolio/projects/book-lab/book_lab_8.png'
  ],
}

  
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
