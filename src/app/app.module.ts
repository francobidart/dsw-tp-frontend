import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ProductoComponent} from './producto/producto.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component'
import {APP_BASE_HREF, registerLocaleData} from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import {ProductoDetalleComponent} from './producto-detalle/producto-detalle.component';
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
import {DashboardComponent} from './administrador/dashboard/dashboard.component';
import {NoautorizadoComponent} from './errors/noautorizado/noautorizado.component';
import {ResultadosComponent} from './resultados/resultados.component';
import {RegistrarseComponent} from './registrarse/registrarse.component';
import {AppAdminModule} from "./app-admin.module";

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
        RegistrarseComponent
    ],
    imports: [
        BrowserModule,
        ToastsContainer,
        HttpClientModule,
        AppAdminModule,
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
        ], {useHash: true}),
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
