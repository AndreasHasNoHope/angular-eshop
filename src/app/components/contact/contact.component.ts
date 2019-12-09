import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public cData: any = {};

  public center = {
    lat: 41.3,
    lng: 24.9
  };

  public mapZoom: number = 12;

  public stores = [
    {
      title: "Shop 1",
      coordinates: {
        lat: "42.6",
        lng: "23.9"
      }
    }
  ];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {


    this.http.get("https://simple-api.develobird.gr/contact")
      .subscribe(response => {
        this.cData= response;
      });
  }

}
