import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.scss"
import {BrowserRouter} from "react-router-dom"


// ************************PLEASE RUN THE APPLICATION USING (NPM RUN DEV) ITS MADE USING VITE NOT CREATE-REACT-APP)***************************************

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
