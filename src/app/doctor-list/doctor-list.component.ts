import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit{

  doctors:Doctor[]=[];
  role: string="";
  constructor(private service:DoctorService,private router:Router,private rout:ActivatedRoute){}
  ngOnInit(): void {
    this.getDoctors();
    this.rout.queryParams.subscribe(params=>{
      this.role=params['role'];
      console.log(this.role);
    });
  }
  getDoctors()
  {
    this.service.getDoctorsList().subscribe(data=>
      {
        this.doctors=data;
      })
  }
  add()
  {
    this.router.navigate(["/createdoctor"]);
  }

  updateDoctor(id:number)
  {
    this.router.navigate(["updatedoctor",id])
  }

  deleteDoctor(id:number)
  {
    this.service.deleteDoctor(id).subscribe(data=>{
      console.log(data);
      this.goToDoctorsList();
    },
    error=>console.log(error));
  }
  goToDoctorsList()
  {
    this.router.navigate(["/doctors"]);
  }
  back()
  {
    this.router.navigate(["/admindashboard"])
  }
  

}
