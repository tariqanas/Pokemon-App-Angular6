import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound.component';
// routes
const appRoutes: Routes = [

	{path :'',redirectTo:'/pokemons',pathMatch:'full'},
	{path :'**',component:PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }