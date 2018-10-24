import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import  {ElementoPage} from '../pages/elemento/elemento';
import  {PruebaPage} from '../pages/prueba/prueba';

import { MyApp } from './app.component';
import { HomePage} from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ElementoPage,
    PruebaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ElementoPage,
    PruebaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
