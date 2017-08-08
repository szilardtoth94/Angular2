import { BrowserModule } from '@angular/platform-browser';
import { MdSidenavModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';

import '../styles/styles.scss';
import '../styles/headings.css';

import {AboutComponent, HomeComponent, UsersComponent } from 'pages';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    AboutComponent,
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    MdSidenavModule,
    RouterModule.forRoot(ROUTES),
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: []
})
export class AppModule {}
