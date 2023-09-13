import { Component, OnInit } from '@angular/core';
import{LoginStatusService} from '../login-status.service'

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.css']
})
export class MicuentaComponent implements OnInit {

  constructor(public loginstatusservice: LoginStatusService) { }


  ngOnInit(): void {
  }

  opcion: number = 1;

  cambiaop1() {

this.opcion = 1;

  }
  cambiaop2() {

    this.opcion = 2;
    
      }
}
