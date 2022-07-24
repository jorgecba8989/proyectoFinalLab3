import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from '../services/api-marvel.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  allComics:any=[];
  comicSeleccionado: any=[]

  constructor(private service:ApiMarvelService) { }

  ngOnInit(): void {


  this.service.allComics().subscribe((result)=>{
    this.allComics = result.data.results;
    })
  }

  verMas(n : number){
    this.service.comicSeleccionado(n).subscribe((result)=>{
      this.comicSeleccionado = result.data.results;
      console.log(this.comicSeleccionado)
    })
  }

}
