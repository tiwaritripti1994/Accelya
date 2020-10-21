import { Component, OnInit } from '@angular/core';
import { SearchgifService } from './../searchgif.service'

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.css']
})
export class GiphySearchComponent implements OnInit {
  public searchVal:any;
  public data:any = [];
  constructor( private searchgifService:SearchgifService) { }
  ngOnInit() {
  }
  getGif(){
    console.log("HI",this.searchVal);
    let promise = new Promise((res,rej) => {
      this.searchgifService.getGif(this.searchVal).subscribe(
      data => {
       var res = data;
       //console.log(res.data);
        this.data = res.data;
        // console.log(this.data);
      })
    })
  }
}
