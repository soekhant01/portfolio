import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { SectionHeading } from './About'

export default function Projects() {
  return (
    <section id="projects" className="py-[110px]">
      <div className="mx-auto max-w-[1100px] px-7">
        <SectionHeading
          eyebrow="03. Projects"
          title="Featured Work"
          description="A selection of projects I've built during my studies and personal time."
        />

        <div className="grid grid-cols-1 gap-6 min-[881px]:grid-cols-3">
          {projects.map(({ id, title, description, tags, thumbClass, coverImage }) => (
            <article key={id} className="overflow-hidden rounded-xl border border-line bg-panel">
              {coverImage ? (
                <img
                  src={coverImage}
                  alt={title}
                  className="h-40 w-full border-b border-line object-cover"
                />
              ) : (
                <div
                  className={`flex h-40 items-center justify-center border-b border-line bg-gradient-to-br font-mono text-[13px] text-muted ${thumbClass}`}
                >
                  {title}
                </div>
              )}
              <div className="p-[22px]">
                <h3 className="mb-2 text-lg">{title}</h3>
                <p className="mb-4 text-[13.5px] text-muted">{description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[5px] bg-tag-bg px-[9px] py-1 font-mono text-[11px] text-flutter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${id}`} className="text-[13px] font-semibold text-accent">
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
