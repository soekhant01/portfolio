import { socialLinks } from '../data/content'
import { SOCIAL_ICONS } from '../components/Socialicons'


export default function Contact() {
  return (
    <section id="contact" className="bg-bg-soft py-[110px]">
      <div className="mx-auto max-w-[1100px] px-7">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-panel p-[60px] text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-100px] left-1/2 z-0 h-[300px] w-[400px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(84,197,248,0.12),transparent_70%)]"
          />

          <div className="relative z-10">
            <h2 className="mb-4 text-[clamp(26px,3.4vw,36px)]">Let&apos;s build something together</h2>
            <p className="mx-auto mb-[30px] max-w-[440px] text-muted">
              I&apos;m always open to new opportunities, collaborations, or just a friendly chat about mobile development.
            </p>

            <div className="mb-[30px] flex flex-wrap justify-center gap-3.5">
              <a href="mailto:soekhant.dev@gmail.com" className="btn-primary">
                soekhant.dev@gmail.com
              </a>
              <a href="/portfolio/Soe_Khant_Resume.pdf" download className="btn-secondary">
                Download Resume
              </a>
            </div>

            <div className="flex justify-center gap-5 text-[13px] text-muted">
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
        </div>
      </div>
    </section>
  )
}