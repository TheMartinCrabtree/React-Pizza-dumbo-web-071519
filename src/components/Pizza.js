import React from "react"



const Pizza = (props) => {
  
  
  return(
    <tr>
      <td>{props.pizzadata.topping}</td>
      <td>{props.pizzadata.size}</td>
      <td>{props.pizzadata.vegetarian}</td>
      <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
