import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list.pokemon.component';
import { DetailPokemonComponent } from './details-pokemon.component';

const pokemonsRoutes: Routes = [
	{
		path: 'pokemons',
		children: [
			{ path: 'list-all', component: ListPokemonComponent },
			{ path: 'pokemon/:id', component: DetailPokemonComponent },
			{ path : '',component:ListPokemonComponent}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(pokemonsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PokemonRoutingModule { }