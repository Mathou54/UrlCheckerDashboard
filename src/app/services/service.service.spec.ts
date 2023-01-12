import {inject, TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';

import {ServiceService} from './service.service';

describe('ServiceService', () => {


	const mockHttp = {
		get: () => null

	};

	beforeEach(() => {

		spyOn(mockHttp, 'get').and.returnValue({
			catch: () => {
				map : () => {
				}
			}

		});

		TestBed.configureTestingModule({
			providers: [ServiceService,
				{provide: HttpClient, useValue: mockHttp}]
		});
	});

	it('should be created', inject([ServiceService], (service: ServiceService) => {
		expect(service).toBeTruthy();
	}));
});
