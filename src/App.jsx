import { useEffect } from 'react'
import { site } from './data/content'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { CTA } from './components/sections/CTA'
import { Hero } from './components/sections/Hero'
import { Process } from './components/sections/Process'
import { Projects } from './components/sections/Projects'
import { Services } from './components/sections/Services'
import { Testimonials } from './components/sections/Testimonials'

const contactChannels = [site.contact.whatsapp, site.contact.email].filter((channel) => channel?.href)

export default function App() {
  usePageMeta(site.meta)
  useReveal(site.settings.animations !== false)

  return (
    <div className="bg-background text-text">
      <a href="#conteudo" className="skip-link">
        {site.settings.ui.skipToContent}
      </a>
      <Navbar brand={site.brand} navigation={site.navigation} ui={site.settings.ui} />
      <main id="conteudo">
        <Hero content={site.hero} />
        {isSectionVisible('about', site.about) ? <About content={site.about} /> : null}
        {isSectionVisible('services', site.services) ? <Services content={site.services} /> : null}
        {isSectionVisible('projects', site.projects) ? <Projects content={site.projects} /> : null}
        {isSectionVisible('process', site.process) ? <Process content={site.process} /> : null}
        {isSectionVisible('testimonials', site.testimonials) ? (
          <Testimonials content={site.testimonials} ui={site.settings.ui} />
        ) : null}
        <CTA content={site.cta} channels={contactChannels} />
      </main>
      <Footer brand={site.brand} footer={site.footer} />
    </div>
  )
}

function isSectionVisible(key, content) {
  const sections = site.settings.sections ?? {}
  if (sections[key] === false) return false

  if (key === 'about') return Boolean(content?.title || content?.paragraphs?.length)
  if (key === 'services' || key === 'projects' || key === 'testimonials') {
    return Array.isArray(content?.items) && content.items.length > 0
  }
  if (key === 'process') return Array.isArray(content?.steps) && content.steps.length > 0

  return true
}

function usePageMeta(meta) {
  useEffect(() => {
    if (meta.title) document.title = meta.title
    setMeta('name', 'description', meta.description)
    setMeta('name', 'keywords', meta.keywords)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:image', meta.ogImage)
    setMeta('property', 'og:type', 'website')
  }, [meta])
}

function setMeta(attribute, key, content) {
  if (!content) return

  const selector = `meta[${attribute}="${key}"]`
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }

  element.setAttribute('content', content)
}

function useReveal(enabled) {
  useEffect(() => {
    if (!enabled) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const nodes = [...document.querySelectorAll('[data-animate="reveal"]')]

    function revealInView() {
      const limit = window.innerHeight * 0.9

      nodes.forEach((node) => {
        if (node.classList.contains('is-visible')) return
        if (node.getBoundingClientRect().top < limit) node.classList.add('is-visible')
      })
    }

    revealInView()
    document.documentElement.dataset.reveal = 'ready'

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12 })

    nodes.forEach((node) => {
      if (!node.classList.contains('is-visible')) observer.observe(node)
    })

    function onAnchorClick(event) {
      const anchor = event.target.closest?.('a[href^="#"]')
      if (!anchor) return
      window.setTimeout(revealInView, 50)
      window.setTimeout(revealInView, 700)
    }

    window.addEventListener('scroll', revealInView, { passive: true })
    window.addEventListener('resize', revealInView)
    document.addEventListener('click', onAnchorClick)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', revealInView)
      window.removeEventListener('resize', revealInView)
      document.removeEventListener('click', onAnchorClick)
      delete document.documentElement.dataset.reveal
    }
  }, [enabled])
}
