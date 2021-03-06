import {Health} from './health';
import {Observable} from 'rxjs';

export class Service {
	name: string;
	url: string;
	health: Observable<Health>;

	constructor(name: string, url: string) {
		this.name = name;
		this.url = url;
	}
}
