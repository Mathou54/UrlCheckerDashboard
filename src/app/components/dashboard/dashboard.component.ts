import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {Service} from '../../model/service';
import {ServiceService} from '../../services/service.service';
import {map} from 'rxjs/operators';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	services: Observable<Service[]>;

	controls: UntypedFormGroup;

	refreshCount: number;

	constructor(private fb: UntypedFormBuilder,
	            private service: ServiceService) {
	}

	ngOnInit() {
		this.controls = this.fb.group({
			refreshTime: [10, Validators.min(1)]
		});

		this.services = of([]);

		this.getServices();
	}

	isRefreshing(): boolean {
		return this.refreshCount > 0;
	}

	private startUpdateServiceStatus(): void {
		setTimeout(() => {

			this.services = this.services.pipe(
				map((services: Service[]) => {
						this.refreshCount = services.length;

						services = services.map((service: Service) => {
							service.health = this.service.updateStatus(service);
							this.refreshCount--;
							return service;
						});


						return services;
					}
				)
			);

			this.startUpdateServiceStatus();
		}, 1000 * this.controls.get('refreshTime').value);
	}

	private getServices() {
		this.services = this.service.get();

		this.startUpdateServiceStatus();
	}
}
