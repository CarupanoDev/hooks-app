import "./layout.css"
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import { useLayoutEffect, useRef, useState } from "react"

export const Layout = () => {

  const {state, increment} = useCounter()

  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)

  const {quote} = !!data && data[0]

  const pTag = useRef()

  const [boxSize, setBoxsize] = useState({})

  useLayoutEffect(() => {
    setBoxsize(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>LayoutEffect</h1>

      <blockquote className="blockquote text-right">
        <p
          className="mb-0"
          ref={pTag}
        >{quote}</p>
      </blockquote>

      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button
        className="btn btn-primary"
        onClick={increment}
      >
        Next quote
      </button>
    </div>
  )
}
