import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { gsap } from '@/lib/gsap.js'

export function usePendulum() {
  const rootRef = useRef(null)
  const fanRef = useRef(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray('[data-pendulum-card]')
      if (!cards.length) return

      const idle = cards.map((card, index) =>
        gsap.to(card, {
          rotate: `+=${index % 2 === 0 ? 2.4 : -2.4}`,
          duration: 2.6 + index * 0.18,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        }),
      )

      const onMove = (event) => {
        const fan = fanRef.current
        if (!fan) return
        const rect = fan.getBoundingClientRect()
        const nx = (event.clientX - rect.left) / rect.width - 0.5
        const ny = (event.clientY - rect.top) / rect.height - 0.5
        gsap.to(fan, {
          rotate: nx * 7,
          x: nx * 18,
          y: ny * 8,
          duration: 0.9,
          ease: 'power3.out',
          overwrite: 'auto',
        })
      }

      const onLeave = () => {
        gsap.to(fanRef.current, {
          rotate: 0,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: 'elastic.out(1, 0.65)',
        })
      }

      const root = rootRef.current
      root?.addEventListener('pointermove', onMove)
      root?.addEventListener('pointerleave', onLeave)

      return () => {
        idle.forEach((tween) => tween.kill())
        root?.removeEventListener('pointermove', onMove)
        root?.removeEventListener('pointerleave', onLeave)
      }
    },
    { scope: rootRef },
  )

  return { rootRef, fanRef }
}
