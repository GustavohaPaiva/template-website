import { Image } from '../ui/Image'
import { Link } from '../ui/Link'
import { SectionHeader } from '../ui/SectionHeader'
import { containerClass, cn, isExternalHref } from '../../lib/cn'

export function Projects({ content }) {
  const titleId = `${content.id}-title`
  const items = content.items ?? []

  return (
    <section id={content.id} aria-labelledby={titleId} className="py-16 lg:py-24">
      <div className={containerClass}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between" data-animate="reveal">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            titleId={titleId}
            size="projects"
            className="max-w-[620px]"
          />
          {content.viewAll?.href ? (
            <Link href={content.viewAll.href} variant="accent" arrow>
              {content.viewAll.label}
            </Link>
          ) : null}
        </div>

        <ul className={cn('mt-12 grid gap-x-8 gap-y-14', gridClass(items.length))}>
          {items.map((project, index) => (
            <li
              key={`${project.title}-${index}`}
              className={project.featured && items.length >= 3 ? 'lg:col-span-2' : undefined}
              data-animate="reveal"
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <ProjectCard project={project} featured={project.featured && items.length >= 3} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function gridClass(count) {
  if (count <= 1) return 'grid-cols-1 max-w-3xl'
  if (count === 2) return 'grid-cols-1 md:grid-cols-2'
  return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
}

function projectMeta(project) {
  return [project.category, project.location, project.year].filter(Boolean).join(' · ')
}

function ProjectCard({ project, featured }) {
  const meta = projectMeta(project)
  const external = isExternalHref(project.href)
  const figure = (
    <>
      <Image
        src={project.image}
        alt={project.alt || project.title}
        ratio={featured ? 'wide' : 'project'}
        zoom
      />
      <figcaption className="mt-5">
        {meta ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent lg:text-[11px]">{meta}</p>
        ) : null}
        <h3 className="mt-3 font-display text-[24px] leading-[1.12] text-text transition-colors group-hover:text-accent lg:text-[25px]">
          {project.title}
        </h3>
      </figcaption>
    </>
  )

  if (!project.href) {
    return <figure>{figure}</figure>
  }

  return (
    <a
      href={project.href}
      className="group block"
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
    >
      <figure>{figure}</figure>
    </a>
  )
}
