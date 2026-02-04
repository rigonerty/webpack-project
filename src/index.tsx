import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@src/app/providers/ThemeProvider'
import { App } from '@src/app/App'
import './shared/config/i18n/i18n'


createRoot(document.getElementById('root')!).render(
<BrowserRouter>
  <ThemeProvider>
    <App/>
  </ThemeProvider>
</BrowserRouter>
)
