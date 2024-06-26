import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StateProvider } from './utils/StateProvider.tsx'
import reducer, {initialState} from './utils/reducer.js'
import Login from './components/Login.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StateProvider  initialState={initialState} reducer={reducer}>
      <Login />
    </StateProvider>
  </React.StrictMode>,
)
