import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import 'rxjs/Rx';

@Injectable()
export class BaseService {

  constructor(private http: Http) {
  }

  public url = 'http://localhost:5000';

  getBaseAll(endpoint, Model) {
    return this.http.get(this.url + endpoint)
      .map((res: Response) => res.json().data.map((obj) => new Model(obj)));
  }

  getBase(endpoint, Model) {
    return this.http.get(this.url + endpoint)
      .map((res: Response) => new Model(res.json().data));
  }
}
