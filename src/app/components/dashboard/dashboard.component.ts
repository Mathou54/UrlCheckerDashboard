import {Component, OnInit} from '@angular/core';
import {Service} from '../../model/service';
import {ServiceService} from '../../services/service.service';
import {Health} from '../../model/health';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	services: Service[];

	controls: FormGroup;

	constructor(private fb: FormBuilder,
	            private service: ServiceService) {
	}

	ngOnInit() {
		this.controls = this.fb.group({
			'refreshTime': [10]
		});

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
		}, 1000 * this.controls.get('refreshTime').value);
	}

}
