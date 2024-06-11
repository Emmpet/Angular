import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Emmelies filmlist';
  arrproducts: any;

  constructor(private httpClient: HttpClient) {}
  ngOnInit(){

    this.httpClient.get("assets/Checkpoint2.json").subscribe(data => {
      console.log(data);
      this.arrproducts = data;
    })
    
  }
}
