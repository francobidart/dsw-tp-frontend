import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {Route, RouterModule} from '@angular/router';


const routes: Route[] = [
  { path: "", component: HomeComponent },
  { path: "producto", component: ProductoComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HomeComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(routes),FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent}
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
