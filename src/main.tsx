// eslint-disable-next-line no-use-before-define
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import { HookApp } from "./HookApp"
// import { CounterApp } from "./components/01-useState/CounterApp"
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook"
import { SimpleForm } from "./hooks/02-useEffect/SimpleForm"

ReactDOM.render(
  <React.StrictMode>
    <SimpleForm/>
  </React.StrictMode>,
  document.getElementById('root')
)
