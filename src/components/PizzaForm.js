import React from "react"

const PizzaForm = (props) => {
  return(
    <form className="submit-pizza-form" onSubmit={props.pizzasubmit}>

      <div className="form-row">
        <div className="col-5">
            <input id="pizza-topping" type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                null
              }/>
        </div>
        <div className="col">
          <select id="pizza-size" value={null} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input id="veg-radio-button" className="form-check-input" type="radio" value="Vegetarian" checked={null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input id="not-veg-radio-button"  className="form-check-input" type="radio" value="Not Vegetarian" checked={null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" >Submit</button>
        </div>
      </div>

    </form>

  )
}

export default PizzaForm
