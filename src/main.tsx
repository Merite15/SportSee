import { Router } from './route';

import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style.css';

const domContainer = document.getElementById('root') as HTMLElement

createRoot(domContainer).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)