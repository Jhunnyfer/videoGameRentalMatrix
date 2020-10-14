import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  gamesData: any;
  searchTerm: string = "";


  ngOnInit(): void {
    this.getAllFilms();
  }

  constructor(
    public filmService: GameService,
    public alertCtrl: AlertController,
    public router: Router
  ) {
    this.gamesData = [];
  }

  getAllFilms() {
    this.filmService.getGames().subscribe(response => {
      this.gamesData = response;
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
            this.getAllFilms();
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

  editItem(id: number){
    this.router.navigate(['/game-edit/' + id]);
  }

  addCredits(id: number){
    //this.router.navigate(['/game-edit/' + id]);
  }

}
