import {Health} from "./health";

const SEPARATOR = ' ';

export class Service {
	name: string;
	url: string;
	health: Health;

	constructor(name: string, url: string) {
		this.name = name;
		this.url = url;
	}

	toString(): string {
		let str = this.name + SEPARATOR + this.url;
		if (this.health) {
			return str + SEPARATOR + this.health.status;
		} else {
			return str;
		}
	}
}
