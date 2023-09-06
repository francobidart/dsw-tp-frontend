import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Output() closePopup = new EventEmitter<void>(); // Evento para cerrar el pop-up

  // Lógica de inicio de sesión y luego cerrar el pop-up
  login() {
    // Lógica de inicio de sesión aquí

    // Cerrar el pop-up
    this.closePopup.emit();
  }

}
