import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Home, Register, Special, Specials } from '../interfaces/common';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  server = environment.server;

  constructor(private http: HttpClient) {}

  getHome() {
    return this.http.get<Home>(
      this.server + '/api/homepage-autu-class?populate=*'
    );
  }

  registerUser(data: any) {
    return this.http.post<Register>(
      this.server + '/api/auth/local/register',
      data
    );
  }

  login(data: any) {
    return this.http.post<{ jwt: string }>(
      this.server + '/api/auth/local',
      data
    );
  }

  isLoggedIn() {
    if (localStorage.getItem('jwt')) {
      return true;
    } else {
      return false;
    }
  }

  getSpecials() {
    return this.http.get<Specials>(this.server + '/api/special-auth-classes', {
      headers: {
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    });
  }
}
