import { Component, OnInit } from '@angular/core';

import { RestfulService } from '../services/restful.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  //field 
  users: any[];

  constructor(public getdata: RestfulService) {

    this.getdata.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });

  }

  ngOnInit() {
  }

}
