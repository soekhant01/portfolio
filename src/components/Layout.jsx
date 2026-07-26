import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSectionNavigate } from '../hooks/useSectionNavigate'

export default function Layout({ isLight, onToggleTheme, menuOpen, onToggleMenu, onCloseMenu, children }) {
  const location = useLocation()
  const onNavigate = useSectionNavigate()

  // useEffect(() => {
  //   if (location.pathname !== '/' || !location.hash) return

  //   const target = document.querySelector(location.hash)
  //   if (!target) return

  //   requestAnimationFrame(() => {
  //     const top = target.getBoundingClientRect().top + window.pageYOffset - 90
  //     window.scrollTo({ top, behavior: 'smooth' })
  //   })
  // }, [location.pathname, location.hash])

  // useEffect(() => {
  //   if (location.pathname !== '/') {
  //     window.scrollTo({ top: 0 })
  //   }
  // }, [location.pathname])
  const SECTION_PATHS = ['/', '/about', '/skills', '/projects', '/contact']

useEffect(() => {
  if (!SECTION_PATHS.includes(location.pathname)) {
    window.scrollTo({ top: 0 })
    return
  }

  if (location.pathname === '/' && !location.hash) {
    window.scrollTo({ top: 0 })
    return
  }

  const id = location.pathname === '/'
    ? location.hash.slice(1)
    : location.pathname.slice(1)

  requestAnimationFrame(() => {
    const target = document.getElementById(id)
    if (!target) return
    const top = target.getBoundingClientRect().top + window.pageYOffset - 90
    window.scrollTo({ top, behavior: 'smooth' })
  })
}, [location.pathname, location.hash])

  return (
    <>
      <Header
        isLight={isLight}
        onToggleTheme={onToggleTheme}
        menuOpen={menuOpen}
        onToggleMenu={onToggleMenu}
        onCloseMenu={onCloseMenu}
        onNavigate={onNavigate}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}
