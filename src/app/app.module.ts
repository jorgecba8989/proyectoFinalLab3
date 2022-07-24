import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComicsComponent } from './comics/comics.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicDescripcionComponent } from './comic-descripcion/comic-descripcion.component';
import { SeriesComponent } from './series/series.component';
import { MisFavoritosComponent } from './mis-favoritos/mis-favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ComicsComponent,
    ComicDescripcionComponent,
    SeriesComponent,
    MisFavoritosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
