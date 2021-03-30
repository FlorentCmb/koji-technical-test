// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// Components
import App from './App'
import reportWebVitals from './reportWebVitals'
// Style
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.querySelector('#root')
)

reportWebVitals()
