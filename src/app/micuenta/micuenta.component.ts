import {Component, OnInit} from '@angular/core';
import {LoginStatusService} from '../login-status.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.css']
})
export class MicuentaComponent implements OnInit {

  constructor(public loginstatusservice: LoginStatusService, private router: Router) {
  }


  ngOnInit(): void {
  }

  opcion: number = 1;

  cambiaop1() {
    this.opcion = 1;
  }

  cambiaop2() {
    this.opcion = 2;
  }

  logout() {
    this.loginstatusservice.logout();
    this.router.navigate(['/']);
  }
}
