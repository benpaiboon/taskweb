import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: Array<any>;

  constructor(private http:Http) { 
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .map(response => response.json())
    .subscribe(res => this.users = res);
  }

  ngOnInit() {
  }

}
