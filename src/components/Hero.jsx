import { socialLinks } from '../data/content'
import { SOCIAL_ICONS } from '../components/Socialicons'

function CodePanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-[7px] border-b border-line bg-bg-soft px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-2 font-mono text-xs text-muted">main.kt</div>
      </div>
      <div className="p-5 font-mono text-[13px] leading-[1.75] text-code-text">
        <span className="text-kotlin">class</span>{' '}
        <span className="text-flutter">Developer</span> {'{'}
        <br />
        &nbsp;&nbsp;<span className="text-kotlin">val</span> name ={' '}
        <span className="text-success">&quot;Soe Khant&quot;</span>
        <br />
        &nbsp;&nbsp;<span className="text-kotlin">val</span> stack ={' '}
        <span className="text-kotlin">listOf</span>(
        <span className="text-success">&quot;Kotlin&quot;</span>,{' '}
        <span className="text-success">&quot;Flutter&quot;</span>)
        <br />
        &nbsp;&nbsp;<span className="text-kotlin">val</span> status ={' '}
        <span className="text-success">&quot;open to work&quot;</span>
        <br />
        <br />
        &nbsp;&nbsp;<span className="text-code-comment">// 2+ years of learning and practicing</span>
        <br />
        {'}'}
      </div>
    </div>
  )
}

export default function Hero({ onNavigate }) {
  return (
    <section className="relative overflow-hidden pb-[90px] pt-[170px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[150px] -top-[150px] z-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(84,197,248,0.18),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-[60px] px-7 min-[881px]:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-success/25 bg-success/[0.08] px-3 py-1.5 font-mono text-xs text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_#7FE3A6]" />
            Available for work
          </div>

          <h1 className="mb-[22px] text-[clamp(38px,5vw,58px)] font-bold leading-[1.08] tracking-[-1px]">
            Building mobile apps
            <br />
            that feel <span className="gradient-text">effortless</span>
          </h1>

          <p className="mb-[34px] max-w-[480px] text-[17px] text-muted">
            5th-year Computer Science student specializing in Kotlin Android development and Flutter .
            I build fast, beautiful, and user-centric mobile experiences.
          </p>

          <div className="mb-[38px] flex flex-wrap gap-3.5">
            <a href="#projects" className="btn-primary" onClick={(e) => onNavigate(e, '#projects')}>
              View Projects
            </a>
            <a href="#contact" className="btn-secondary" onClick={(e) => onNavigate(e, '#contact')}>
              Contact Me
            </a>
          </div>

          <div className="flex gap-[18px] text-[13px] text-muted">
            {socialLinks.map(({ href, label, external, icon }) => {
              const Icon = SOCIAL_ICONS[icon]
              return (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 hover:text-accent"
                >
                  {Icon && <Icon />}
                  {label}
                </a>
              )
            })}
          </div>
        </div>

        <CodePanel />
      </div>
    </section>
  )
}
