import {Component, OnInit} from '@angular/core';
import {Service} from "../../model/service";
import {ServiceService} from "../../services/service.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	services: Observable<Service[]>;

	controls: FormGroup;

	refreshCount: number;

	constructor(private fb: FormBuilder,
	            private service: ServiceService) {
	}

	ngOnInit() {
		this.controls = this.fb.group({
			'refreshTime': [10, Validators.min(1)]
		});

		this.services = Observable.of([]);

		this.getServices();
	}

	private startUpdateServiceStatus(): void {
		setTimeout(() => {

			this.refreshCount = this.services.length;

			this.services.map((services: Service[]) => {
				services.map((service: Service) => {
					service.health = this.service.updateStatus(service);
					this.refreshCount--;
					return service;
				})
			).subscribe();
			});

			this.startUpdateServiceStatus();
		}, 1000 * this.controls.get('refreshTime').value);
	}

	private isRefreshing(): boolean {
		return this.refreshCount > 0;
	}

	private getServices() {
		this.services = this.service.get();

		this.startUpdateServiceStatus();
	}
}
