import { Link } from 'react-router-dom'

function NebulaArt() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <div className="absolute inset-[-30%] rounded-full bg-[radial-gradient(circle_at_48%_52%,#7af0ff_0%,#2b6bff_22%,#1a1cff_40%,#050014_68%)] blur-[2px]" />
      <div className="absolute top-[28%] left-[22%] h-28 w-28 rounded-full bg-[radial-gradient(circle,#d9fbff,transparent_62%)] opacity-70" />
    </div>
  )
}

function BrandArt() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-accent">
      <svg viewBox="0 0 120 120" className="h-[62%] w-[62%]" aria-hidden="true">
        <path
          d="M18 62c8-32 32-50 46-50 16 0 24 12 38 10 10-1 18 10 16 24-2 16 8 22 6 34-3 20-22 32-40 34-24 3-44-10-52-28-6-14-18-16-14-24z"
          fill="#111"
        />
        <ellipse cx="58" cy="64" rx="24" ry="17" fill="#e85c3c" />
        <circle cx="58" cy="64" r="10" fill="#111" />
        <circle cx="62" cy="60" r="3.2" fill="#e85c3c" />
      </svg>
    </div>
  )
}

function PortraitArt() {
  return (
    <div className="relative h-full w-full bg-[#d8d8d8]">
      <img
        src="/images/portrait.jpg"
        alt=""
        className="h-full w-full object-cover grayscale"
      />
      <p className="absolute top-4 right-3 text-right font-condensed text-[10px] leading-3 tracking-[0.18em] text-white uppercase">
        DVS
        <br />
        X2X4
      </p>
    </div>
  )
}

function EditorialArt() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f3f3f3]">
      <img
        src="/images/car.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/20" />
      <p className="absolute top-5 left-4 font-condensed text-[11px] tracking-[0.16em] uppercase">
        Polestar
      </p>
      <span className="plus-mark top-6 right-5" />
      <p className="absolute right-3 bottom-8 font-display text-[3.4rem] leading-none">
        1:1
      </p>
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
      <div className="pointer-events-none absolute inset-[-10%] rounded-full [background:repeating-conic-gradient(from_0deg,#fff_0deg_6deg,transparent_6deg_14deg)] opacity-35 mix-blend-screen" />
      <p className="absolute bottom-4 left-3 font-condensed text-[11px] tracking-[0.28em] text-white uppercase">
        Casino
        <br />
        RC
      </p>
    </div>
  )
}

const art = {
  nebula: <NebulaArt />,
  brand: <BrandArt />,
  portrait: <PortraitArt />,
  editorial: <EditorialArt />,
  ornament: <OrnamentArt />,
}

export function PendulumCard({ item }) {
  const { fan } = item

  return (
    <div
      className="card-wrapper"
      style={{
        '--angle': `${fan.angle}deg`,
        '--shift-x': fan.x,
        '--shift-y': fan.y,
        '--card-w': fan.w,
        '--card-h': fan.h,
        zIndex: fan.z,
      }}
    >
      <Link
        to={item.href}
        data-pendulum-card
        data-label={item.label}
        aria-label={item.label}
        className="card"
      >
        {art[item.variant]}
      </Link>
    </div>
  )
}
