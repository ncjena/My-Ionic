import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { GalleryPage } from '../pages/gallery/gallery';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AlumniComponent } from '../pages/alumni/alumni.component';

@NgModule({
  declarations: [
    MyApp,
    GalleryPage,
    ContactPage,
    HomePage,
    TabsPage,
    AlumniComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GalleryPage,
    ContactPage,
    HomePage,
    AlumniComponent,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
