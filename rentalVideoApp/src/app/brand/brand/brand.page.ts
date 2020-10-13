import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

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
