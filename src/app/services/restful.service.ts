import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  constructor(public http: Http) { }

  //access apis Get Request 
  getUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
      .map(res => res.json());
  }

}
