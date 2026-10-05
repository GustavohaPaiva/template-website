import { SectionHeader } from '../ui/SectionHeader'
import { containerClass, cn, formatIndex } from '../../lib/cn'

export function Services({ content }) {
  const titleId = `${content.id}-title`

  return (
    <section id={content.id} aria-labelledby={titleId} className="bg-soft py-16 lg:py-24">
      <div className={cn(containerClass)} data-animate="reveal">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-16">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            titleId={titleId}
          />
          <ul className="border-t border-border">
            {content.items.map((item, index) => (
              <li key={item.title} className="border-b border-border">
                <ServiceItem item={item} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ item, index }) {
  const body = (
    <>
      <span className="pt-1 font-mono text-[10px] text-accent">{formatIndex(index)}</span>
      <span>
        <span className="block font-display text-[24px] leading-[1.2] text-text transition-colors group-hover:text-accent lg:text-[27px]">
          {item.title}
        </span>
        {item.description ? (
          <span className="mt-2 block max-w-xl text-[13px] leading-[1.45] text-muted">{item.description}</span>
        ) : null}
      </span>
      <span aria-hidden="true" className="pt-1 text-[20px] text-accent transition-transform group-hover:translate-x-0.5">
        ↗
      </span>
    </>
  )

  const className = 'group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] gap-x-3 py-7 lg:py-8'

  if (!item.href) {
    return <div className={className}>{body}</div>
  }

  return (
    <a href={item.href} className={className}>
      {body}
    </a>
  )
}
