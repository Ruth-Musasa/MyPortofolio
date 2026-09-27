import { site } from '@/data/site.js'

export function TitleBlock() {
  return (
    <div className="relative z-10 flex items-center justify-center px-4">
      <span
        aria-hidden="true"
        className="title-outline pointer-events-none absolute font-display text-[clamp(3.4rem,16vw,11.2rem)] leading-none tracking-[0.02em] select-none max-md:-translate-x-1 max-md:-translate-y-4 -translate-x-4 -translate-y-10"
      >
        {site.title}
      </span>
      <h1 className="title-fill relative font-display text-[clamp(3.4rem,16vw,11.2rem)] leading-none tracking-[0.02em] select-none">
        {site.title}
      </h1>
    </div>
  )
}
