import { Component, OnInit } from '@angular/core';
import { Product, Products} from "../models/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products = Products;

  constructor() { }

  ngOnInit(): void {
  }

}
