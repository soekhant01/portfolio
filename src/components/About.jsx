import { stats } from '../data/content'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <>
      <div className="mb-2.5 font-mono text-xs tracking-wide text-accent">{eyebrow}</div>
      <h2 className="mb-3.5 text-[clamp(26px,3.4vw,36px)] font-bold tracking-[-0.5px]">{title}</h2>
      {description && <p className="mb-[50px] max-w-[520px] text-muted">{description}</p>}
    </>
  )
}

export default function About() {
  return (
    <section id="about" className="py-[110px]">
      <div className="mx-auto max-w-[1100px] px-7">
        <SectionHeading eyebrow="01. About" title="Building mobile experiences that matter" />

        <div className="grid grid-cols-1 gap-[60px] min-[881px]:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-[15.5px] text-muted">
              I&apos;m a passionate mobile developer currently in my 5th year of Computer Science studies.
              My journey started with curiosity about how apps work, and evolved into a deep love for
              crafting pixel-perfect, performant mobile applications.
            </p>
            <p className="mb-4 text-[15.5px] text-muted">
              With expertise in <strong className="text-text">Kotlin</strong> for native Android and <strong className="text-text">Flutter</strong> for cross-platform development
              , I bring ideas to life on every screen. I believe great apps are built at the intersection of clean code and thoughtful design.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[18px]">
            {stats.map(({ num, label }) => (
              <div key={label} className="rounded-[10px] border border-line bg-panel p-[22px]">
                <div className="font-mono text-[28px] font-bold text-accent">{num}</div>
                <div className="mt-1 text-[13px] text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { SectionHeading }
