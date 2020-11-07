import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpClientModule,
} from "@angular/common/http";
import { GLOBAL } from "./GLOBAL";
import { map } from "rxjs/operators";
import { User } from '../models/user';

@Injectable()
export class UserService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  user: User[];
  
  signup(user, gethash = null) {
    if (gethash != null) {
      user.gethash = gethash;
    }
    let json = JSON.stringify(user);
    let headers = new HttpHeaders({
      "content-type": "Application/Json",
    });
    return this.http
      .post(this.url + "login", json, { headers })
      .pipe(map((res) => res));
  }
  
  register(user) {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders({
      "content-type": "Application/Json",
    });
    return this.http
      .post(this.url + "register", json, { headers })
      .pipe(map((res) => res));
  }
}