import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://simple-api.develobird.gr/contact')
      .subscribe(response => {
        console.log(response);
        this.contact = response;
      });
  }

  public mapZoom: number = 15.7;
  public center = {
    lat: 40.635711,
    lng: 22.9420186

  };

}
