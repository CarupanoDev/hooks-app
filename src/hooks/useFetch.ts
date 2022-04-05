import { useEffect, useRef, useState } from "react"
import axios from "axios"

export const useFetch = (url: string) => {

  const isMounted = useRef(true)

  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {

    setState({ data: null, loading: true, error: null })


    axios(url).then((resp => resp.data))
      .then(data => {
        setTimeout(() => {

          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data
            })
          } else{
            console.log('setState was not called')
          }


        }, 4000)

      })

  }, [url])

  return state
}
