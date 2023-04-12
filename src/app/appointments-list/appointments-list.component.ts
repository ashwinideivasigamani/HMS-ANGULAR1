import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent {

  appointments:Appointment[]=[];
  role:string="";

  constructor(private service:AppointmentService,private router:Router,private acti:ActivatedRoute){}
  ngOnInit(): void {
    this.getapps();
    
  }

  getapps()
  {
    this.service.getAppList().subscribe(data=>{
      console.log(data);
      this.appointments=data;
    },
    error=>console.log(error));
  }

  add()
  {
    this.router.navigate(["/addAppointment"]);
  }

  updateApp(id:number)
  {
    this.router.navigate(["updateAppointment",id]);
  }

  deleteApp(id:number)
  {
    this.service.deleteApp(id).subscribe(data=>{
      console.log(data);
      this.getapps();
      this.goToAppList();
  
    },
    error=>console.log(error));
  }

  goToAppList()
  {
    this.router.navigate(["/appointments"]);
  }
  back()
  {
    this.router.navigate(["/admindashboard"])
  }
}
