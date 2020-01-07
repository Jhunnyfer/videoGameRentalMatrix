import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Renta',
      url: '/rental-tabs',
      icon: 'md-pricetag'
    },
    {
      title: 'Films',
      url: '/film-tabs',
      icon: 'md-videocam'
    },
    {
      title: 'Generos',
      url: '/genre-tabs',
      icon: 'md-list'
    },
    {
      title: 'Creditos',
      url: '/credit',
      icon: 'md-people'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
