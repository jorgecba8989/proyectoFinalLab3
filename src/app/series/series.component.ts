import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from '../services/api-marvel.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(private service:ApiMarvelService) { }

  allSeries:any=[];

  ngOnInit(): void {
    this.service.allSeries().subscribe((result)=>{
      console.log(result);
      this.allSeries = result.data.results;
    })
  }

}
