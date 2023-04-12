import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';
import { query } from '@angular/animations';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.css']
})
export class DocHomeComponent implements OnInit {
  
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

doc()
{
  let queryParams ={profile:JSON.stringify(this.doctor)}
  this.router.navigate(["/doctorInfo"],{queryParams});

}

}
