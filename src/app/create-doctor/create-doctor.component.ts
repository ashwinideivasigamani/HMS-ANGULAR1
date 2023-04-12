import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  doctor:Doctor=new Doctor();
  doctors: Doctor[]=[];
  data:any;
  constructor(private service:DoctorService,private router:Router,private share:SharedService){}
  ngOnInit(): void {
    this.share.on().subscribe(data=>
      {
        this.data=data;
        console.log(data);
      });
      
   
  }

  updateData()
      {
      this.share.emit(this.data);
      }


    
  

  saveDoctor()
  {
    this.service.createDoctor(this.doctor).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
    this.goToDoctorList();
    this.getDoctors();
  }

  goToDoctorList()
  {
    this.router.navigate(["/doctors"]);
  }
  onSubmit()
  {
    this.saveDoctor();
  }

  getDoctors()
  {
    this.service.getDoctorsList().subscribe(data=>
      {
        this.doctors=data;
      })
  }

}
