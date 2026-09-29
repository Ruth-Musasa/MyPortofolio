import { PendulumCard } from '@/components/pendulum-menu/PendulumCard.jsx'
import { navigation } from '@/data/site.js'
import { usePendulum } from '@/hooks/usePendulum.js'

export function PendulumMenu() {
  const { rootRef, arrowAngle, activeLabel } = usePendulum()

  return (
    <nav
      ref={rootRef}
      aria-label="Menu principal"
      className="relative z-40 w-screen max-w-none h-[min(70vh,48vw+17rem)]"
    >
      <div className="fan-origin">
        <svg className="me-ring" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <path
              id="me-circle"
              d="M100,100 m-72,0 a72,72 0 1,1 144,0 "
            />
          </defs>
          <text>
            <textPath href="#me-circle">
              PORTFOLIO · PORTFOLIO · PORTFOLIO · PORTFOLIO ·
            </textPath>
          </text>
        </svg>

        <div className="fan-hub">
          {navigation.map((item, index) => (
            <PendulumCard key={`${item.id}-${index}`} item={item} />
          ))}
        </div>

        <div className="me-core">
          <span className="me-arrow" style={{ '--me-arrow': `${arrowAngle}deg` }}>
            ▲
          </span>
          <span className="mt-0.5 font-condensed text-[10px] tracking-[0.35em] text-neutral-500 uppercase">
            {activeLabel}
          </span>
        </div>
      </div>
    </nav>
  )
}
