import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
//import { PokemonsService } from './pokemons.service';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './app/pokemons/details-pokemon.component.html',
	
})
export class DetailPokemonComponent implements OnInit {

    pokemon: Pokemon = null;
  

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokserv : PokemonsService
		) { }

	ngOnInit(): void {
		
		
        let id = +this.route.snapshot.params['id'];
		this.pokemon =this.pokserv.getPokemon(id);
		if(this.pokemon == null){
			console.log("nuuul");
			this.router.navigate(['/error'])
		}
	}

	goBack(): void {
		this.router.navigate(['/pokemons/list-all']);
	}

	delete(pokemon: Pokemon): void {
		
	}

}