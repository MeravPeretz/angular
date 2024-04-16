import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
    user:User|undefined;
  async login(name: string, password: string): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      this.http.get(`https://localhost:44337/api/User/GetUser?name=${name}&password=${password}`).subscribe((res: any) => {
        this.user = res;
        resolve(this.user);
      });
    });
  }
}
