
import {Component, OnInit, ViewChild} from "@angular/core";
import {MdSidenav} from "@angular/material";

@Component ({
  selector: 'platform',
  templateUrl: './platform.component.html',
  styleUrls:['./platform.css']
})

export class PlatformComponent implements OnInit {
@ViewChild('sidenav') sidenav: MdSidenav;
public imageUrl;

  ngOnInit() {
    this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1hJzWM3QVJlDyR2Ef0JsahD1me4vt7OhhY8YILIlGETf5vWt";
  }

  closeSideNav() {
    this.sidenav.close();
  }
  signOut(){
    localStorage.clear();
  }

}
