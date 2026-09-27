import { Link, Outlet } from 'react-router-dom'

export function AppShell() {
  return (
    <div className="relative min-h-svh bg-paper text-ink">
      <Outlet />
    </div>
  )
}

export function PageFrame({ title, children }) {
  return (
    <main className="min-h-svh bg-paper px-8 py-10">
      <Link
        to="/"
        className="font-condensed text-sm tracking-[0.2em] uppercase text-muted"
      >
        ← Portfolio
      </Link>
      <h1 className="mt-10 font-display text-6xl tracking-wide uppercase">
        {title}
      </h1>
      {children}
    </main>
  )
}
