import { Link } from 'react-router-dom'
import { getAdjacentProjects, getProjectById } from '../data/projects'

function MetaItem({ label, value }) {
  return (
    <div>
      <div className="mb-1 font-mono text-[11px] uppercase tracking-wide text-muted">{label}</div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  )
}

function ProjectLinkButton({ href, label, primary = false }) {
  if (!href) {
    return (
      <span
        className={`inline-flex cursor-not-allowed items-center rounded-lg px-6 py-3 text-sm font-semibold opacity-40 ${
          primary ? 'btn-primary' : 'btn-secondary'
        }`}
        title="Link coming soon"
      >
        {label}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={primary ? 'btn-primary' : 'btn-secondary'}
    >
      {label}
    </a>
  )
}

function ScreenshotPlaceholder({ index }) {
  return (
    <div className="flex aspect-[9/16] max-h-[420px] w-full items-center justify-center rounded-xl border border-dashed border-line bg-bg-soft">
      <div className="text-center">
        <div className="mb-2 font-mono text-xs text-accent">0{index}</div>
        <div className="text-sm text-muted">Screenshot coming soon</div>
      </div>
    </div>
  )
}

function AdjacentProjectLink({ project, direction }) {
  if (!project) return <div className="flex-1" />

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group flex flex-1 flex-col rounded-xl border border-line bg-panel p-5 transition-[border-color,transform] duration-150 hover:-translate-y-0.5 hover:border-accent"
    >
      <span className="mb-2 font-mono text-[11px] text-muted">
        {direction === 'prev' ? '← Previous' : 'Next →'}
      </span>
      <span className="font-semibold group-hover:text-accent">{project.title}</span>
    </Link>
  )
}

export default function ProjectDetail({ projectId }) {
  const project = getProjectById(projectId)
  const { prev, next } = getAdjacentProjects(projectId)

  if (!project) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-7 pt-[170px]">
        <div className="text-center">
          <div className="mb-3 font-mono text-xs text-accent">404</div>
          <h1 className="mb-4 text-3xl font-bold">Project not found</h1>
          <p className="mb-8 text-muted">This project doesn&apos;t exist or may have been moved.</p>
          <Link to="/#projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </section>
    )
  }

  const screenshots = project.screenshots?.length ? project.screenshots : [1, 2, 3]

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-[170px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[150px] -top-[150px] z-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(84,197,248,0.18),transparent_70%)]"
        />

        <div className="relative z-10 mx-auto max-w-[1100px] px-7">
          <Link
            to="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            ← Back to Projects
          </Link>

          <div className="mb-8 font-mono text-xs tracking-wide text-accent">Project Detail</div>

          <div className="grid grid-cols-1 gap-10 min-[881px]:grid-cols-[1.2fr_0.8fr] min-[881px]:items-start">
            <div>
              <h1 className="mb-5 text-[clamp(36px,5vw,52px)] font-bold leading-[1.08] tracking-[-1px]">
                {project.title}
              </h1>

              <p className="mb-6 max-w-[560px] text-[17px] text-muted">{project.description}</p>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[5px] bg-tag-bg px-[9px] py-1 font-mono text-[11px] text-flutter"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <ProjectLinkButton href={project.links.github} label="View on GitHub" primary />
                {/* <ProjectLinkButton href={project.links.demo} label="Live Demo" /> */}
                {project.links.store && (
                  <ProjectLinkButton href={project.links.store} label="App Store" />
                )}
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg-soft py-[110px]">
        <div className="mx-auto max-w-[1100px] px-7">
          <div className="grid grid-cols-1 gap-12 min-[881px]:grid-cols-[1fr_320px]">
            <div>
              <div className="mb-2.5 font-mono text-xs tracking-wide text-accent">Overview</div>
              <h2 className="mb-5 text-2xl font-bold">About this project</h2>
              <p className="mb-10 max-w-[640px] text-[15.5px] leading-relaxed text-muted">{project.summary}</p>

              <div className="mb-10">
                <div className="mb-2.5 font-mono text-xs tracking-wide text-accent">Highlights</div>
                <ul className="space-y-3">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success shadow-[0_0_8px_#7FE3A6]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-2.5 font-mono text-xs tracking-wide text-accent">Key Features</div>
                <div className="grid grid-cols-1 gap-4 min-[521px]:grid-cols-2">
                  {project.features.map(({ title, description }) => (
                    <div
                      key={title}
                      className="rounded-[10px] border border-line bg-panel p-5 transition-[border-color,transform] duration-150 hover:-translate-y-0.5 hover:border-accent"
                    >
                      <h3 className="mb-2 font-semibold">{title}</h3>
                      <p className="text-[13.5px] text-muted">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-xl border border-line bg-panel p-6">
                <div className="mb-5 font-mono text-xs tracking-wide text-accent">Project Info</div>
                <div className="grid grid-cols-2 gap-5">
                  <MetaItem label="Role" value={project.role} />
                  <MetaItem label="Timeline" value={project.timeline} />
                  <MetaItem label="Status" value={project.status} />
                  <MetaItem label="Platform" value={project.tags[0]} />
                </div>
              </div>

              <div className="rounded-xl border border-line bg-panel p-6">
                <div className="mb-4 font-mono text-xs tracking-wide text-accent">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-[5px] border border-line bg-bg-soft px-3 py-1.5 font-mono text-[11px] text-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-[110px]">
        <div className="mx-auto max-w-[1100px] px-7">
          <div className="mb-2.5 font-mono text-xs tracking-wide text-accent">Gallery</div>
          <h2 className="mb-10 text-2xl font-bold">Screenshots</h2>

          <div className="grid grid-cols-1 gap-6 min-[521px]:grid-cols-2 min-[881px]:grid-cols-3">
            {screenshots.map((item, index) =>
              typeof item === 'string' ? (
                <img
                key={item}
                src={item}
                alt={`${project.title} screenshot ${index + 1}`}
                className="max-h-[420px] w-full rounded-xl border border-line object-contain"
              />
              ) : (
                <ScreenshotPlaceholder key={index} index={index + 1} />
              ),
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg-soft py-16">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-4 px-7 min-[721px]:flex-row">
          <AdjacentProjectLink project={prev} direction="prev" />
          <AdjacentProjectLink project={next} direction="next" />
        </div>
      </section>
    </>
  )
}
