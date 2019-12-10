import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductComponent } from './components/product/product.component';
import {WeatherComponent} from "./components/weather/weather.component";
import {AgmCoreModule} from "@agm/core";





const routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products/:productId",
    component: ProductComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "weather",
    component: WeatherComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WeatherComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_Z-2QrGLQVSzP6Kn9unYaE9GiamEn4uE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
