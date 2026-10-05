import { Button } from '../ui/Button'
import { Link } from '../ui/Link'
import { SectionHeader } from '../ui/SectionHeader'
import { containerClass, cn } from '../../lib/cn'

export function CTA({ content, channels = [] }) {
  const titleId = `${content.id}-title`

  return (
    <section id={content.id} aria-labelledby={titleId} className="bg-text text-background">
      <div className={cn(containerClass, 'py-20 lg:py-24')} data-animate="reveal">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            variant="inverted"
            size="large"
            titleId={titleId}
          />
          {content.button?.label ? (
            <Button href={content.button.href} variant="accent" size="large" arrow className="w-full lg:w-[300px]">
              {content.button.label}
            </Button>
          ) : null}
        </div>

        {channels.length ? (
          <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
            {channels.map((channel, index) => (
              <span key={channel.href} className="inline-flex items-center gap-3">
                {index > 0 ? <span aria-hidden="true">·</span> : null}
                <Link href={channel.href} variant="inverted">
                  {channel.label}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  )
}
