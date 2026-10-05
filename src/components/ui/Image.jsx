import { cva } from 'class-variance-authority'
import { site } from '../../data/content'
import { cn } from '../../lib/cn'

const frameStyles = cva('relative block overflow-hidden bg-soft', {
  variants: {
    variant: {
      editorial: 'rounded-[4px] lg:rounded-[6px]',
      mono: 'rounded-[4px] lg:rounded-[6px]',
    },
  },
  defaultVariants: {
    variant: 'editorial',
  },
})

const photoStyles = cva('absolute inset-0 h-full w-full object-cover', {
  variants: {
    variant: {
      editorial: '',
      mono: 'grayscale',
    },
  },
  defaultVariants: {
    variant: 'editorial',
  },
})

const ratios = {
  hero: 'aspect-[342/260] lg:aspect-[686/540]',
  project: 'aspect-[342/300] lg:aspect-[408/310]',
  wide: 'aspect-[16/10]',
}

export function Image({
  src,
  alt,
  variant,
  ratio = 'project',
  zoom = false,
  priority = false,
  className,
}) {
  const config = site.components?.image ?? {}
  const resolved = variant ?? config.variant ?? 'editorial'

  return (
    <div className={cn(frameStyles({ variant: resolved }), ratios[ratio], zoom && 'media-zoom', className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={photoStyles({ variant: resolved })}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
        />
      ) : null}
    </div>
  )
}
