import { site } from '../../data/content'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/cn'

export function ThemeToggle({ className }) {
  const { canToggle, theme, toggleTheme } = useTheme()

  if (!canToggle) return null

  const labels = site.theme.toggle ?? {}
  const goingDark = theme !== 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={theme === 'dark'}
      aria-label={goingDark ? labels.labelToDark : labels.labelToLight}
      className={cn(
        'inline-flex h-[30px] cursor-pointer items-center gap-2 rounded-full bg-surface px-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted',
        className,
      )}
    >
      <span aria-hidden="true">{goingDark ? '☾' : '☀'}</span>
      {goingDark ? labels.toDark : labels.toLight}
    </button>
  )
}
