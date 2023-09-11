import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BigCats from './BigCats.jsx'
import Emoji from './emoji.jsx'
import Calculator from './Calculator.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    <Emoji></Emoji>
    <BigCats></BigCats>
    <Calculator></Calculator>
  </React.StrictMode>,
)
