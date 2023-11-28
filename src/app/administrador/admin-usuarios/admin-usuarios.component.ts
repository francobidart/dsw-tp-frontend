import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {TipoProductoServiceService} from "../../services/tipo-producto-service.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../services/toast/toast-service";
import {TipoProducto} from "../../models/tipo-producto";
import {
  AdminCategoriaConfirmarEliminacionComponent
} from "../admin-categoria-confirmar-eliminacion/admin-categoria-confirmar-eliminacion.component";
import {AdminCategoriaNuevaComponent} from "../admin-categoria-nueva/admin-categoria-nueva.component";
import {NgbdModalEditarCategoria} from "../admin-categoria/admin-categoria.component";
import {UserService} from "../../services/user.service";
import {AdminUsuariosNuevoComponent} from "../admin-usuarios-nuevo/admin-usuarios-nuevo.component";
import {AdminUsuariosEditarComponent} from "../admin-usuarios-editar/admin-usuarios-editar.component";
import {
  AdminUsuariosCambiarClaveComponent
} from "../admin-usuarios-cambiar-clave/admin-usuarios-cambiar-clave.component";
import {ApiResponse} from "../../models/api-response";

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  Usuarios: Array<User> = [];

  constructor(private usuariosService: UserService, private modalService: NgbModal, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.cargarUsuarios();
  }


  cargarUsuarios() {
    this.usuariosService.listarUsuarios().subscribe({
      next: (res: ApiResponse<User>) => {
        this.Usuarios = res.resultados;
      }
    })
  }

  editarUsuario(usuario: User) {
    const refModal = this.modalService.open(AdminUsuariosEditarComponent);
    refModal.componentInstance.Id = usuario.id;
    refModal.closed.subscribe({
      next: (data: string) => {
        if (data === 'guardado') {
          this.cargarUsuarios();
        }
      }
    })
  }

  deshabilitarUsuario(id: number) {
    this.usuariosService.deshabilitarUsuario(id).subscribe({
      next: (res: ApiResponse<User>) => {
        this.toastService.showSuccess(res.mensaje);
        this.cargarUsuarios();
      },
      error: (err: any) => {
        this.toastService.showError(err.error.mensaje);
      }
    })
  }

  habilitarUsuario(id: number) {
    this.usuariosService.habilitarUsuario(id).subscribe({
      next: (res: ApiResponse<User>) => {
        this.toastService.showSuccess(res.mensaje);
        this.cargarUsuarios();
      },
      error: (err: any) => {
        this.toastService.showError(err.error.mensaje);
      }
    })
  }

  nuevoUsuario() {
    const refModal = this.modalService.open(AdminUsuariosNuevoComponent);
    refModal.closed.subscribe({
      next: (data: string) => {
        if (data === 'registrado') {
          this.cargarUsuarios();
        }
      }
    })
  }

  cambiarClave(id: number) {
    const refModal = this.modalService.open(AdminUsuariosCambiarClaveComponent);
    refModal.componentInstance.Id = id;
    refModal.closed.subscribe({
      next: (data: string) => {
        if (data === 'guardado') {
          this.cargarUsuarios();
        }
      }
    })
  }
}
