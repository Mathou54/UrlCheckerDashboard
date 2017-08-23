import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Service} from "../model/service";
import {Observable} from "rxjs/Observable";
import {Health} from "../model/health";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ServiceService {

	constructor(private http: Http) {
	}

	updateStatus(service: Service): Observable<Health> {
		return this.http.get(service.url)
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'))
			.map((res: Response) => res.json() as Health);
	}

}
