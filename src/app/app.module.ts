import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductoComponent} from './producto/producto.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_BASE_HREF, registerLocaleData} from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import {ProductoDetalleComponent} from './producto-detalle/producto-detalle.component';
import {Product} from "./models/product";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {CheckoutResumeComponent} from './checkout-resume/checkout-resume.component';
import {MicuentaComponent} from './micuenta/micuenta.component';
import {CategoriaComponent} from './categoria/categoria.component';

registerLocaleData(localeEsAr, 'es-AR');
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastsContainer} from "./services/toast/toast-container.component";
import {InterceptorGeneralInterceptor} from "./interceptor-general.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    ProductoDetalleComponent,
    LoginComponent,
    CheckoutResumeComponent,
    UsuariosComponent,
    MicuentaComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastsContainer,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'nosotros', component: AboutUsComponent},
      {path: 'producto/:id', component: ProductoComponent},
      {path: 'categoria/:id', component: CategoriaComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'login', component: LoginComponent},
      {path: 'checkout', component: CheckoutResumeComponent},
      {path: 'micuenta', component: MicuentaComponent},
      {path: 'checkout', component: CheckoutResumeComponent},
    ]),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastsContainer,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LOCALE_ID, useValue: 'es-AR'},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorGeneralInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
