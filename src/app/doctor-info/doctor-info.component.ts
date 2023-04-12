import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit{
  doctor: Doctor=new Doctor;
  constructor(private  route:ActivatedRoute,private router:Router)
  {
     this.route.queryParams.subscribe(param=>
      {
        let doctorstring=param['profile']
        if(doctorstring)
        {
            this.doctor=JSON.parse(doctorstring);
        }
            });
   
  }
  ngOnInit(): void {
    
    
  }
  goToUpdateDoctor(id:number)
  {

    this.router.navigate(["updatedoctor",id],{queryParams:{profile:'profile'}});
  }
 
}
