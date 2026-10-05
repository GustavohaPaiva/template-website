export function cn(...parts) {
  return parts.flat().filter(Boolean).join(' ')
}

export const containerClass = 'mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16'

export const fieldClass =
  'w-full appearance-none rounded-none border-0 border-b border-border bg-transparent py-3 font-sans text-[15px] text-text outline-none placeholder:text-muted focus:border-text disabled:cursor-not-allowed disabled:opacity-40'

export function isExternalHref(href = '') {
  return /^https?:\/\//.test(href)
}

export function formatIndex(index) {
  return String(index + 1).padStart(2, '0')
}
