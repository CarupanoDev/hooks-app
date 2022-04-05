import "../02-useEffect/effects.css"
import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef= useRef()

  const handleClick = () =>{
    inputRef.current.select()
    console.log(inputRef)
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input
        ref={inputRef}
        className="form-control"
        placeholder="Your name"
        type="text"
      />

      <button
        className="btn btn-outline-primary mt-5"
        onClick={handleClick}
      >
        Focus
      </button>
    </div>
  )
}
