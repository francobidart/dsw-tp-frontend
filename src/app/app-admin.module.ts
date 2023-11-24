import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./administrador/dashboard/dashboard.component";
import {ActivateAdminGuard} from "./guards/activate-admin.guard";
import {AdminProductosComponent} from "./administrador/admin-productos/admin-productos.component";
import {AdminProductoDetalleComponent} from "./administrador/admin-producto-detalle/admin-producto-detalle.component";
import {AdminPedidosComponent} from "./administrador/admin-pedidos/admin-pedidos.component";
import {AdminPedidosDetalleComponent} from "./administrador/admin-pedidos-detalle/admin-pedidos-detalle.component";
import {AdminCategoriaComponent} from "./administrador/admin-categoria/admin-categoria.component";
import {
    AdminCategoriaDetalleComponent
} from "./administrador/admin-categoria-detalle/admin-categoria-detalle.component";
import {AdminUsuariosComponent} from "./administrador/admin-usuarios/admin-usuarios.component";
import {AdminConfiguracionComponent} from "./administrador/admin-configuracion/admin-configuracion.component";
import {NoautorizadoComponent} from "./errors/noautorizado/noautorizado.component";
import {ResultadosComponent} from "./resultados/resultados.component";
import {NavbarAdminComponent} from "./administrador/navbar-admin/navbar-admin.component";
import {
    AdminProductoModalDetalleComponent
} from "./administrador/admin-producto-modal-detalle/admin-producto-modal-detalle.component";
import {AdminProductoNuevoComponent} from "./administrador/admin-producto-nuevo/admin-producto-nuevo.component";
import {AdminCategoriaNuevaComponent} from "./administrador/admin-categoria-nueva/admin-categoria-nueva.component";
import {AdminCategoriaEditarComponent} from "./administrador/admin-categoria-editar/admin-categoria-editar.component";
import {
    AdminCategoriaConfirmarEliminacionComponent
} from "./administrador/admin-categoria-confirmar-eliminacion/admin-categoria-confirmar-eliminacion.component";
import {AdminUsuariosNuevoComponent} from "./administrador/admin-usuarios-nuevo/admin-usuarios-nuevo.component";
import {AdminUsuariosEditarComponent} from "./administrador/admin-usuarios-editar/admin-usuarios-editar.component";
import {
    AdminUsuariosCambiarClaveComponent
} from "./administrador/admin-usuarios-cambiar-clave/admin-usuarios-cambiar-clave.component";
import {
    AdminConfiguracionAccionesSucursalComponent
} from "./administrador/admin-configuracion-acciones-sucursal/admin-configuracion-acciones-sucursal.component";
import {
    AdminConfiguracionAccionesMediodepagoComponent
} from "./administrador/admin-configuracion-acciones-mediodepago/admin-configuracion-acciones-mediodepago.component";
import {BrowserModule} from "@angular/platform-browser";
import {ToastsContainer} from "./services/toast/toast-container.component";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        NavbarAdminComponent,
        AdminPedidosComponent,
        AdminPedidosDetalleComponent,
        AdminProductosComponent,
        AdminProductoDetalleComponent,
        AdminProductoModalDetalleComponent,
        AdminProductoNuevoComponent,
        AdminCategoriaNuevaComponent,
        AdminCategoriaEditarComponent,
        AdminCategoriaComponent,
        AdminCategoriaDetalleComponent,
        AdminCategoriaConfirmarEliminacionComponent,
        AdminUsuariosComponent,
        AdminUsuariosNuevoComponent,
        AdminUsuariosEditarComponent,
        AdminUsuariosCambiarClaveComponent,
        AdminConfiguracionComponent,
        AdminConfiguracionAccionesSucursalComponent,
        AdminConfiguracionAccionesMediodepagoComponent
    ],
    imports: [
        BrowserModule,
        ToastsContainer,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'administrador', component: DashboardComponent, canActivate: [ActivateAdminGuard]},
            {path: 'administrador/productos', component: AdminProductosComponent, canActivate: [ActivateAdminGuard]},
            {path: 'administrador/productos/:id', component: AdminProductoDetalleComponent, canActivate: [ActivateAdminGuard]},
            {path: 'administrador/pedidos', component: AdminPedidosComponent, canActivate: [ActivateAdminGuard]},
            {path: 'administrador/pedidos/:id', component: AdminPedidosDetalleComponent, canActivate: [ActivateAdminGuard]},
            {path: 'administrador/categorias', component: AdminCategoriaComponent, canActivate: [ActivateAdminGuard]},
            {path: 'administrador/categorias/:id', component: AdminCategoriaDetalleComponent, canActivate: [ActivateAdminGuard]},
            {path: 'administrador/usuarios', component: AdminUsuariosComponent, canActivate: [ActivateAdminGuard]},
            {path: 'administrador/configuracion', component: AdminConfiguracionComponent, canActivate: [ActivateAdminGuard]},
            {path: 'no-autorizado', component: NoautorizadoComponent},
            {path: 'resultados', component: ResultadosComponent}
        ], {useHash: true}),
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        ToastsContainer,
    ],
    exports: [RouterModule, NavbarAdminComponent]
})
export class AppAdminModule {
}
