import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter-pipe-demo';
  public query='';
  searchFilter:any;
  

  constructor(){}
  employees =[
    {"id":100,"name":"Shantanu","city":"Hyderabad"},
    {"id":101,"name":"Shankar","city":"Bangalore"},
    {"id":102,"name":"Subhash","city":"Pune"},
    {"id":103,"name":"Kirti","city":"Hyderabad"},
    {"id":104,"name":"Shital","city":"Chennai"},
    {"id":105,"name":"Karan","city":"Pune"}
  ]
}
