# Portfolio — création de sites web

Portfolio interactif d’un développeur Full Stack, design minimaliste / brutalisme (titre central **PORTFOLIO**, accent rouge vertical, menu bas en cartes pendule).

## Stack

**Vite + React + Tailwind CSS v4 + GSAP**

- Plus léger que Next.js pour un site visuel d’abord animé côté client.
- React pour composer le hero, les cartes et les pages (services, projets).
- GSAP (plutôt que Framer Motion) pour le balancier : ressort, inertie, suivi souris.

## Démarrage

```bash
npm install
npm run dev
```

## Arborescence

Voir `src/` : `components/hero`, `components/pendulum-menu`, `pages`, `hooks/usePendulum.js`, `lib/gsap.js`, `data/`.

## Feuille de route

1. Hero : titre PORTFOLIO + barre rouge.
2. Cartes du menu bas (structure, pas encore de physique).
3. Effet pendule GSAP + souris.
4. Pages services / projets / contact + contenu réel.
