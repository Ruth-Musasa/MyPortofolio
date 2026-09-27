import { site } from '@/data/site.js'

export function TitleBlock() {
  return (
    <div className="pointer-events-none absolute top-[22%] left-1/2 z-10 w-[min(92%,72rem)] -translate-x-1/2 -translate-y-1/2 text-center">
      <span
        aria-hidden="true"
        className="hero-title title-outline absolute inset-x-0 uppercase select-none -translate-x-5 -translate-y-9 max-md:-translate-x-2 max-md:-translate-y-4"
      >
        {site.title}
      </span>
      <h1 className="hero-title title-fill relative uppercase select-none ">
        {site.title}
      </h1>
    </div>
  )
}
