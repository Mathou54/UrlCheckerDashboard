import {Component, OnInit} from '@angular/core';
import {Service} from "../../model/service";
import {ServiceService} from "../../services/service.service";
import {Health} from "../../model/health";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	services: Service[];

	constructor(private service: ServiceService) {
	}

	ngOnInit() {
		this.services = [{
			name: 'Up',
			url: 'assets/services/health-up.json',
			health: null
		}, {
			name: 'Down',
			url: 'assets/services/health-down.json',
			health: null
		}, {
			name: 'Not exist',
			url: 'assets/services/health-not-exist.json',
			health: null
		}, {
			name: 'Up',
			url: 'assets/services/health-up.json',
			health: null
		}, {
			name: 'Down',
			url: 'assets/services/health-down.json',
			health: null
		}, {
			name: 'Not exist',
			url: 'assets/services/health-not-exist.json',
			health: null
		}, {
			name: 'Up',
			url: 'assets/services/health-up.json',
			health: null
		}, {
			name: 'Down',
			url: 'assets/services/health-down.json',
			health: null
		}, {
			name: 'Not exist',
			url: 'assets/services/health-not-exist.json',
			health: null
		}];

		this.startUpdateServiceStatus();
	}

	public display(service: Service): string {
		let str = service.name + ' ' + service.url;
		if (service.health) {
			return str + ' ' + service.health.status;
		} else {
			return str;
		}
	}

	private startUpdateServiceStatus(): void {
		setTimeout(() => {
			this.services.forEach((service: Service) => {
				this.service.updateStatus(service)
					.subscribe((health: Health) => {
						service.health = health;
					});
			});
		}, 10000);
	}

}
