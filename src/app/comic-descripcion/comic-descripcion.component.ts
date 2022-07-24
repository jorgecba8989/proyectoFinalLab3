import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertaMensajesService } from '../services/alerta-mensajes.service';
import { ApiMarvelService } from '../services/api-marvel.service';

@Component({
  selector: 'app-comic-descripcion',
  templateUrl: './comic-descripcion.component.html',
  styleUrls: ['./comic-descripcion.component.scss']
})
export class ComicDescripcionComponent implements OnInit {

  id:number = 0
  comicSeleccionado: any=[]
  _creadores: any[] = new Array<any>();
  _nombreLibro : string = ''
  // _libro: any = []
  formulario!: FormGroup;
  _esFavorito : string = ''

  constructor( private activeRoute: ActivatedRoute,
    private service:ApiMarvelService, 
    private db: AngularFirestore, 
    private msj: AlertaMensajesService,
    private fb : FormBuilder,) { }

  ngOnInit(): void {
    
    this.initForm()

    this.id = this.activeRoute.snapshot.params.id;
    this._esFavorito = this.activeRoute.snapshot.params.favorito;


    this.service.comicSeleccionado(this.id).subscribe((result)=>{
      this.comicSeleccionado = result.data.results;
      console.log(this.comicSeleccionado)
      this._nombreLibro = this.comicSeleccionado[0].title

      for(let item of this.comicSeleccionado[0].creators.items){
        let creadoresNombres: any  = [] ;
        creadoresNombres.name = item.name;
        this._creadores.push(creadoresNombres)
      }

      this.formulario.setValue({
        titulo: this.comicSeleccionado[0].title,
        descripcion: this.comicSeleccionado[0].description,
        idComic: this.comicSeleccionado[0].id
      })

    })
  }

  guardar(){
    this.db.collection('comics').add(this.formulario.value).then((termino)=>{
      this.msj.mensajeCorrecto("Listo", "Lo agregaste a favoritos")
    })

  }

  initForm(){
    this.formulario = this.fb.group({
      titulo: [''],
      descripcion: [''],
      idComic: [''],
     

    })
  }

  regresar(){
    if(this._esFavorito) document.location.href = './favoritos';
    else{
      document.location.href = './comics';
    }
    
  }

}
