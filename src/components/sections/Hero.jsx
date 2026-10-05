import { Button } from '../ui/Button'
import { Image } from '../ui/Image'
import { containerClass } from '../../lib/cn'

export function Hero({ content }) {
  return (
    <section aria-labelledby="hero-title" className="pb-16 pt-8 lg:pb-20 lg:pt-14">
      <div className={containerClass}>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:gap-8">
          <div data-animate="load">
            {content.eyebrow ? (
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent lg:text-[11px]">
                {content.eyebrow}
              </p>
            ) : null}
            <h1
              id="hero-title"
              className="mt-6 max-w-[11em] font-display text-[34px] leading-[1.12] text-balance text-text lg:max-w-[600px] lg:text-[56px]"
            >
              {content.title}
            </h1>
            {content.description ? (
              <p className="mt-6 max-w-[485px] text-[15px] leading-[1.45] text-muted lg:text-[17px]">
                {content.description}
              </p>
            ) : null}
            {content.cta?.label ? (
              <div className="mt-8">
                <Button href={content.cta.href} arrow className="w-full lg:w-auto">
                  {content.cta.label}
                </Button>
              </div>
            ) : null}
            {content.scrollLabel ? (
              <a
                href={content.scrollHref || '#sobre'}
                className="mt-16 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted lg:inline-flex"
              >
                {content.scrollLabel} <span aria-hidden="true">↓</span>
              </a>
            ) : null}
          </div>

          <div data-animate="load" style={{ animationDelay: '80ms' }}>
            <Image src={content.image} alt={content.imageAlt || ''} ratio="hero" priority />
            {content.meta ? (
              <p className="mt-4 text-right font-mono text-[10px] text-muted">{content.meta}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
