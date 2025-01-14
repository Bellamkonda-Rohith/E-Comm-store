
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { store } from './Store/Store.jsx'

import { Provider } from 'react-redux'
import { StrictMode } from 'react'
createRoot(document.getElementById('root')).render(
   
        <StrictMode>
  <Provider store={store}>
  
    <App />
   
               
    </Provider>
    </StrictMode>
       
   
)