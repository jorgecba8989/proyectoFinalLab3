import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicDescripcionComponent } from './comic-descripcion/comic-descripcion.component';
import { ComicsComponent } from './comics/comics.component';
import { MisFavoritosComponent } from './mis-favoritos/mis-favoritos.component';
import { SeriesComponent } from './series/series.component';


const routes: Routes = [

  {path:'favoritos',component:MisFavoritosComponent},
  {path:'comics',component:ComicsComponent},
  {path:'series',component:SeriesComponent},
  {path: 'ver/:id', component:ComicDescripcionComponent},
  {path: 'ver/:favorito/:id', component:ComicDescripcionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
