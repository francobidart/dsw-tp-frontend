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
import {ServerNotAvailableComponent} from './app/server-not-available/server-not-available.component';
import {SearchComponent} from './search/search.component';
import {DetallePedidoComponent} from './detalle-pedido/detalle-pedido.component';
import {ActivateAdminGuard} from "./guards/activate-admin.guard";
import {DashboardComponent} from './administrador/dashboard/dashboard.component';
import {NoautorizadoComponent} from './errors/noautorizado/noautorizado.component';
import {ResultadosComponent} from './resultados/resultados.component';
import {NavbarAdminComponent} from './administrador/navbar-admin/navbar-admin.component';
import {AdminPedidosComponent} from './administrador/admin-pedidos/admin-pedidos.component';
import {AdminPedidosDetalleComponent} from './administrador/admin-pedidos-detalle/admin-pedidos-detalle.component';
import { AdminProductosComponent } from './administrador/admin-productos/admin-productos.component';
import { AdminProductoDetalleComponent } from './administrador/admin-producto-detalle/admin-producto-detalle.component';
import { AdminProductoModalDetalleComponent } from './administrador/admin-producto-modal-detalle/admin-producto-modal-detalle.component';
import { AdminProductoNuevoComponent } from './administrador/admin-producto-nuevo/admin-producto-nuevo.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AdminCategoriaNuevaComponent } from './administrador/admin-categoria-nueva/admin-categoria-nueva.component';
import { AdminCategoriaEditarComponent } from './administrador/admin-categoria-editar/admin-categoria-editar.component';
import { AdminCategoriaComponent } from './administrador/admin-categoria/admin-categoria.component';
import { AdminCategoriaDetalleComponent } from './administrador/admin-categoria-detalle/admin-categoria-detalle.component';
import { AdminCategoriaConfirmarEliminacionComponent } from './administrador/admin-categoria-confirmar-eliminacion/admin-categoria-confirmar-eliminacion.component';
import { AdminUsuariosComponent } from './administrador/admin-usuarios/admin-usuarios.component';
import { AdminUsuariosNuevoComponent } from './administrador/admin-usuarios-nuevo/admin-usuarios-nuevo.component';
import { AdminUsuariosEditarComponent } from './administrador/admin-usuarios-editar/admin-usuarios-editar.component';
import { AdminUsuariosCambiarClaveComponent } from './administrador/admin-usuarios-cambiar-clave/admin-usuarios-cambiar-clave.component';

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
    CategoriaComponent,
    ServerNotAvailableComponent,
    DetallePedidoComponent,
    SearchComponent,
    DashboardComponent,
    NoautorizadoComponent,
    ResultadosComponent,
    NavbarAdminComponent,
    AdminPedidosComponent,
    AdminPedidosDetalleComponent,
    AdminProductosComponent,
    AdminProductoDetalleComponent,
    AdminProductoModalDetalleComponent,
    AdminProductoNuevoComponent,
    RegistrarseComponent,
    AdminCategoriaNuevaComponent,
    AdminCategoriaEditarComponent,
    AdminCategoriaComponent,
    AdminCategoriaDetalleComponent,
    AdminCategoriaConfirmarEliminacionComponent,
    AdminUsuariosComponent,
    AdminUsuariosNuevoComponent,
    AdminUsuariosEditarComponent,
    AdminUsuariosCambiarClaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastsContainer,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'nosotros', component: AboutUsComponent},
      {path: 'server-unavailable', component: ServerNotAvailableComponent},
      {path: 'pedidos/:id', component: DetallePedidoComponent},
      {path: 'producto/:id', component: ProductoComponent},
      {path: 'categoria/:id', component: CategoriaComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'login', component: LoginComponent},
      {path: 'checkout', component: CheckoutResumeComponent},
      {path: 'micuenta', component: MicuentaComponent},
      {path: 'checkout', component: CheckoutResumeComponent},
      {path: 'registrarse', component: RegistrarseComponent},
      // Path para modulo administrador
      {path: 'administrador', component: DashboardComponent, canActivate: [ActivateAdminGuard]},
      {path: 'administrador/productos', component: AdminProductosComponent, canActivate: [ActivateAdminGuard]},
      {path: 'administrador/productos/:id', component: AdminProductoDetalleComponent, canActivate: [ActivateAdminGuard]},
      {path: 'administrador/pedidos', component: AdminPedidosComponent, canActivate: [ActivateAdminGuard]},
      {path: 'administrador/pedidos/:id', component: AdminPedidosDetalleComponent, canActivate: [ActivateAdminGuard]},
      {path: 'administrador/categorias', component: AdminCategoriaComponent, canActivate: [ActivateAdminGuard]},
      {path: 'administrador/categorias/:id', component: AdminCategoriaDetalleComponent, canActivate: [ActivateAdminGuard]},
      {path: 'administrador/usuarios', component: AdminUsuariosComponent, canActivate: [ActivateAdminGuard]},
      {path: 'no-autorizado', component: NoautorizadoComponent},
      {path: 'resultados', component: ResultadosComponent}
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
