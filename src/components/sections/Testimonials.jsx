import { useState } from 'react'
import { SectionHeader } from '../ui/SectionHeader'
import { containerClass } from '../../lib/cn'

export function Testimonials({ content, ui }) {
  const items = content.items ?? []
  const [index, setIndex] = useState(0)
  const titleId = `${content.id}-title`
  const total = items.length
  const current = items[index] ?? items[0]

  if (!current) return null

  function show(step) {
    setIndex((value) => (value + step + total) % total)
  }

  const authorLine = [current.author, current.role].filter(Boolean).join(' · ')

  return (
    <section id={content.id} aria-labelledby={titleId} className="py-16 lg:py-24">
      <div className={containerClass}>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,696px)] lg:gap-16">
          <div data-animate="reveal">
            <SectionHeader eyebrow={content.eyebrow} title={content.title} titleId={titleId} size="quote" />
          </div>

          <figure className="rounded-[6px] bg-surface p-7 lg:min-h-[300px] lg:p-10" data-animate="reveal">
            <p aria-hidden="true" className="font-display text-[56px] leading-none text-accent lg:text-[66px]">
              “
            </p>
            <blockquote key={current.quote} className="quote-swap mt-2" aria-live="polite">
              <p className="font-display text-[23px] leading-[1.2] text-text lg:text-[27px]">{current.quote}</p>
            </blockquote>
            {authorLine ? <figcaption className="mt-8 text-[12px] leading-[1.45] text-muted">{authorLine}</figcaption> : null}

            {total > 1 ? (
              <div className="mt-8 flex items-center justify-end gap-4 font-mono text-[10px] text-muted">
                <button type="button" className="cursor-pointer px-1" onClick={() => show(-1)} aria-label={ui.previousTestimonial}>
                  ←
                </button>
                <span>
                  {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
                <button type="button" className="cursor-pointer px-1" onClick={() => show(1)} aria-label={ui.nextTestimonial}>
                  →
                </button>
              </div>
            ) : null}
          </figure>
        </div>
      </div>
    </section>
  )
}
