import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppProvider} from "./state/AppContext.tsx";
import Router from "./components/Router/Router.tsx";
import './scss/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <Router/>
    </AppProvider>
  </StrictMode>,
)
