import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.page.html',
  styleUrls: ['./genre.page.scss'],
})
export class GenrePage implements OnInit {

  genresData: any;

  ngOnInit() {
    this.getAllGenres();
  }

  constructor(
    public genreService: GenreService,
    public alertCtrl: AlertController
  ) {
    this.genresData = [];
  }

  getAllGenres() {
    this.genreService.getGenres().subscribe(response => {
      console.log(response);
      this.genresData = response;
    });
  }


  async removeItem(item) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: '¿Está seguro que desea eliminar el registro?',
      buttons: [
        {
          text: 'SI',
          handler: () => {

          }
        },
        {
          text: 'NO',
          handler: () => {

          }
        }
      ]
    });
    await alert.present();
  }

}
