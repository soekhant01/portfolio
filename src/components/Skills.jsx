import { skills } from '../data/content'
import { SectionHeading } from './About'

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-soft py-[110px]">
      <div className="mx-auto max-w-[1100px] px-7">
        <SectionHeading
          eyebrow="02. Skills"
          title="My Tech Stack"
          description="Tools and technologies I use to bring mobile ideas to life."
        />

        <div className="grid grid-cols-1 gap-4 min-[521px]:grid-cols-2 min-[881px]:grid-cols-4">
          {skills.map(({ name, level, desc }) => (
            <div
              key={name}
              className="rounded-[10px] border border-line bg-panel p-5 transition-[transform,border-color] duration-150 hover:-translate-y-[3px] hover:border-accent"
            >
              <div className="mb-1.5 text-[15px] font-semibold">{name}</div>
              <span className="mb-2.5 inline-block font-mono text-[11px] text-success">{level}</span>
              <div className="text-[13px] text-muted">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
