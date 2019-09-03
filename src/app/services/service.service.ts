import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {Service} from '../model/service';
import {Health} from '../model/health';

@Injectable()
export class ServiceService {

	constructor(private http: HttpClient) {
	}

	updateStatus(service: Service): Observable<Health> {
		return this.http.get<Health>(service.url)
			.pipe(
				catchError((error: any) => of({status: error.status}))
			);
	}

	get(): Observable<Service[]> {
		return this.http.get<Service[]>('assets/services.json')
			.pipe(
				catchError(error => throwError(error))
			);
	}

}
