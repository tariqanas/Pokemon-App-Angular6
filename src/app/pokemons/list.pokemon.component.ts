import { Component } from '@angular/core';
import {OnInit } from '@angular/core'
import { Pokemon } from './pokemon';
import {Router } from '@angular/router';
import { PokemonsService} from './pokemons.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './app/pokemons/list.pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{
  
 constructor(private router:Router,private pokserv:PokemonsService){

 }
  private pokemons : Pokemon[];
  private title : String = " Pokimonathi";

  ngOnInit(): void {
   this.pokemons = this.pokserv.getPokemons();
  } 

  selectPokemon(pokemon:Pokemon){
    let link = ['/pokemons/pokemon',pokemon.id];
    this.router.navigate(link);
  }
  

}