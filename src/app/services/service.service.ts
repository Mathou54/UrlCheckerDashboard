import {Injectable} from '@angular/core';

@Injectable()
export class ServiceService {

  constructor(private http: Http) {
  }

  updateStatus(service: Service): Obserervable<Health>{
    return this.http.get(service.url)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
