import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users/users.service';

import Users from 'src/app/core/types/users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: Users[] | undefined;

  constructor(private userService: UsersService) {
    this.users = undefined;
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
