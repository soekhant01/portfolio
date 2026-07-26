import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[17px] w-[17px]">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[17px] w-[17px]">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function BarsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function NavLink({ href, children, onNavigate, onAfterClick, isActive, className = '', activeClassName = '' }) {
  const handleClick = (e) => {
    const id = href.replace('/', '')
    const el = document.getElementById(id)

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }

    onNavigate?.(e, href)
    onAfterClick?.()
  }

  return (
    <Link
      to={href}
      aria-current={isActive ? 'page' : undefined}
      className={`${className} ${isActive ? activeClassName : ''}`.trim()}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}

const NAV_SECTIONS = ['about', 'skills', 'projects', 'contact']

export default function Header({ isLight, onToggleTheme, menuOpen, onToggleMenu, onCloseMenu, onNavigate }) {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const sections = NAV_SECTIONS
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) {
      setActiveSection(null)
      return
    }

    // Distance from the top of the viewport that counts as "reached" —
    // roughly the sticky header height plus a little breathing room.
    const HEADER_OFFSET = 120

    let ticking = false

    const updateActiveSection = () => {
      ticking = false

      let current = sections[0].id
      for (const section of sections) {
        const top = section.getBoundingClientRect().top
        if (top <= HEADER_OFFSET) {
          current = section.id
        }
      }

      // If we're near the bottom of the page, force the last section active
      // (guards against a short final section never reaching the offset).
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (scrolledToBottom) {
        current = sections[sections.length - 1].id
      }

      setActiveSection(current)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateActiveSection)
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [location.pathname])

  const isLinkActive = (href) => {
    const id = href.replace('/', '')
    return activeSection ? activeSection === id : location.hash === href
  }

  const desktopLink = 'text-sm text-muted transition-colors hover:text-text'
  const desktopActive = 'text-text font-medium'
  const mobileLink = 'border-b border-line px-1 py-[13px] text-[15px] text-text last:border-b-0'
  const mobileActive = 'text-accent font-medium'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-[10px]">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-7 py-[18px]">
        
      <Link
          to="/"
          onClick={() => {
            setActiveSection(null)
            onCloseMenu?.()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-mono text-[15px] font-semibold tracking-wide"
        >
          {'<'}
          <span className="text-flutter">SoeKhant</span>
          {'/>'}
        </Link>

        <div className="hidden gap-8 min-[721px]:flex">
          <NavLink href="/about" onNavigate={onNavigate} isActive={isLinkActive('/about')} className={desktopLink} activeClassName={desktopActive}>About</NavLink>
          <NavLink href="/skills" onNavigate={onNavigate} isActive={isLinkActive('/skills')} className={desktopLink} activeClassName={desktopActive}>Skills</NavLink>
          <NavLink href="/projects" onNavigate={onNavigate} isActive={isLinkActive('/projects')} className={desktopLink} activeClassName={desktopActive}>Projects</NavLink>
          <NavLink href="/contact" onNavigate={onNavigate} isActive={isLinkActive('/contact')} className={desktopLink} activeClassName={desktopActive}>Contact</NavLink>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark and light theme"
            className="mr-3.5 inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-line bg-panel text-text hover:border-accent"
          >
            {isLight ? <SunIcon /> : <MoonIcon />}
          </button>

          <NavLink href="/contact" onNavigate={onNavigate} className="hire-btn max-[720px]:hidden">
            Hire Me
          </NavLink>

          <button
            type="button"
            onClick={onToggleMenu}
            aria-label="Toggle navigation menu"
            className="ml-2.5 hidden h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-line bg-panel text-text max-[720px]:inline-flex"
          >
            {menuOpen ? <CloseIcon /> : <BarsIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-b border-line bg-bg-soft px-7 pb-[26px] pt-[18px] min-[721px]:hidden">
          <NavLink href="/about" onNavigate={onNavigate} onAfterClick={onCloseMenu} isActive={isLinkActive('/about')} className={mobileLink} activeClassName={mobileActive}>About</NavLink>
          <NavLink href="/skills" onNavigate={onNavigate} onAfterClick={onCloseMenu} isActive={isLinkActive('/skills')} className={mobileLink} activeClassName={mobileActive}>Skills</NavLink>
          <NavLink href="/projects" onNavigate={onNavigate} onAfterClick={onCloseMenu} isActive={isLinkActive('projects')} className={mobileLink} activeClassName={mobileActive}>Projects</NavLink>
          <NavLink href="/contact" onNavigate={onNavigate} onAfterClick={onCloseMenu} isActive={isLinkActive('/contact')} className={mobileLink} activeClassName={mobileActive}>Contact</NavLink>
        </div>
      )}
    </header>
  )
}