import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  email:String="";
  doctor:Doctor=new Doctor;
  constructor(private router:Router ,private service:DoctorService,private rout:ActivatedRoute)
    {

    }
  ngOnInit(): void {
    this.rout.queryParams.subscribe(param=>
      {
        this.email=param['email'];
        console.log(this.email);
      });
      this.service.getByEmail(this.email).subscribe(data=>
        {
          this.doctor=data;
          console.log(this.doctor);
        });
        
  }
  
  
  goToPatients()
  {
    this.router.navigate(["/patients"])
  }
  goToReps()
  {
    this.router.navigate(["/addPatients"])
  }

  
    goToAppList()
  {
    this.router.navigate(["/appointments"]);
  }
  doc()
  {
    let queryParams ={profile:JSON.stringify(this.doctor)}
  this.router.navigate(["/doctorInfo"],{queryParams});


  }
}
