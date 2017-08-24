import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ServiceService} from "./services/service.service";
import {HttpModule} from "@angular/http";

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		HttpModule
	],
	providers: [ServiceService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
