import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { ContactPage } from '../contact/contact';
import { FeedPage } from '../feed/feed';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedPage;
  tab5Root = ConfiguracoesPage;


  constructor() {

  }
}
