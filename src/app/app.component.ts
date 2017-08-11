
import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  navMode = 'side';
  opened=false;
  public imageUrl;
  constructor(
  ) { }


  ngOnInit() {
    if (window.innerWidth >960) {
      this.navMode = 'side';
      this.opened=true;
    }
    else{
      this.opened=false;
    }
    this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1hJzWM3QVJlDyR2Ef0JsahD1me4vt7OhhY8YILIlGETf5vWt";

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 991) {
      this.navMode = 'over';
      this.sidenav.close();
    }
    if (event.target.innerWidth >= 991) {
      this.navMode = 'side';
      this.sidenav.open();
    }
  }

  closeSideNav (){
    if (window.innerWidth < 991) {
      this.sidenav.close()
    }
  }

}
