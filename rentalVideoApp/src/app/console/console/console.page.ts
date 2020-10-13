import { Component, OnInit } from '@angular/core';
import { ConsolesService } from 'src/app/services/consoles.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.page.html',
  styleUrls: ['./console.page.scss'],
})
export class ConsolePage implements OnInit {

  consolesData: any;
  searchTerm: string = "";

  ngOnInit() {
    this.getAllConsolas();
  }

  constructor(
    public consoleService: ConsolesService
  ) {
    this.consolesData = [];
  }

  getAllConsolas() {
    this.consoleService.getConsoles().subscribe(response => {
      console.log(response);
      this.consolesData = response;
    });
  }

}
