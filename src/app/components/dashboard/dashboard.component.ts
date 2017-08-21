import {Component, OnInit} from '@angular/core';

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
    this.services = [new Service("test", "localhost:8080/health")];
  }

  private startUpdateServiceStatus(): void {
    setTimeout(this.updateServicesStatus, 10000);
  }

  private updateServicesStatus(): void {
    this.services.forEach((service: Service) => {
      this.service.updateStatus(service)
        .subscribe((health: Health) => {
          service.health = health;
        });
    })
  }

}
