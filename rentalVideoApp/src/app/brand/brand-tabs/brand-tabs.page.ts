import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-tabs',
  templateUrl: './brand-tabs.page.html',
  styleUrls: ['./brand-tabs.page.scss'],
})
export class BrandTabsPage implements OnInit {

  brandsData: any;

  ngOnInit() {
    this.getAllBrands();
  }

  constructor(
    public genreService: BrandService
  ) {
    this.brandsData = [];
  }

  getAllBrands() {
    this.genreService.getBrands().subscribe(response => {
      console.log(response);
      this.brandsData = response;
    });
  }
}
