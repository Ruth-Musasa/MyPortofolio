import { useEffect, useRef, useState } from 'react'

export function usePendulum() {
  const rootRef = useRef(null)
  const [arrowAngle, setArrowAngle] = useState(0)
  const [activeLabel, setActiveLabel] = useState('ME')

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const onMove = (event) => {
      const rect = root.getBoundingClientRect()
      const nx = (event.clientX - rect.left) / rect.width - 0.5
      document.documentElement.style.setProperty('--fan-mouse', `${nx * 18}deg`)

      const originX = rect.left + rect.width / 2
      const originY = rect.bottom - 40
      const pointerAngle =
        (Math.atan2(event.clientX - originX, originY - event.clientY) * 180) /
        Math.PI
      setArrowAngle(Math.max(-55, Math.min(55, pointerAngle)))

      const cards = root.querySelectorAll('[data-pendulum-card]')
      let nearestLabel = 'ME'
      let nearest = Infinity
      cards.forEach((card) => {
        const box = card.getBoundingClientRect()
        const cx = box.left + box.width / 2
        const cy = box.top + box.height / 2
        const dist = (cx - event.clientX) ** 2 + (cy - event.clientY) ** 2
        if (dist < nearest) {
          nearest = dist
          nearestLabel = card.dataset.label ?? 'ME'
        }
      })
      setActiveLabel(nearestLabel)
    }

    const onLeave = () => {
      document.documentElement.style.setProperty('--fan-mouse', '0deg')
      setArrowAngle(0)
      setActiveLabel('ME')
    }

    root.addEventListener('pointermove', onMove)
    root.addEventListener('pointerleave', onLeave)

    return () => {
      root.removeEventListener('pointermove', onMove)
      root.removeEventListener('pointerleave', onLeave)
      document.documentElement.style.setProperty('--fan-mouse', '0deg')
    }
  }, [])

  return { rootRef, arrowAngle, activeLabel }
}
