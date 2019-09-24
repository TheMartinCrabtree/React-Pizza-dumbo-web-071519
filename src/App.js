import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
	state={
		pizzaList: [],
		newPizza: {
			pizzaID: "",
			topping: "",
			size: "",
			isVeg: false
		}

	}

	updatePizza = (event) =>{
		event.preventDefault();
		console.log(event.target)
		this.setState({ newPizza: {
			pizzaID: "",
			topping: event.target.querySelector("#pizza-topping").value,
			size: event.target.querySelector("#pizza-size").value,
			isVeg: false
			}
		},
		this.updatePizzaDatabase)
	}

	updatePizzaDatabase =()=>{
		fetch("http://localhost:3000/pizzas", {
			method: "POST",
			body: JSON.stringify({
				topping: this.state.newPizza.topping,
				size: this.state.newPizza.size,
				isVeg: this.state.newPizza.isVeg
			}),
			headers:{"Content-type": "application/json; charset=UTF-8"}
		})
		.then(response => response.json())
		.then(this.addNewPizzaToState)
	}

	addNewPizzaToState=(newPizzaObject)=>{
		console.log("new pizza", newPizzaObject)	
		return this.setState({pizzaList: [...this.state.pizzaList, newPizzaObject]})
	}


	componentDidMount(){
			fetch("http://localhost:3000/pizzas")
			.then(response => response.json())
			.then((pizzaData) => {
				console.log(pizzaData)
				return this.setState({pizzaList: pizzaData})} 
	)}


	render() {
		return (
		<Fragment>
			<Header/>
			<PizzaForm pizzasubmit ={this.updatePizza} />
			<PizzaList allPizzaData ={this.state.pizzaList}  />
		</Fragment>
		);
	}
}

export default App;
