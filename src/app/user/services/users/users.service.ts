import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import Users from 'src/app/core/types/users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(): any {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
