    import React from 'react'

    const Pokemons = ({ pokemons, currentPage, nextPage, previousPage }) => {
	//abaixo todo o código da visualização da página. eu dividi por 10 o peso e altura pq li que a API multiplica os valores originais por 10
	//bootstrap foi utilizado como framework CSS

	const actualIndex = (currentPage * 20); //serve para dizer qual o índice do primeiro elemento da página atual   
	return (
        <div>
          <center><h1>Pokemon List</h1></center>
	  <div>
		<button onClick={previousPage}>Previous Page</button>
	          <button onClick={nextPage}>Next Page</button>	  
	  </div>
          {pokemons.slice(actualIndex, actualIndex+20).map((pokemon,pokemon_key) => (
            <div class="card">
              <div class="card-body row">
		<div class="col-sm-1">
			<img src={pokemon.sprites.front_default} />		
		</div>
		<div class="col-sm-9">
		        <h6 class="card-title">ID: {pokemon.id}</h6>
			<h5 class="card-title">Name: {pokemon.name}</h5>
		        <h6 class="card-subtitle mb-2 text-muted">Weight: {pokemon.weight/10}</h6>
		        <h6 class="card-subtitle mb-2 text-muted">Height: {pokemon.height/10}</h6>
			
			<button type="button" class="btn btn-info" data-toggle="modal" data-target={"#modal"+pokemon.id}>More informations</button>

			<div class="modal fade" id={"modal"+pokemon.id} role="dialog">
			    <div class="modal-dialog modal-lg">
			      <div class="modal-content">
				<div class="modal-header">
				  <button type="button" class="close" data-dismiss="modal">&times;</button>
				  <h4 class="modal-title">All informations about the selected Pokemon</h4>
				</div>
				<div class="modal-body">
				  <p><strong>ID</strong>: {pokemon.id}</p>
				  <p><strong>Name</strong>: {pokemon.name}</p>
				  <p><strong>Weight</strong>: {pokemon.weight}</p>
				  <p><strong>Height</strong>: {pokemon.height}</p>
				  <span><strong>Abilities</strong>: </span>
				  {pokemon.moves.map((item) =>
				    <span>{item.move.name} - </span>
				  )}

				</div>
				<div class="modal-footer">
				  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			      </div>
			    </div>
			</div>

		</div>
		
                
              </div>
            </div>

	
		
          ))}
	</div>
      )
    };

    export default Pokemons
