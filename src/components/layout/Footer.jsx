import { Link } from '../ui/Link'
import { containerClass, cn } from '../../lib/cn'

export function Footer({ brand, footer }) {
  const links = footer.navigation ?? []

  return (
    <footer className="bg-background">
      <div className={cn(containerClass, 'py-16 lg:py-20')}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#topo" className="font-sans text-[14px] font-semibold uppercase tracking-[0.16em] text-text">
              {brand.name}
            </a>
            <p className="mt-4 max-w-xs whitespace-pre-line text-[13px] leading-[1.45] text-muted">{brand.tagline}</p>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{footer.navigationLabel}</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 lg:grid lg:gap-2">
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} variant="footer">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{footer.socialLabel}</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 lg:grid lg:gap-2">
              {footer.social?.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} variant="footer">
                    {item.label}
                  </Link>
                </li>
              ))}
              {brand.location ? (
                <li>
                  <span className="text-[12px] leading-[1.45] text-muted">{brand.location}</span>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div
          id="privacidade"
          className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-mono text-[10px] text-muted">{footer.legal}</p>
          <div className="flex flex-wrap gap-6">
            {footer.privacy?.label ? (
              <Link href={footer.privacy.href} variant="quiet">
                {footer.privacy.label}
              </Link>
            ) : null}
            {footer.backToTop ? (
              <Link href="#topo" variant="quiet">
                {footer.backToTop}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  )
}
