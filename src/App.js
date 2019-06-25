import React, { Component } from 'react';
import Pokemons from './components/pokemons';


class App extends Component {

	state = {
        	pokemons: [], //criando um array do tipo state para armazenamento dos pokemons
		currentPage: 0 //inicializando paginação
      	}

	HTTPRequestPokemon(pokemonInitial, pokemonLimit){
		let pokemonList = [];

		for (let i=pokemonInitial; i<pokemonLimit; i++){
			fetch('https://pokeapi.co/api/v2/pokemon/'+i) //consumo das APIs REST de cada pokemon
			.then(res => res.json())
        		.then((data) => {
				var newPokemon = this.state.pokemons;
				newPokemon.push(data);				
				this.setState({ pokemons: newPokemon }); //a cada elemento do JSON eu vou colocando em um array no state
        		})
        		.catch(console.log) //em caso de erro...		
		}
		
		const sortedArray = this.state.pokemons.sort((a, b) => (a.id  > b.id) ? 1 : -1); //ordenando array por id
		this.setState({ pokemons: sortedArray }); //setando array ordenado
	}

	componentDidMount() {
		this.HTTPRequestPokemon(0, 964); //964 é a quantidade total de pokemons presentes na API
        }
	
	previousPage = () => {
	  	if (this.state.currentPage !== 0){
	    		this.setState({currentPage: this.state.currentPage-1}) //paginação a esquerda
		}	
	}

	nextPage = () => {
	  	this.setState({currentPage: this.state.currentPage+1}) //paginação a direita
	}


  	render() {
		return (
		  <Pokemons pokemons={this.state.pokemons} currentPage = {this.state.currentPage} nextPage={this.nextPage} previousPage={this.previousPage} /> 
			//renderizando o componente
		) //pegando todo o código do container de pokemons e colocando como saída do renderizador
        }
}

export default App;
