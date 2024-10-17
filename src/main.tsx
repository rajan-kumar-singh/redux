import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* <BrowserRouter> */}
    {/* <Provider store={store}> */}
      
    <App />
    {/* </Provider> */}
    {/* </BrowserRouter> */}
  </StrictMode>,
)