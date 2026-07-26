export const projects = [
  {
    id: 'fitpulse',
    title: 'FitPulse',
    description:
      'A comprehensive fitness tracking app with workout plans, progress analytics, and nutrition logging. Built with Flutter and Firebase.',
    summary:
      'FitPulse is a mobile fitness companion designed to help users stay consistent with their health goals. The app combines structured workout plans, real-time progress tracking, and nutrition logging in a clean, motivating interface.',
    tags: ['Flutter', 'Firebase', 'Provider'],
    thumbClass: 'from-[#1a3a4a] to-bg',
    role: 'Mobile Developer',
    timeline: '2025',
    status: 'Completed',
    links: {
      github: null,
      demo: null,
      store: null,
    },
    highlights: [
      'Personalized workout plans with progress tracking',
      'Nutrition logging with daily calorie summaries',
      'Firebase authentication and cloud sync',
      'Offline-first data layer with local caching',
    ],
    features: [
      {
        title: 'Workout Engine',
        description: 'Custom routines with timers, rest intervals, and exercise history.',
      },
      {
        title: 'Progress Analytics',
        description: 'Weekly charts for weight, reps, and consistency streaks.',
      },
      {
        title: 'Nutrition Tracker',
        description: 'Meal logging with macro breakdowns and daily goals.',
      },
    ],
    techStack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Provider', 'Figma'],
    screenshots: [],
  },
  {
  id: 'habit-tracker',
  title: 'HabitTracker',
  coverImage: 'public/projects/habit-tracker/habit.png',
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
  techStack: ['Flutter', 'Dart', 'Stitch', 'Antigravity', 'MCP'],
  screenshots: [
    '/projects/habit-tracker/HT_1.png',
    '/projects/habit-tracker/HT_2.png',
    '/projects/habit-tracker/HT_3.png',
  ],
},
  {
    id: 'engineering-dictionary',
    title: 'Engineering Dictionary',
    coverImage: 'public/projects/engineering-dictionary/cover.png',
    description:
      'A bilingual (English–Myanmar) engineering glossary app covering civil, electrical, and IT terms, with fast search and favorites.',
    summary:
      'Engineering Dictionary is a Flutter mobile app that helps students and professionals quickly look up engineering terminology, with definitions provided in both English and Myanmar. It supports fast keyword search and lets users save terms as favorites for quick reference.',
    tags: ['Flutter', 'Dart', 'Local Database'],
    thumbClass: 'from-[#2a2a2a] to-bg',
    role: 'Mobile Developer',
    timeline: '2026',
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
      '/projects/engineering-dictionary/ED_1.png',
      '/projects/engineering-dictionary/ED_2.png',
      '/projects/engineering-dictionary/ED_3.png',
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
