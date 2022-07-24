import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { ApiMarvelService } from '../services/api-marvel.service';

@Component({
  selector: 'app-mis-favoritos',
  templateUrl: './mis-favoritos.component.html',
  styleUrls: ['./mis-favoritos.component.scss']
})
export class MisFavoritosComponent implements OnInit {

  comicBuscado: any=[];
  characterName: string = '';
  showSearchResult:boolean= false;
  searchedCharacter:any=[];
  formularioBusqueda!: FormGroup;
  favoritos: any[] = new Array<any>();


  constructor(private service:ApiMarvelService,
    private db: AngularFirestore
              // public fb:FormBuilder,
              ) { }

  ngOnInit(): void {
    this.favoritos.length = 0;
    this.db.collection('comics').get().subscribe((resultado)=>{

      for(let item of resultado.docs){
          console.log(item.id) 
          
          let favoritoBD: any  = item.data() ;
          favoritoBD.id = item.id;
          this.favoritos.push(favoritoBD)
      }
    })
  }



  buscar(event : any){
    this.favoritos.forEach((f)=>{
      if(f.titulo.toLowerCase().includes(event.toLowerCase()))
      {
        this.characterName = f.titulo;
        let obtenerIdComic = f.idComic
        this.service.comicSeleccionado(obtenerIdComic).subscribe((result)=>{
          if(result.data.count>0)
          {
            this.showSearchResult = true;
            this.searchedCharacter = result.data.results;
          }
        })
        }
      // else{
       
      // }
    })

  }

}
