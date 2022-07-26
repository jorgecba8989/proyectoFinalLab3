import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Favorito } from '../models/favorito';
import { ApiMarvelService } from '../services/api-marvel.service';

@Component({
  selector: 'app-mis-favoritos',
  templateUrl: './mis-favoritos.component.html',
  styleUrls: ['./mis-favoritos.component.scss']
})
export class MisFavoritosComponent implements OnInit {

  comicBuscado: any=[];
  favoritos: Favorito[] = new Array<Favorito>();
  favoritoEncontrado:any=[];


  constructor(private service:ApiMarvelService,
              private db: AngularFirestore
              ) { }

  ngOnInit(): void {
    this.favoritos.length = 0;
    this.db.collection('misFavoritos').get().subscribe((resultado)=>{

      for(let item of resultado.docs){
          console.log(item.id) 
          
          let favoritoBD: any  = item.data() ;
          favoritoBD.id = item.id;
          favoritoBD.visible = false
          this.favoritos.push(favoritoBD)
      }
    })
  }



  buscar(item : any){
    this.favoritos.forEach((f)=>{
      if(f.titulo.toLowerCase().includes(item.toLowerCase()))
      {
        f.visible = true;

        }
      else{
        f.visible  = false;
      }
    })

  }

  eliminar(item:any){
    this.db.collection("misFavoritos").doc(item.id).delete();
    document.location.href = './favoritos';
  }

}
