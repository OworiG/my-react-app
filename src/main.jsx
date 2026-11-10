import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import NaviBar from './nav.jsx'
import ImagePage from './image.jsx'
import Button from './button.jsx'
import Student from './propps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App />
    <Button/>

    <Student name="Owori Grace" age={35} iStudent={true}/>
    <Student name="Anthony Mukimbi" age={45} iStudent={false}/>
    <Student name="Mary Jinja" age={40} iStudent={false}/>
    <Student name="John Africa" age={18} iStudent={true}/>

    </StrictMode>,
)
