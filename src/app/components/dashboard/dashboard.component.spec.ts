import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {ServiceService} from "../../services/service.service";

import 'rxjs/add/observable/of';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('DashboardComponent', () => {
	let component: DashboardComponent;
	let fixture: ComponentFixture<DashboardComponent>;

	beforeEach(async(() => {

		let mockServiceService = {
			updateStatus: function () {
			}
		};
		spyOn(mockServiceService, 'updateStatus');

		TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			declarations: [DashboardComponent],
			providers: [{provide: ServiceService, useValue: mockServiceService}]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
