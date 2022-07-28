import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicDescripcionComponent } from './comic-descripcion/comic-descripcion.component';
import { ComicsComponent } from './comics/comics.component';
import { MisFavoritosComponent } from './mis-favoritos/mis-favoritos.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { SeriesComponent } from './series/series.component';


const routes: Routes = [
  
  {path: '' , redirectTo:'favoritos' , pathMatch:'full'},
  {path:'favoritos',component:MisFavoritosComponent},
  {path:'comics',component:ComicsComponent},
  {path:'series',component:SeriesComponent},
  {path: 'ver/:id', component:ComicDescripcionComponent},
  {path: 'ver/:favorito/:id', component:ComicDescripcionComponent},
  {path: 'personajes',component:PersonajesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
