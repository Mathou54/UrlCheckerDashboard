import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ServiceService} from './services/service.service';
import {CardComponent} from './components/card/card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		CardComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	providers: [ServiceService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
