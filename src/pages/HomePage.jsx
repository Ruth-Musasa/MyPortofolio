import { Hero } from '@/components/hero/Hero.jsx'
import { PendulumMenu } from '@/components/pendulum-menu/PendulumMenu.jsx'

export function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-paper">
      <Hero />
      <div className="h-10 w-full bg-paper" aria-hidden="true" />
      <PendulumMenu />
    </main>
  )
}
