import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Snowfall from 'react-snowfall'
import { BeachScene } from './components'
import { FEATURE_FLAGS } from './constants/featureFlags'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {FEATURE_FLAGS.WINTER_MODE && <Snowfall />}
    {FEATURE_FLAGS.SUMMER_MODE && <BeachScene />}
    <App />
  </StrictMode>,
)
