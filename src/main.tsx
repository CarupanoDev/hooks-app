// eslint-disable-next-line no-use-before-define
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import { HookApp } from "./HookApp"
// import { CounterApp } from "./components/01-useState/CounterApp"
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook"
// import { SimpleForm } from "./hooks/02-useEffect/SimpleForm"
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook"
// import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks"
import { FocusScreen } from "./components/04-useRef/FocusScreen"

ReactDOM.render(
  <React.StrictMode>
    <FocusScreen/>
  </React.StrictMode>,
  document.getElementById('root')
)
