import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Link } from '../ui/Link'
import { containerClass, cn } from '../../lib/cn'

export function Navbar({ brand, navigation, ui }) {
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function onKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    function onPointerDown(event) {
      if (!headerRef.current?.contains(event.target)) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')

    function onChange() {
      if (media.matches) setOpen(false)
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return (
    <header id="topo" ref={headerRef} className="sticky top-0 z-40 bg-background">
      <div className="border-b border-border">
        <div
          className={cn(
            containerClass,
            'grid h-[72px] grid-cols-[1fr_auto] items-center lg:h-[88px] lg:grid-cols-[1fr_auto_1fr]',
          )}
        >
          <a href="#topo" className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-text">
            {brand.name}
          </a>

          <nav aria-label={ui.mainNavigation} className="hidden justify-center lg:flex">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} variant="nav">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden justify-end lg:flex">
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="grid h-11 w-11 cursor-pointer place-items-center text-[22px] leading-none text-text lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? ui.closeMenu : ui.openMenu}</span>
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="absolute inset-x-0 top-full z-50 border-b border-border bg-background lg:hidden">
          <nav aria-label={ui.mainNavigation} className={cn(containerClass, 'py-6')}>
            <ul>
              {navigation.map((item) => (
                <li key={item.href} className="border-b border-border">
                  <a
                    href={item.href}
                    className="block py-5 font-display text-[32px] leading-none text-text"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
