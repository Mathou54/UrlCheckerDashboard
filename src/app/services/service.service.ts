import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Service} from "../model/service";
import {Observable} from "rxjs/Observable";
import {Health} from "../model/health";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/of";

@Injectable()
export class ServiceService {

	constructor(private http: Http) {
	}

	updateStatus(service: Service): Observable<Health> {
		return this.http.get(service.url)
			.map((res: Response) => res.json() as Health)
			.catch((error: any) => Observable.of({status: error.status}));
	}

}
