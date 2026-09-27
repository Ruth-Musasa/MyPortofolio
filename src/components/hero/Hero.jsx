import { AccentBar } from '@/components/hero/AccentBar.jsx'
import { TitleBlock } from '@/components/hero/TitleBlock.jsx'
import { site } from '@/data/site.js'

const plusMarks = [
  { top: '7%', left: '46%' },
  { top: '8%', left: '62%' },
  { top: '28%', left: '8%' },
  { top: '58%', left: '6%' },
  { top: '57%', left: '58%' },
  { top: '36%', left: '88%' },
]

function SideChevron({ side }) {
  const isLeft = side === 'left'
  return (
    <span
      aria-hidden="true"
      className={`absolute top-[42%] z-30 hidden text-ink/35 md:block ${isLeft ? 'left-7' : 'right-7'}`}
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
      className="relative flex h-svh flex-col overflow-hidden bg-paper"
    >
      {plusMarks.map((mark) => (
        <span
          key={`${mark.top}-${mark.left}`}
          aria-hidden="true"
          className="plus-mark max-md:hidden"
          style={mark}
        />
      ))}

      <header className="relative z-30 flex items-start justify-between px-8 pt-7 max-md:px-5">
        <p className="font-condensed text-[0.95rem] leading-[1.05] font-semibold tracking-[0.18em] uppercase">
          Welcome
          <br />
          to my
        </p>
        <span
          aria-hidden="true"
          className="mt-1 grid h-8 w-8 place-items-center rounded-full border border-ink/60 text-ink"
        >
          <span className="font-condensed text-xs tracking-widest">Φ</span>
        </span>
      </header>

      <div className="relative flex flex-1 flex-col items-center justify-center pb-[30vh] max-md:pb-[36vh]">
        <SideChevron side="left" />
        <SideChevron side="right" />
        <AccentBar />
        <TitleBlock />

        <div className="absolute top-[46%] left-1/2 z-50 flex w-[min(90rem,88%)] -translate-x-1/2 items-center justify-between font-condensed text-[0.75rem] tracking-[0.32em] text-[#6e6e6e] uppercase max-md:top-[48%] max-md:w-[92%] max-md:text-[0.58rem]">
          <span>{site.name}</span>
          <span>{site.role}</span>
        </div>
      </div>
    </section>
  )
}
