/**
 * Angular 2 decorators and services
 */
import {Component, OnInit} from '@angular/core';


/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public ngOnInit() {
    console.log('Initial App State');
  }
}
