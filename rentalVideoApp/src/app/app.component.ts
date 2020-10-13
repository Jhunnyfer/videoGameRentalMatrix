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
      title: 'Video Juegos',
      url: '/game-tabs',
      icon: 'md-film'
    },
    {
      title: 'Creadores',
      url: '/brand-tabs',
      icon: 'md-list'
    },
    {
      title: 'Consolas',
      url: '/console-tabs',
      icon: 'md-list'
    },
    {
      title: 'Generos',
      url: '/genre-tabs',
      icon: 'md-list'
    },
    {
      title: 'Creditos',
      url: '/credit',
      icon: 'md-list'
    },
    {
      title: 'Usuarios',
      url: '/user-tabs',
      icon: 'md-people'
    },
    {
      title: 'Reportes',
      url: '/reports',
      icon: 'md-list'
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
