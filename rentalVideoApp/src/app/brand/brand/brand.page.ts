import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.page.html',
  styleUrls: ['./brand.page.scss'],
})
export class BrandPage implements OnInit {

  brandsData: any;
  searchTerm: string = "";

  ngOnInit() {
    this.getAllBrands();
  }

  constructor(
    public brandService: BrandService,
    public alertCtrl: AlertController
  ) {
    this.brandsData = [];
  }

  getAllBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brandsData = response;
    });
  }

  async removeItem(item){
    
      const alert = await this.alertCtrl.create({  
        header: 'Confirmación',  
        message: '¿Está seguro que desea eliminar el registro?',  
        buttons: [
          {
            text: 'SI',
            handler: () => {
              this.brandService.deleteItem(item).subscribe(response => {
                this.brandsData = response;
                this.getAllBrands();
              });
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
