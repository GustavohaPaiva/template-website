import { cva } from 'class-variance-authority'
import { site } from '../../data/content'

const titleStyles = cva('text-balance font-display font-normal leading-[1.12]', {
  variants: {
    variant: {
      default: 'text-text',
      inverted: 'text-background',
    },
    size: {
      default: 'text-[34px] lg:text-[42px]',
      about: 'text-[35px] lg:text-[43px]',
      projects: 'text-[34px] lg:text-[44px]',
      process: 'text-[34px] lg:text-[40px]',
      quote: 'text-[31px] lg:text-[38px]',
      large: 'text-[39px] leading-[1.1] lg:text-[48px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export function SectionHeader({
  eyebrow,
  title,
  description,
  variant,
  size = 'default',
  titleId,
  className,
}) {
  const config = site.components?.sectionHeader ?? {}
  const resolved = variant ?? config.variant ?? 'default'

  return (
    <header className={className}>
      {eyebrow ? (
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent lg:text-[11px]">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 id={titleId} className={`${titleStyles({ variant: resolved, size })} ${eyebrow ? 'mt-6' : ''}`}>
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-5 max-w-md text-[15px] leading-[1.45] text-muted">{description}</p>
      ) : null}
    </header>
  )
}
