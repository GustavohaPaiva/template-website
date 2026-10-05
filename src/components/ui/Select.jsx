import { useId } from 'react'
import { cn, fieldClass } from '../../lib/cn'

export function Select({ label, error, id, options = [], placeholder, className, ...props }) {
  const generatedId = useId()
  const selectId = id || generatedId
  const normalized = options.map((option) =>
    typeof option === 'string' ? { label: option, value: option } : option,
  )

  return (
    <div className="grid gap-2">
      {label ? (
        <label htmlFor={selectId} className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {label}
        </label>
      ) : null}
      <div className="relative">
        <select
          id={selectId}
          aria-invalid={error ? true : undefined}
          className={cn(fieldClass, 'pr-8', className)}
          {...props}
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {normalized.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-muted">
          ↓
        </span>
      </div>
      {error ? <p className="text-[12px] text-accent">{error}</p> : null}
    </div>
  )
}
