import {Component, Input, OnInit} from '@angular/core';
import {Service} from '../../model/service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	service: Service;

	constructor() {
	}

	ngOnInit() {
	}

}
