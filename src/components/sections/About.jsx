import { SectionHeader } from '../ui/SectionHeader'
import { containerClass, cn } from '../../lib/cn'

export function About({ content }) {
  const titleId = `${content.id}-title`

  return (
    <section id={content.id} aria-labelledby={titleId} className="py-16 lg:py-24" data-animate="reveal">
      <div className={containerClass}>
        <div className="border-t border-border pt-12 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <SectionHeader
              eyebrow={content.eyebrow}
              title={content.title}
              titleId={titleId}
              size="about"
              className="lg:col-span-5"
            />
            <div className="grid gap-6 lg:col-span-6 lg:col-start-7">
              {content.paragraphs?.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={cn(
                    'text-muted',
                    index === 0 ? 'text-[15px] leading-[1.5] lg:text-[18px] lg:leading-[1.45]' : 'text-[15px] leading-[1.5]',
                  )}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          {content.highlights?.length ? (
            <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.14em] text-accent lg:text-[11px]">
              {content.highlights.join('   ·   ')}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
