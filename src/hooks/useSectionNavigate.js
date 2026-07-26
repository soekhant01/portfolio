import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const HEADER_OFFSET = 90

export function useSectionNavigate() {
  const location = useLocation()
  const navigate = useNavigate()

  return useCallback(
    (e, href) => {
      if (!href || href.length <= 1 || !href.startsWith('#')) return

      if (location.pathname !== '/') {
        e.preventDefault()
        navigate('/' + href)
        return
      }

      const target = document.querySelector(href)
      if (!target) return

      e.preventDefault()
      const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET
      window.scrollTo({ top, behavior: 'smooth' })
    },
    [location.pathname, navigate],
  )
}
