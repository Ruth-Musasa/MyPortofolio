import { useState } from 'react'
import { PendulumCard } from '@/components/pendulum-menu/PendulumCard.jsx'
import { navigation } from '@/data/site.js'
import { usePendulum } from '@/hooks/usePendulum.js'

export function PendulumMenu() {
  const { rootRef, fanRef } = usePendulum()
  const [active, setActive] = useState(null)

  return (
    <nav
      ref={rootRef}
      aria-label="Menu principal"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-[48vh]"
    >
      <div
        ref={fanRef}
        className="pointer-events-auto relative mx-auto h-full w-full max-w-5xl origin-[50%_120%]"
      >
        {navigation.map((item) => (
          <PendulumCard key={item.id} item={item} onHover={setActive} />
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-1">
        <span className="block h-0 w-0 border-x-[6px] border-b-[7px] border-x-transparent border-b-ink" />
        <span className="font-condensed text-[0.7rem] tracking-[0.35em] uppercase">
          {active ?? 'Me'}
        </span>
      </div>
    </nav>
  )
}
