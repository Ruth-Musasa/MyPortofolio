import { AccentBar } from '@/components/hero/AccentBar.jsx'
import { TitleBlock } from '@/components/hero/TitleBlock.jsx'
import { site } from '@/data/site.js'

const plusMarks = [
  { top: '6%', left: '38%' },
  { top: '5%', right: '6%' },
  { top: '7%', left: '8%' },
  { top: '42%', left: '11%' },
  { top: '42%', right: '11%' },
  { top: '36%', left: '46%' },
]

function SideChevron({ side }) {
  const isLeft = side === 'left'
  return (
    <span
      aria-hidden="true"
      className={`absolute top-[22%] z-30 hidden -translate-y-1/2 text-ink/40 md:block ${isLeft ? 'left-8' : 'right-8'}`}
    >
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
        <path
          d={isLeft ? 'M12 1L2 11L12 21' : 'M2 1L12 11L2 21'}
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    </span>
  )
}

export function Hero() {
  return (
    <section
      aria-label="Accueil"
      className="relative h-svh overflow-hidden bg-paper"
    >
      {plusMarks.map((mark, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="plus-mark z-10 max-md:hidden"
          style={mark}
        />
      ))}

      <header className="relative z-30 flex items-start justify-between px-8 pt-8 max-md:px-5 max-md:pt-6">
        <p className="font-condensed text-[11px] leading-4 font-medium tracking-[0.35em] text-neutral-700 uppercase sm:text-xs">
          {site.welcome[0]}
          <br />
          {site.welcome[1]}
        </p>
        <span
          aria-hidden="true"
          className="mt-0.5 grid h-9 w-9 place-items-center rounded-full border border-neutral-400/80 text-neutral-600"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v8M8 12h8" />
          </svg>
        </span>
      </header>

      <SideChevron side="left" />
      <SideChevron side="right" />
      <AccentBar />
      <TitleBlock />

      <div className="absolute top-[33%] left-1/2 z-30 flex w-[min(90rem,86%)] -translate-x-1/2 items-center justify-between px-2 font-condensed text-[11px] tracking-[0.28em] text-neutral-500 uppercase max-md:top-[34%]">
        <span>{site.name}</span>
        <span>{site.role}</span>
      </div>
    </section>
  )
}
