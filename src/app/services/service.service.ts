import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Service} from "../model/service";
import {Observable} from "rxjs/Observable";
import {Health} from "../model/health";

@Injectable()
export class ServiceService {

	constructor(private http: Http) {
	}

	updateStatus(service: Service): Observable<Health> {
		return this.http.get(service.url)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

}
