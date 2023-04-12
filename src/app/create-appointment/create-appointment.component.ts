import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {
  app:Appointment=new Appointment();
  appointments: Appointment[]=[];
  constructor(private service:AppointmentService,private router:Router){}
  ngOnInit(): void {
    

  }

  saveApp()
  {
    this.service.createApp(this.app).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
    this.goToAppList();
    this.getapps();
  }

  goToAppList()
  {
    this.router.navigate(["/appointments"]);
  }
  
  onSubmit()
  {
    this.saveApp();
  }

  getapps()
  {
    this.service.getAppList().subscribe(data=>{
      console.log(data);
      this.appointments=data;
    },
    error=>console.log(error));
  }
  
  
  
}
