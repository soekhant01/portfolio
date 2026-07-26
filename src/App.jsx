import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function ProjectDetailRoute() {
  const { projectId } = useParams()
  return <ProjectDetail projectId={projectId} />
}

function AppRoutes() {
  const [isLight, setIsLight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
  }, [isLight])

  return (
    <Layout
      isLight={isLight}
      onToggleTheme={() => setIsLight((prev) => !prev)}
      menuOpen={menuOpen}
      onToggleMenu={() => setMenuOpen((prev) => !prev)}
      onCloseMenu={() => setMenuOpen(false)}
    >
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetailRoute />} /> */}

  <Route path="/" element={<Home />} />
  <Route path="/about" element={<Home />} />
  <Route path="/skills" element={<Home />} />
  <Route path="/projects" element={<Home />} />
  <Route path="/contact" element={<Home />} />
  <Route path="/projects/:projectId" element={<ProjectDetailRoute />} />

      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter basename='/portfolio'>
      <AppRoutes />
    </BrowserRouter>
  )
}
