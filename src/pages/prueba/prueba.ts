import { Component} from '@angular/core'
import  {NavController} from "ionic-angular";

@Component ({
  selector: 'pages-prueba',
  templateUrl:'prueba.html'
})

export class PruebaPage {
  constructor(public navCtrl: NavController){}

  atras(){
    this.navCtrl.pop();
  }
}
