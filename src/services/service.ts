import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import "rxjs/add/operator/map";
import 'rxjs/Rx';
import {Router} from "@angular/router";

@Injectable()
export class BaseService {

  constructor(private http: Http, private router: Router) {
  }

  public url = 'http://localhost:5000';

  getBaseAll(endpoint, Model) {
    let user = btoa(localStorage.getItem("name") + ":" + localStorage.getItem("password"));
    let headers = new Headers({'Authorization': user});
    let options = new RequestOptions({headers: headers});

    return this.http.get(this.url + endpoint, options)
      .map((res: Response) => res.json().data.map((obj) => new Model(obj)));
  }

  getBase(endpoint, Model) {
    let user = btoa(localStorage.getItem("name") + ":" + localStorage.getItem("password"));
    let headers = new Headers({'Authorization': user});
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.url + endpoint, options)
      .map((res: Response) => new Model(res.json().data));
  }

  createBase(endpoint, body) {
    let user = btoa(localStorage.getItem("name") + ":" + localStorage.getItem("password"));
    let headers = new Headers({'Authorization': user});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + endpoint, body, options)
      .map((res: Response) => res.json());
  }

  login(endpoint, Model, body) {
    return this.http.post(this.url + endpoint, body)
      .map((res: Response) => {
        if (res.json().data)
          return new Model(res.json().data)
        else
          return null;
      });
  }

  updateBase(endpoint, body) {
    let user = btoa(localStorage.getItem("name") + ":" + localStorage.getItem("password"));
    let headers = new Headers({'Authorization': user});
    let options = new RequestOptions({headers: headers});
    return this.http.put(this.url + endpoint, body, options)
      .map((res: Response) => res.json());
  }

  deleteBase(endpoint) {
    let user = btoa(localStorage.getItem("name") + ":" + localStorage.getItem("password"));
    let headers = new Headers({'Authorization': user});
    let options = new RequestOptions({headers: headers});
    return this.http.delete(this.url + endpoint, options)
      .map((res: Response) => res.json());
  }

}
