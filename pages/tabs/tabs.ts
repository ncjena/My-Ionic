import { Component } from '@angular/core';

import { GalleryPage } from '../gallery/gallery';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AlumniComponent } from '../alumni/alumni.component';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = GalleryPage;
  tab3Root = AlumniComponent;
  tab4Root = ContactPage;

  constructor() {}
}
