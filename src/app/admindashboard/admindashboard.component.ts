import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  constructor(private route:Router)
  {

  }

  goToDoctors(){
    this.route.navigate(["/doctors"],{queryParams: {role: 'admin'}});
  }

  goToPatients(){
    this.route.navigate(["/patients"],{queryParams:{role:'admin'}});
  }

  goToReps(){
    this.route.navigate(["/reps"],{queryParams:{role:'admin'}});
  }
  goToBills()
  {
    this.route.navigate(['/bills'],{queryParams: {role:'admin'}});
  }
  goToApps()
  {
    this.route.navigate(['/addAppointment'],{queryParams:{role:'admin'}});
  }
  goToAppsList()
  {
    this.route.navigate(['/appointments'],{queryParams:{role:'admin'}});
  }
}
