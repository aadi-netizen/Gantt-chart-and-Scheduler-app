import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


// Registering Syncfusion<sup style="font-size:70%">&reg;</sup> license key
// registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhLYVJxWmFZfVtgcF9HYVZQQ2YuP1ZhSXxWdkdiWX9acXVUQWhVUkU=');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
