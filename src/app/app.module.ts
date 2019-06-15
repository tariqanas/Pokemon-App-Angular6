import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.modules';
import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { PokemonsModule } from './pokemons/pokemons.module';

@NgModule({
  imports:[
  BrowserModule,
  PokemonsModule,
  AppRoutingModule

],

  declarations: [ 
  AppComponent,
  PageNotFoundComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { } 