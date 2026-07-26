export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const socialLinks = [
  { href: 'https://github.com/soekhant01', label: 'GitHub', external: true, icon: 'github' },
  { href: 'https://www.linkedin.com/in/soe-khant-02b2b92b3/', label: 'LinkedIn', external: true, icon: 'linkedin' },
  { href: 'mailto:soekhant.dev@gmail.com', label: 'Email', external: false, icon: 'mail' },
]


export const stats = [
  { num: '4+', label: 'Years Coding' },
  { num: '12+', label: 'Practiced Apps Built' },
  { num: '2', label: 'Core Languages' },
  { num: 'CS', label: 'Student' },
]

export const skills = [
  { name: 'Kotlin', level: 'Intermediate', desc: 'Native Android development' },
  { name: 'XML & Jetpack Compose', level: 'Intermediate', desc: 'Native app ecosystem' },
  { name: 'Flutter', level: 'Intermediate', desc: 'Cross-platform UI framework' },
  { name: 'Dart', level: 'Intermediate', desc: "Flutter's programming language" },
  
  { name: 'Firebase', level: 'Intermediate', desc: 'Backend & cloud services' },
  { name: 'REST APIs', level: 'Intermediate', desc: 'API integration & design' },
  { name: 'Git & GitHub', level: 'Intermediate', desc: 'Version control & collaboration' },
  { name: 'UI/UX Design', level: 'Intermediate', desc: 'Figma & design systems' },
]



export { projects, getProjectById, getAdjacentProjects } from './projects'
