import { Hero } from '@/components/hero/Hero.jsx'
import { PendulumMenu } from '@/components/pendulum-menu/PendulumMenu.jsx'

export function HomePage() {
  return (
    <main className="relative h-svh overflow-hidden">
      <Hero />
      <PendulumMenu />
    </main>
  )
}
