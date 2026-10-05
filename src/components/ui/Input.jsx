import { useId } from 'react'
import { cn, fieldClass } from '../../lib/cn'

export function Input({ label, error, id, className, ...props }) {
  const generatedId = useId()
  const inputId = id || generatedId

  return (
    <div className="grid gap-2">
      {label ? (
        <label htmlFor={inputId} className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        className={cn(fieldClass, className)}
        {...props}
      />
      {error ? <p className="text-[12px] text-accent">{error}</p> : null}
    </div>
  )
}
