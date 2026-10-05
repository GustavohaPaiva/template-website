/**
 * Conteúdo e configuração do site.
 *
 * Um cliente novo começa aqui: textos, links, tema, variantes e seções.
 * Os componentes só leem estes dados. Troque também as imagens em public/assets/images.
 */

const whatsapp = 'https://wa.me/5500000000000'
const email = 'mailto:contato@ateliernorte.com'

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export const site = {
  brand: {
    name: 'Atelier / Norte',
    tagline: 'Arquitetura com presença,\npara a vida de verdade.',
    location: 'São Paulo · Brasil',
  },

  meta: {
    lang: 'pt-BR',
    title: 'Atelier Norte — Arquitetura, interiores e experiências',
    description:
      'Criamos projetos que unem estética, funcionalidade e identidade, com um olhar atento ao que torna cada espaço único.',
    keywords: 'arquitetura, interiores, design, projetos residenciais',
    ogImage: '/assets/images/hero.svg',
  },

  theme: {
    mode: 'both',
    default: 'light',
    toggle: {
      toDark: 'Tema escuro',
      toLight: 'Tema claro',
      labelToDark: 'Ativar tema escuro',
      labelToLight: 'Ativar tema claro',
    },
    colors: {
      light: {
        background: '#F5F3EE',
        surface: '#FFFFFF',
        text: '#151515',
        muted: '#6F6F6F',
        accent: '#A17C4A',
        border: '#DEDBD4',
        soft: '#E9E5DC',
        'on-accent': '#F7F4EE',
      },
      dark: {
        background: '#0D0D0D',
        surface: '#161616',
        text: '#F2F0EB',
        muted: '#9A9A9A',
        accent: '#C49A63',
        border: '#292929',
        soft: '#20201E',
        'on-accent': '#F7F4EE',
      },
    },
  },

  components: {
    button: {
      variant: 'default',
      size: 'medium',
      rounded: 'pill',
    },
    link: {
      variant: 'text',
    },
    sectionHeader: {
      variant: 'default',
    },
    image: {
      variant: 'editorial',
    },
  },

  navigation,

  hero: {
    eyebrow: 'Arquitetura · Design · Experiências',
    title: 'Espaços que transformam a maneira de viver.',
    description:
      'Criamos projetos que unem estética, funcionalidade e identidade — com um olhar atento ao que torna cada espaço único.',
    cta: {
      label: 'Conheça nosso trabalho',
      href: '#projetos',
    },
    scrollLabel: 'Scroll para explorar',
    scrollHref: '#sobre',
    image: '/assets/images/hero.svg',
    imageAlt: 'Composição editorial de um espaço com luz natural e planos sobrepostos.',
    meta: '01 / 06',
  },

  about: {
    id: 'sobre',
    eyebrow: '01 / Sobre o atelier',
    title: 'Forma, matéria e vida cotidiana.',
    paragraphs: [
      'Acreditamos que bons espaços não precisam escolher entre beleza e uso. Eles acolhem, revelam a paisagem e acompanham o tempo de quem vive ali.',
      'Projetamos com escuta, rigor e sensibilidade. Cada decisão nasce do lugar, da luz e das pessoas — nunca de uma fórmula.',
    ],
    highlights: ['Design com propósito', 'Processo próximo', 'Atenção ao detalhe'],
  },

  services: {
    id: 'servicos',
    eyebrow: '02 / O que fazemos',
    title: 'Serviços pensados para o seu momento.',
    description: 'Do primeiro estudo à entrega final, com clareza em cada etapa.',
    items: [
      {
        title: 'Arquitetura',
        description: 'Casas, espaços de trabalho e reformas com identidade.',
        href: '#contato',
      },
      {
        title: 'Interiores',
        description: 'Ambientes funcionais, materiais honestos e luz bem pensada.',
        href: '#contato',
      },
      {
        title: 'Consultoria',
        description: 'Direção criativa e decisões seguras para seu projeto.',
        href: '#contato',
      },
    ],
  },

  projects: {
    id: 'projetos',
    eyebrow: '03 / Projetos selecionados',
    title: 'Feitos para durar. Feitos para pertencer.',
    viewAll: {
      label: 'Ver todos os projetos',
      href: '#projetos',
    },
    items: [
      {
        title: 'Casa Ipê',
        category: 'Residencial',
        year: '2025',
        location: '',
        image: '/assets/images/casa-ipe.svg',
        alt: 'Volume arquitetônico claro com aberturas verticais e um plano de destaque.',
        href: '#contato',
        featured: false,
      },
      {
        title: 'Pátio das Oliveiras',
        category: 'Interiores',
        year: '2024',
        location: '',
        image: '/assets/images/patio-oliveiras.svg',
        alt: 'Interior com planos horizontais, luz baixa e uma faixa de destaque.',
        href: '#contato',
        featured: false,
      },
      {
        title: 'Casa da Serra',
        category: 'Arquitetura',
        year: '2024',
        location: '',
        image: '/assets/images/casa-serra.svg',
        alt: 'Composição de fachada com massa clara, sombra e uma base contínua.',
        href: '#contato',
        featured: false,
      },
    ],
  },

  process: {
    id: 'processo',
    eyebrow: '04 / Como trabalhamos',
    title: 'Um processo claro, do início ao fim.',
    steps: [
      {
        title: 'Escuta',
        description: 'Imersão para entender rotina, desejos e contexto.',
      },
      {
        title: 'Estudo',
        description: 'Ideias, referências e caminhos possíveis.',
      },
      {
        title: 'Projeto',
        description: 'Detalhamento e escolhas com intenção.',
      },
      {
        title: 'Acompanhamento',
        description: 'Presença cuidadosa até a entrega.',
      },
    ],
  },

  testimonials: {
    id: 'depoimentos',
    eyebrow: '05 / Quem viveu o processo',
    title: 'Uma experiência que continua depois da entrega.',
    items: [
      {
        quote:
          'A casa ficou com a nossa cara — e cada detalhe parece simples, porque tudo foi muito bem pensado.',
        author: 'Marina e Rafael',
        role: 'Casa Ipê',
      },
    ],
  },

  cta: {
    id: 'contato',
    eyebrow: 'Vamos conversar?',
    title: 'Um bom projeto começa com uma boa conversa.',
    description: 'Conte um pouco sobre o que você imagina. A gente ajuda a dar forma.',
    button: {
      label: 'Fale com o atelier',
      href: whatsapp,
    },
  },

  contact: {
    whatsapp: { label: 'WhatsApp', href: whatsapp },
    email: { label: 'E-mail', href: email },
  },

  footer: {
    navigationLabel: 'Navegação',
    socialLabel: 'Acompanhe',
    navigation,
    social: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Pinterest', href: 'https://pinterest.com' },
    ],
    legal: '© 2025 Atelier Norte · Feito com cuidado',
    privacy: { label: 'Privacidade', href: '#privacidade' },
    backToTop: '↑ Voltar ao topo',
  },

  settings: {
    animations: true,
    sections: {
      about: true,
      services: true,
      projects: true,
      process: true,
      testimonials: true,
    },
    ui: {
      mainNavigation: 'Principal',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      skipToContent: 'Ir para o conteúdo',
      previousTestimonial: 'Depoimento anterior',
      nextTestimonial: 'Próximo depoimento',
    },
  },
}
