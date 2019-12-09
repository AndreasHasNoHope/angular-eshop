import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: any = [];
  constructor(
    private http: HttpClient) { }


  ngOnInit() {


    this.http.get("https://simple-api.develobird.gr/home")
      .subscribe(response => {
        this.data= response;
      });
  }

}
