import { cva } from 'class-variance-authority'
import { site } from '../../data/content'
import { cn, isExternalHref } from '../../lib/cn'

const buttonStyles = cva(
  'pressable inline-flex cursor-pointer items-center justify-center gap-3 border-0 font-sans font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40',
  {
    variants: {
      variant: {
        default: 'bg-text text-background hover:bg-accent hover:text-on-accent',
        accent: 'bg-accent text-on-accent hover:bg-text hover:text-background',
        outline: 'bg-surface text-text hover:bg-text hover:text-background',
        minimal: 'bg-transparent text-text hover:text-accent',
      },
      size: {
        small: 'h-8 px-4 text-[11px]',
        medium: 'h-14 px-6 text-[13px] lg:h-[50px] lg:text-[12px]',
        large: 'h-14 px-8 text-[13px] lg:h-[58px] lg:px-10 lg:text-[14px]',
        none: 'h-auto px-0 py-0 text-[13px]',
      },
      rounded: {
        none: 'rounded-none',
        small: 'rounded-[5px]',
        pill: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
      rounded: 'pill',
    },
  },
)

export function Button({
  variant,
  size,
  rounded,
  arrow = false,
  href,
  className,
  children,
  ...props
}) {
  const config = site.components?.button ?? {}
  const resolvedVariant = variant ?? config.variant

  // Minimal é um link visual, sem a altura dos botões sólidos.
  const resolvedSize = resolvedVariant === 'minimal' ? 'none' : (size ?? config.size)

  const classes = buttonStyles({
    variant: resolvedVariant,
    size: resolvedSize,
    rounded: rounded ?? config.rounded,
    className,
  })

  const content = (
    <>
      {children}
      {arrow ? <span aria-hidden="true">↗</span> : null}
    </>
  )

  if (href) {
    const external = isExternalHref(href)

    return (
      <a
        {...props}
        href={href}
        className={classes}
        target={props.target ?? (external ? '_blank' : undefined)}
        rel={props.rel ?? (external ? 'noreferrer noopener' : undefined)}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={cn(classes)} {...props}>
      {content}
    </button>
  )
}
