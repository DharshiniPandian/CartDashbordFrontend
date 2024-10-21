import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
// import { MyTheme } from './Theme.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
 
)

{/* <ThemeProvider theme={MyTheme}>
    <App />
    </ThemeProvider> */}