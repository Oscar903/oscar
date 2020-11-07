import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpClientModule,
} from "@angular/common/http";
import { GLOBAL } from "./GLOBAL";
import { map } from "rxjs/operators";
import { Ptient } from '../models/ptient';


@Injectable()
export class PtientService {

  public url: string;
  constructor(private http: HttpClient) {
    
    this.url = GLOBAL.url;
    
  }
  ptients: Ptient[];

  register(ptient) {
    let json = JSON.stringify(ptient);
    let headers = new HttpHeaders({
      "content-type": "Application/Json",
    });
    return this.http
      .post(this.url + "save-ptient", json, { headers })
      .pipe(map((res) => res));
  }

update(ptient) {
  let json = JSON.stringify(ptient);
  let headers = new HttpHeaders({
    "content-type": "Application/Json",
  });
  return this.http
    .put(this.url + "update-ptient/" + ptient._id , json, { headers })
    .pipe(map((res) => res));
}

delete(ptient) {
  let json = JSON.stringify(ptient);
  let headers = new HttpHeaders({
    "content-type": "Application/Json",
  });
  return this.http
    .delete(this.url + "delete-ptient/" + ptient._id ,)
    .pipe(map((res) => res));
}

get(ptient) {
  let json = JSON.stringify(ptient);
  let headers = new HttpHeaders({
    "content-type": "Application/Json",
  });
  return this.http
    .get(this.url + "/get-ptient/" + ptient._id ,)
    .pipe(map((res) => res));
}

getPtient(page) {
  let headers = new HttpHeaders({
    "content-type": "Application/Json",
  });
  return this.http
    .get(this.url + "/get-ptients/" + page ,)
    .pipe(map(res => res));
}

search(ptient) {
  let json = JSON.stringify(ptient);
  let headers = new HttpHeaders({
    "content-type": "Application/Json",
  });
  return this.http
    .get(this.url + "ptient/" + ptient.nombre)
    .pipe(map((res) => res));
}


  }