import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  usersData: any;
  searchTerm: string = "";

  ngOnInit() {
    this.getAllGenres();
  }

  constructor(
    public userService: UserService
  ) {
    this.usersData = [];
  }

  getAllGenres() {
    this.userService.getUsers().subscribe(response => {
      this.usersData = response;
    });
  }

}
