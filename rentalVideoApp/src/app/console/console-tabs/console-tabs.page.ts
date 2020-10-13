import { Component, OnInit } from '@angular/core';
import { ConsolesService } from 'src/app/services/consoles.service';

@Component({
  selector: 'app-console-tabs',
  templateUrl: './console-tabs.page.html',
  styleUrls: ['./console-tabs.page.scss'],
})
export class ConsoleTabsPage implements OnInit {

  consolesData: any;

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
