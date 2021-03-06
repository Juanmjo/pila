import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ElementoPage} from '../elemento/elemento';
import {PruebaPage} from '../prueba/prueba';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  agregarPagina() {
    this.navCtrl.push(ElementoPage);
  }

  PaginaPrueba(){
    this.navCtrl.push(PruebaPage);
  }


}

