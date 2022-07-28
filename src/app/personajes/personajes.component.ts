import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from '../services/api-marvel.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  allCharacters:any=[] = new Array<any>();
  comics:any=[];
  series:any=[];
  showComicsDiv:boolean = false;
  showSeriesDiv:boolean = false;
  characterName:string = "";
  showSearchResult:boolean = false;
  searchedCharacter:any=[];

  constructor(private service:ApiMarvelService) { }

  ngOnInit(): void {
    this.showComicsDiv = false;
    this.showSeriesDiv = false;
    this.showSearchResult = false;
    this.service.allCharacters().subscribe((result)=>{
      this.allCharacters = result.data.results;
    })
  }


  findCharacter(item:any)
{
   this.characterName = item.target.value;
   this.service.getCharacterByName(this.characterName).subscribe((result)=>{
     if(result.data.count>0)
     {
       this.showSearchResult = true;
       this.searchedCharacter = result.data.results;
     }
     else{
       this.ngOnInit();
     }
   })

}

}
