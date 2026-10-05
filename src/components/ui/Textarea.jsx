import { useId } from 'react'
import { cn, fieldClass } from '../../lib/cn'

export function Textarea({ label, error, id, className, ...props }) {
  const generatedId = useId()
  const textareaId = id || generatedId

  return (
    <div className="grid gap-2">
      {label ? (
        <label htmlFor={textareaId} className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {label}
        </label>
      ) : null}
      <textarea
        id={textareaId}
        aria-invalid={error ? true : undefined}
        className={cn(fieldClass, 'min-h-32 resize-y', className)}
        {...props}
      />
      {error ? <p className="text-[12px] text-accent">{error}</p> : null}
    </div>
  )
}
