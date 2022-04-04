import { useEffect } from "react"

export const Message = () => {

  useEffect(() => {
    console.log('Component mounted')

    return () => {
      console.log('Component unmounted')
    }
  })

  return(
    <div>
      <h3>You are cool!</h3>
    </div>
  )
}
