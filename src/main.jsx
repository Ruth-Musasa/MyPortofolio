import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell.jsx'
import { AproposPage } from '@/pages/AproposPage.jsx'
import { ContactPage } from '@/pages/ContactPage.jsx'
import { HomePage } from '@/pages/HomePage.jsx'
import { ProjectsPage } from '@/pages/ProjectsPage.jsx'
import { ServicesPage } from '@/pages/ServicesPage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'mes-services', element: <ServicesPage /> },
      { path: 'mes-projets', element: <ProjectsPage /> },
      { path: 'contacts', element: <ContactPage /> },
      { path: 'apropos-de-moi', element: <AproposPage /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
