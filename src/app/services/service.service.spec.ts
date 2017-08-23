import {inject, TestBed} from '@angular/core/testing';

import {ServiceService} from './service.service';
import {Http} from "@angular/http";

describe('ServiceService', () => {


	let mockHttp = {
		get: function () {
		}
	};

	beforeEach(() => {

		spyOn(mockHttp, 'get').and.returnValue({
			catch: function () {
				return {
					map: function () {
					}
				};
			}
		});

		TestBed.configureTestingModule({
			providers: [ServiceService,
				{provide: Http, useValue: mockHttp}]
		});
	});

	it('should be created', inject([ServiceService], (service: ServiceService) => {
		expect(service).toBeTruthy();
	}));
});
