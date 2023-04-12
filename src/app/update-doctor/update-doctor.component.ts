import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  id: number = 0;
  doctor: Doctor = new Doctor();
  profile :String="";
  constructor(private service: DoctorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.service.getDoctorById(this.id).subscribe(data => {
      this.doctor = data;
    
    },

      error => console.log(error));
      this.route.queryParams.subscribe(param=>
        {
          this.profile=param['profile']
        })
  }

  onSub() {
    this.service.updateDoctorById(this.id, this.doctor).subscribe(data => {
      if(this.profile=='profile')
      {
        alert("Profile data updated susscefully");
        this.router.navigate(["/doctorInfo"])
      }
      else{
        this.router.navigate(["/doctors"]);
      }
     
    },
    error=>console.log(error));
  }

}


