import { useEffect, useState } from "react"
import axios from "axios"

export const useFetch = (url: string) => {


  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {

    axios(url).then((resp => resp.data))
      .then(data => {
        setState({
          loading: false,
          error: null,
          data
        })
      })

  }, [url])

  return state
}
