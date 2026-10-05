# Template Premium — Landing Page

Base reutilizável para landing pages. O mesmo código serve clientes diferentes: o que muda é o conteúdo, as imagens e a identidade visual. A estrutura das seções permanece.

O exemplo visual é o estúdio Atelier Norte. Os textos ficam em `src/data/content.js`.

## Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- class-variance-authority (CVA)

## Como instalar

```bash
npm install
```

## Como executar localmente

```bash
npm run dev
```

O site abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura principal

```text
public/assets/images/     imagens
src/data/content.js       textos, tema, SEO e seções
src/components/ui/        botões, campos, imagem e títulos
src/components/layout/    navbar e rodapé
src/components/sections/  blocos da página
src/hooks/useTheme.js     tema claro, escuro ou os dois
src/index.css             cores e tipografia
```

Um cliente novo começa por `src/data/content.js` e pelas imagens em `public/assets/images/`.
