import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_BASE_HREF, registerLocaleData} from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import {Product} from "./models/product";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosComponent } from './usuarios/usuarios.component';
registerLocaleData(localeEsAr, 'es-AR');

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    ProductoDetalleComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'nosotros', component: AboutUsComponent},
      {path: 'producto/:id', component: ProductoComponent},
      {path: 'usuarios', component: UsuariosComponent}
    ]),
    NgbModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, { provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
