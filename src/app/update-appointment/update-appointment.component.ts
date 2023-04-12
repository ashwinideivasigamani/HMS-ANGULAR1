import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent {
  id: number = 0;
  app: Appointment = new Appointment();
  constructor(private service: AppointmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.service.getAppById(this.id).subscribe(data => {
      this.app = data;
      console.log(data);
    },
      error => console.log(error));
  }
  onSub() {
   
    this.service.updateAppById(this.id, this.app).subscribe(data => {
      this.router.navigate(["/appointments"]);
    },
    error=>console.log(error));
  }
}
