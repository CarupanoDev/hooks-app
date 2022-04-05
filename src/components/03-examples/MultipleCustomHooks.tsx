import "../02-useEffect/effects.css"
import { useFetch } from "../../hooks/useFetch"
import { useCounter } from "../../hooks/useCounter"

export const MultipleCustomHooks = () => {

  const {state, increment} = useCounter()

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)

  const {author, quote} = !!data && data[0]


  return (
    <div>
      <h1>Breaking bad quotes</h1>

      {
        loading
        ?
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
        :
          (
            <blockquote className="blockquote text-right">
              <p className="mb-0">{quote}</p>
              <footer className="blockquote-footer">{author}</footer>
            </blockquote>
          )
      }

      <button
        className="btn btn-primary"
        onClick={increment}
      >
        Next quote
      </button>
    </div>
  )
}
