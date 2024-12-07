import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/container/App.jsx'
import Header  from '../src/pages/header/header.jsx'
import Benefits from '../src/pages/benefits/benefits.jsx'
import Called from '../src/pages/called/called.jsx'
import Footer from '../src/pages/footer/footer.jsx'
import Address from '../src/pages/address/adress.jsx'
import Rating from '../src/pages/rating/rating.jsx'
import Service from '../src/pages/services/services.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
    <Benefits />
    <Called/>
    <Service />
    <Rating />
    <Address />
    <Footer />
  </StrictMode>,
)
