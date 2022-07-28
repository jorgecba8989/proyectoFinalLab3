import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from '../services/api-marvel.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  allCharacters:any=[];
  comics:any=[];
  series:any=[];
  showComicsDiv!:boolean;
  showSeriesDiv!:boolean;
  characterName!:string;
  showSearchResult!:boolean;
  searchedCharacter:any=[];

  constructor(private service:ApiMarvelService) { }



  ngOnInit(): void {

    this.showComicsDiv = false;
    this.showSeriesDiv = false;
    this.showSearchResult = false;
    this.service.allCharacters().subscribe((result)=>{
      console.log(result);
      this.allCharacters = result.data.results;
    })

  }

  findCharacter(event:any)
{
   this.characterName = event.target.value;
   console.log(this.characterName);
   this.service.getCharacterByName(this.characterName).subscribe((result)=>{
     console.log(result);
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

  fetchComicsByCharacter(characterId:string)
  {
    this.service.getComicsByCharacter(characterId).subscribe((result)=>{

      if(result.data.count>0)
      {
        this.comics = result.data.results;
        this.showComicsDiv = true;
      }
    })
  }





}
