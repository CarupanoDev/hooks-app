import {memo} from "react"

export const Small = memo(({value}) => {

  console.log("I'm calling myself again 😔")

  return(
    <small>{value}</small>
  )
}
)
