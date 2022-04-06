import '../02-useEffect/effects.css'
import { useCounter } from "../../hooks/useCounter"
import { useMemo, useState } from "react"
import { heavyProcess } from "../../helpers/heavyProcess"

export const MemoHook = () => {

  const {state, increment} = useCounter(5000)

  const [show, setShow] = useState(true)



  const memoHeavyProcess = useMemo(() => heavyProcess(state), [state])

  return(
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{state}</small> </h3>
      <hr/>

      <p>{memoHeavyProcess}</p>


      <button
        className="btn btn-primary"
        onClick={increment}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show)
        }}
      >
        Show/Hide {JSON.stringify( show )}
      </button>
    </div>
  )
}
