import { cva } from 'class-variance-authority'
import { site } from '../../data/content'
import { isExternalHref } from '../../lib/cn'

const linkStyles = cva('inline-flex cursor-pointer items-center gap-2 transition-colors', {
  variants: {
    variant: {
      text: 'link-underline text-text',
      nav: 'font-mono text-[11px] uppercase tracking-[0.16em] text-muted hover:text-text',
      footer: 'text-[12px] leading-[1.45] text-muted hover:text-text',
      accent: 'link-underline font-mono text-[11px] uppercase tracking-[0.14em] text-accent',
      inverted: 'font-mono text-[10px] uppercase tracking-[0.14em] text-background hover:opacity-80',
      quiet: 'font-mono text-[10px] tracking-[0.04em] text-muted hover:text-text',
    },
  },
  defaultVariants: {
    variant: 'text',
  },
})

export function Link({ variant, arrow = false, href, className, children, ...props }) {
  const config = site.components?.link ?? {}
  const classes = linkStyles({
    variant: variant ?? config.variant,
    className,
  })

  const content = (
    <>
      {children}
      {arrow ? <span aria-hidden="true">↗</span> : null}
    </>
  )

  if (!href) {
    return <span className={classes}>{content}</span>
  }

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
