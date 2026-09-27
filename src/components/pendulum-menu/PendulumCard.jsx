import { Link } from 'react-router-dom'

function NebulaArt() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#05060c]">
      <div className="absolute inset-[-20%] rounded-full bg-[radial-gradient(circle_at_42%_48%,#3ad0ff_0%,#1a4cff_28%,#12083a_58%,#05060c_75%)] blur-md" />
      <div className="absolute top-[18%] left-[22%] h-24 w-24 rounded-full bg-[radial-gradient(circle,#8be9ff,#1c3dff_45%,transparent_70%)] opacity-90" />
    </div>
  )
}

function BrandArt() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-accent">
      <svg viewBox="0 0 120 120" className="h-[58%] w-[58%]" aria-hidden="true">
        <path
          d="M20 58c6-28 28-44 40-44 18 0 28 10 40 8 8-1 16 8 14 22-2 16 6 24 4 36-3 18-20 30-38 32-22 3-40-8-48-24-6-12-16-14-12-30z"
          fill="#111"
        />
        <ellipse cx="58" cy="62" rx="22" ry="16" fill="#ee4d2a" />
        <circle cx="58" cy="62" r="9" fill="#111" />
        <circle cx="61" cy="59" r="3" fill="#ee4d2a" />
      </svg>
    </div>
  )
}

function PortraitArt({ src, alt }) {
  return (
    <div className="relative h-full w-full bg-[#1a1a1a]">
      <img src={src} alt={alt} className="h-full w-full object-cover grayscale" />
    </div>
  )
}

function EditorialArt() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f4f4f4]">
      <img
        src="/images/car.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-80 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent" />
      <p className="absolute top-5 left-4 font-condensed text-[0.7rem] tracking-[0.2em] uppercase">
        Polestar
      </p>
      <p className="absolute right-3 bottom-4 font-display text-6xl leading-none">1:1</p>
      <span className="plus-mark top-8 right-6" />
    </div>
  )
}

function OrnamentArt() {
  return (
    <div className="relative h-full w-full bg-[#111]">
      <img
        src="/images/ornament.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover grayscale contrast-125"
      />
      <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-[14px] ring-black/80 [background:repeating-conic-gradient(from_0deg,#111_0deg_10deg,transparent_10deg_20deg)] mix-blend-multiply opacity-40" />
      <div className="pointer-events-none absolute inset-4 rounded-full border border-white/40" />
    </div>
  )
}

const art = {
  nebula: <NebulaArt />,
  brand: <BrandArt />,
  portrait: (
    <PortraitArt
        src="/images/portrait.jpg"
      alt="Portrait"
    />
  ),
  editorial: <EditorialArt />,
  ornament: <OrnamentArt />,
}

export function PendulumCard({ item, onHover }) {
  const { rest } = item

  return (
    <div
      className="absolute bottom-[6%] left-1/2 h-[min(46vh,380px)] w-[min(26vw,220px)] transition-[translate] duration-500 ease-[var(--ease-pendulum)] hover:-translate-y-3 max-md:bottom-[8%] max-md:h-[32vh] max-md:w-[30vw]"
      style={{
        transform: `translate(calc(-50% + ${rest.x}vw), ${rest.y}px) rotate(${rest.rotate}deg)`,
        zIndex: rest.z,
      }}
    >
      <Link
        to={item.href}
        data-pendulum-card
        aria-label={item.label}
        onMouseEnter={() => onHover?.(item.label)}
        onMouseLeave={() => onHover?.(null)}
        className="pendulum-card group relative block h-full w-full overflow-hidden rounded-[1.7rem] shadow-[0_18px_40px_rgba(0,0,0,0.22)] ring-1 ring-black/10 max-md:rounded-2xl"
      >
        {art[item.variant]}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 py-3 font-condensed text-xs tracking-[0.22em] text-white uppercase">
          {item.label}
        </span>
      </Link>
    </div>
  )
}
