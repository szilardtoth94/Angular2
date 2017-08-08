import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'users-component',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit{

  public me: object;

  ngOnInit() {
    this.me = {
      name: 'XXX YYY',
      schools: [{
        name: 'Liceul X',
        mainThings: [
          'maths',
          'info',
        ],
      }, {
        name: 'University X',
        mainThings: [
          'Java',
          'C++',
          'Religion',
        ],
      }, {
        name: 'University X',
        mainThings: [
          'Java',
          'C++',
          'Religion',
        ],
      }, {
        name: 'University X',
        mainThings: [
          'Java',
          'C++',
          'Religion',
        ],
      }, {
        name: 'University X',
        mainThings: [
          'Java',
          'C++',
          'Religion',
        ],
      }, {
        name: 'University X',
        mainThings: [
          'Java',
          'C++',
          'Religion',
        ],
      }]
    }
  }
}
