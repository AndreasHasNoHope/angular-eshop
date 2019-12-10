import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public home: any = {};

  constructor(
    private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://simple-api.develobird.gr/home')
      .subscribe(response => {
        console.log(response);
        this.home = response;
      });


  }

}
