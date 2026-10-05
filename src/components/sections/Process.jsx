import { SectionHeader } from '../ui/SectionHeader'
import { containerClass, formatIndex } from '../../lib/cn'

export function Process({ content }) {
  const titleId = `${content.id}-title`

  return (
    <section id={content.id} aria-labelledby={titleId} className="bg-soft py-16 lg:py-24">
      <div className={containerClass} data-animate="reveal">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          titleId={titleId}
          size="process"
          className="max-w-[420px]"
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-9">
          {content.steps.map((step, index) => (
            <li key={step.title} className="border-t border-border pt-5">
              <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-2 lg:grid-cols-1">
                <p className="font-mono text-[10px] text-accent lg:mb-4">{formatIndex(index)}</p>
                <div>
                  <h3 className="font-display text-[22px] leading-[1.35] text-text">{step.title}</h3>
                  {step.description ? (
                    <p className="mt-2 text-[12px] leading-[1.45] text-muted">{step.description}</p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
